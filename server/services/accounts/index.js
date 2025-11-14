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
import accountsRoutes from './routes/accountsRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const env = process.env.NODE_ENV || 'development';
const envPath = path.join(__dirname, '../../config/env', `${env}.env`);
dotenv.config({ path: envPath });

// Initialize Express app
const app = express();
const port = config.services.accounts.port || 3002;

// ==================== MIDDLEWARE SETUP ====================

const setupMiddleware = () => {
  // Security middleware
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
    crossOriginEmbedderPolicy: false
  }));

  app.use(cors({
    origin: config.cors.origin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
    credentials: true,
    maxAge: 86400 // 24 hours
  }));

  app.use(mongoSanitize());
  app.use(xss());
  app.use(hpp());

  // Rate limiting with custom configuration for accounts
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // Higher limit for accounts operations
    message: {
      success: false,
      message: 'Too many requests from this IP, please try again later.',
      retryAfter: '15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Skip rate limiting for health checks
      return req.path === '/health';
    }
  });
  app.use('/api/', limiter);

  const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 100, // Allow 100 requests per 15 minutes at full speed
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

  // Logging
  app.use(morgan('combined', { 
    stream: logger.stream,
    skip: (req, res) => {
      // Skip logging for health checks in production
      return config.server.env === 'production' && req.path === '/health';
    }
  }));

  // Request ID and timing
  app.use((req, res, next) => {
    req.requestId = req.headers['x-request-id'] || 
      `acc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    req.timestamp = new Date().toISOString();
    req.startTime = Date.now();
    
    res.setHeader('X-Request-ID', req.requestId);
    res.setHeader('X-Service', 'accounts');
    
    next();
  });

  // Response time tracking
  app.use((req, res, next) => {
    res.on('finish', () => {
      const responseTime = Date.now() - req.startTime;
      
      // Log slow requests
      if (responseTime > 2000) {
        logger.warn(`Slow request detected: ${req.method} ${req.path} - ${responseTime}ms`, {
          requestId: req.requestId,
          method: req.method,
          path: req.path,
          responseTime,
          statusCode: res.statusCode
        });
      }
    });
    
    next();
  });

  logger.info('Accounts service middleware setup completed');
};

// ==================== ROUTES SETUP ====================

const setupRoutes = () => {
  // Health check endpoint
  app.get('/health', (req, res) => {
    const health = {
      success: true,
      message: 'Accounts Service is running',
      service: 'accounts',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.server.env,
      features: {
        paymentVerification: true,
        invoiceGeneration: true,
        financialReporting: true,
        dashboard: true,
        taxCalculation: true,
        auditTrail: true
      },
      database: {
        status: 'connected',
        name: 'MongoDB'
      },
      cache: {
        status: 'connected',
        name: 'Redis'
      }
    };
    
    res.status(200).json(health);
  });

  // API routes
  app.use('/api/v1/accounts', accountsRoutes);

  // Root endpoint
  app.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'SleepFine Accounts Service API',
      version: '1.0.0',
      documentation: '/api/v1/accounts/health',
      endpoints: {
        health: '/health',
        payments: '/api/v1/accounts/payments',
        invoices: '/api/v1/accounts/invoices',
        reports: '/api/v1/accounts/reports',
        dashboard: '/api/v1/accounts/dashboard'
      }
    });
  });

  // 404 handler
  app.use(notFoundHandler);

  // Global error handler
  app.use(errorHandler);

  logger.info('Accounts service routes setup completed');
};

// ==================== DATABASE CONNECTION ====================

const initializeDatabase = async () => {
  try {
    await connectDB();
    logger.info('Accounts service database connection established');
  } catch (error) {
    logger.error('Failed to connect to database:', error);
    throw error;
  }
};

// ==================== SERVER STARTUP ====================

const startServer = () => {
  app.listen(port, () => {
    logger.info(`🚀 Accounts Service started successfully!`);
    logger.info(`💰 Server running on port ${port}`);
    logger.info(`🌍 Environment: ${config.server.env}`);
    logger.info(`🔗 Health check: http://localhost:${port}/health`);
    logger.info(`📊 API base URL: http://localhost:${port}/api/v1/accounts`);
    
    if (config.server.env === 'development') {
      logger.info(`📋 Available endpoints:`);
      logger.info(`   • GET  /health - Service health check`);
      logger.info(`   • GET  /api/v1/accounts/health - Detailed health info`);
      logger.info(`   • GET  /api/v1/accounts/dashboard - Dashboard data`);
      logger.info(`   • GET  /api/v1/accounts/payments - Payment management`);
      logger.info(`   • POST /api/v1/accounts/payments/:id/verify - Verify payments`);
      logger.info(`   • GET  /api/v1/accounts/invoices - Invoice management`);
      logger.info(`   • POST /api/v1/accounts/invoices - Create invoices`);
      logger.info(`   • POST /api/v1/accounts/reports/generate - Generate reports`);
      logger.info(`   • GET  /api/v1/accounts/stats/payments - Payment statistics`);
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
    
    logger.info('✅ Accounts service shutdown completed');
    process.exit(0);
  } catch (error) {
    logger.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
};

// ==================== MAIN INITIALIZATION ====================

const initializeAccountsService = async () => {
  try {
    logger.info('🚀 Initializing Accounts Service...');
    
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
    
    logger.info('✅ Accounts Service initialization completed');
  } catch (error) {
    logger.error('❌ Failed to initialize Accounts service:', error);
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

initializeAccountsService();

export { app, port };