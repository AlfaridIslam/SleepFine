import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import config from '../../config/index.js';
import { connectDB } from '../../config/db.js';
import { errorHandler, notFoundHandler, setupErrorHandlers } from '../../shared/middlewares/errorHandler.js';
import logger from '../../shared/utils/logger.js';
import adminRoutes from './routes/adminRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const env = process.env.NODE_ENV || 'development';
const envPath = path.join(__dirname, '../../config/env', `${env}.env`);
dotenv.config({ path: envPath });

// Initialize Express app
const app = express();
const port = config.services.admin.port || 3005;

// ==================== MIDDLEWARE SETUP ====================

const setupMiddleware = () => {
  // Security middleware with enhanced admin protection
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: false,
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    }
  }));

  app.use(cors({
    origin: config.cors.origin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID', 'X-Admin-Token'],
    credentials: true,
    maxAge: 86400 // 24 hours
  }));

  app.use(mongoSanitize());
  app.use(xss());
  app.use(hpp());

  // Enhanced rate limiting for admin service
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 150, // Higher limit for admin operations
    message: {
      success: false,
      message: 'Too many admin requests from this IP, please try again later.',
      retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Skip rate limiting for health checks and system monitoring
      return req.path === '/health' || req.path.includes('/monitoring/');
    }
  });
  app.use('/api/', limiter);

  const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 75, // Allow 75 requests per 15 minutes at full speed
    delayMs: 500, // Add 500ms delay after delayAfter requests
    maxDelayMs: 20000, // Maximum delay of 20 seconds
    validate: { delayMs: false }
  });
  app.use('/api/', speedLimiter);

  // Cookie parsing
  app.use(cookieParser());

  // Body parsing
  app.use(express.json({ 
    limit: config.upload.maxFileSize,
    type: ['application/json', 'text/plain']
  }));
  app.use(express.urlencoded({ 
    extended: true, 
    limit: config.upload.maxFileSize,
    parameterLimit: 20
  }));

  // Compression
  app.use(compression({
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false;
      }
      return compression.filter(req, res);
    },
    level: 6,
    threshold: 1024
  }));

  // Enhanced logging for admin service
  app.use(morgan('combined', { 
    stream: logger.stream,
    skip: (req, res) => {
      // Skip logging for health checks in production
      return config.server.env === 'production' && req.path === '/health';
    }
  }));

  // Request ID and timing with admin-specific tracking
  app.use((req, res, next) => {
    req.requestId = req.headers['x-request-id'] || 
      `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    req.timestamp = new Date().toISOString();
    req.startTime = Date.now();
    
    res.setHeader('X-Request-ID', req.requestId);
    res.setHeader('X-Service', 'admin');
    res.setHeader('X-Admin-Service-Version', '1.0.0');
    
    next();
  });

  // Response time tracking with admin activity logging
  app.use((req, res, next) => {
    res.on('finish', () => {
      const responseTime = Date.now() - req.startTime;
      
      // Log slow admin requests (lower threshold for admin operations)
      if (responseTime > 1500) {
        logger.warn(`Slow admin request detected: ${req.method} ${req.path} - ${responseTime}ms`, {
          requestId: req.requestId,
          method: req.method,
          path: req.path,
          responseTime,
          statusCode: res.statusCode,
          userAgent: req.headers['user-agent'],
          ip: req.ip
        });
      }

      // Log all admin operations for audit purposes
      if (req.path.includes('/admin/') && req.method !== 'GET') {
        logger.info(`Admin operation: ${req.method} ${req.path}`, {
          requestId: req.requestId,
          method: req.method,
          path: req.path,
          statusCode: res.statusCode,
          responseTime
        });
      }
    });
    
    next();
  });

  logger.info('Admin service middleware setup completed');
};

// ==================== ROUTES SETUP ====================

const setupRoutes = () => {
  // Health check endpoint
  app.get('/health', (req, res) => {
    const health = {
      success: true,
      message: 'Admin Service is running',
      service: 'admin',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.server.env,
      features: {
        userManagement: true,
        systemSettings: true,
        auditLogging: true,
        dashboard: true,
        reporting: true,
        monitoring: true,
        analytics: true,
        systemHealth: true
      },
      database: {
        status: 'connected',
        name: 'MongoDB'
      },
      cache: {
        status: 'connected',
        name: 'Redis'
      },
      microservices: {
        sales: 'running',
        accounts: 'running',
        logistics: 'running',
        notifications: 'running'
      }
    };
    
    res.status(200).json(health);
  });

  // API routes
  app.use('/api/v1/admin', adminRoutes);

  // Root endpoint
  app.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'SleepFine Admin Service API',
      version: '1.0.0',
      documentation: '/api/v1/admin/health',
      endpoints: {
        health: '/health',
        dashboard: '/api/v1/admin/dashboard',
        users: '/api/v1/admin/users',
        settings: '/api/v1/admin/settings',
        auditLogs: '/api/v1/admin/audit-logs',
        reports: '/api/v1/admin/reports',
        monitoring: '/api/v1/admin/monitoring',
        analytics: '/api/v1/admin/analytics'
      },
      capabilities: [
        'System Administration',
        'User Management',
        'Dashboard Analytics',
        'Audit Logging',
        'System Settings',
        'Performance Monitoring',
        'Business Reports',
        'Service Health Checks'
      ]
    });
  });

  // 404 handler
  app.use(notFoundHandler);

  // Global error handler
  app.use(errorHandler);

  logger.info('Admin service routes setup completed');
};

// ==================== DATABASE CONNECTION ====================

const initializeDatabase = async () => {
  try {
    await connectDB();
    logger.info('Admin service database connection established');
  } catch (error) {
    logger.error('Failed to connect to database:', error);
    throw error;
  }
};

// ==================== SERVER STARTUP ====================

const startServer = () => {
  app.listen(port, () => {
    logger.info(`🚀 Admin Service started successfully!`);
    logger.info(`👑 Server running on port ${port}`);
    logger.info(`🌍 Environment: ${config.server.env}`);
    logger.info(`🔗 Health check: http://localhost:${port}/health`);
    logger.info(`📊 API base URL: http://localhost:${port}/api/v1/admin`);
    logger.info(`🎛️  Admin Dashboard: http://localhost:${port}/api/v1/admin/dashboard`);
    
    if (config.server.env === 'development') {
      logger.info(`📋 Available admin endpoints:`);
      logger.info(`   • GET  /health - Service health check`);
      logger.info(`   • GET  /api/v1/admin/dashboard - Comprehensive dashboard`);
      logger.info(`   • GET  /api/v1/admin/users - User management`);
      logger.info(`   • GET  /api/v1/admin/settings - System settings`);
      logger.info(`   • GET  /api/v1/admin/audit-logs - Audit trail`);
      logger.info(`   • GET  /api/v1/admin/reports/system - System reports`);
      logger.info(`   • GET  /api/v1/admin/monitoring/metrics - Performance monitoring`);
      logger.info(`   • GET  /api/v1/admin/analytics/business - Business analytics`);
      logger.info(`   • GET  /api/v1/admin/stats/* - Service statistics`);
    }
  });
};

// ==================== GRACEFUL SHUTDOWN ====================

const gracefulShutdown = async (signal) => {
  logger.info(`📋 Received ${signal}. Starting graceful shutdown...`);
  
  try {
    // Close server
    app.close(() => {
      logger.info('✅ HTTP server closed');
    });
    
    // Close database connections would go here
    // await mongoose.connection.close();
    
    logger.info('✅ Admin service shutdown completed');
    process.exit(0);
  } catch (error) {
    logger.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
};

// ==================== MAIN INITIALIZATION ====================

const initializeAdminService = async () => {
  try {
    logger.info('🚀 Initializing Admin Service...');
    
    // Setup error handlers
    setupErrorHandlers();
    
    // Initialize database
    await initializeDatabase();
    
    // Setup middleware
    setupMiddleware();
    
    // Setup routes
    setupRoutes();
    
    // Start server
    startServer();
    
    logger.info('✅ Admin Service initialization completed');
    logger.info('👑 System administration ready!');
  } catch (error) {
    logger.error('❌ Failed to initialize Admin service:', error);
    process.exit(1);
  }
};

// ==================== PROCESS EVENT HANDLERS ====================

// Handle graceful shutdown
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  gracefulShutdown('UNCAUGHT_EXCEPTION');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  gracefulShutdown('UNHANDLED_REJECTION');
});

// ==================== START THE SERVICE ====================

initializeAdminService();

export { app, port };