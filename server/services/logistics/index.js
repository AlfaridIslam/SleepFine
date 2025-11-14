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
import logisticsRoutes from './routes/logisticsRoutes.js';

// ES Module setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const env = process.env.NODE_ENV || 'development';
const envPath = path.join(__dirname, '../../config/env', `${env}.env`);
dotenv.config({ path: envPath });

// Initialize Express app
const app = express();
const port = config.services.logistics.port || 3002;

// ==================== MIDDLEWARE SETUP ====================
const setupMiddleware = () => {
  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"]
      }
    }
  }));
  
  app.use(cors({
    origin: config.cors.origins || ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID']
  }));

  app.use(mongoSanitize());
  app.use(xss());
  app.use(hpp());

  // Rate limiting with custom key generator
  const limiter = rateLimit({
    windowMs: config.rateLimit?.windowMs || 15 * 60 * 1000, // 15 minutes
    max: config.rateLimit?.max || 100, // limit each IP to 100 requests per windowMs
    message: {
      success: false,
      error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => req.ip || req.connection.remoteAddress
  });
  app.use('/api/', limiter);

  const speedLimiter = slowDown({
    windowMs: config.slowDown?.windowMs || 15 * 60 * 1000, // 15 minutes
    delayAfter: config.slowDown?.delayAfter || 50, // allow 50 requests per 15 minutes at full speed
    delayMs: config.slowDown?.delayMs || 500, // slow down subsequent requests by 500ms per request
    validate: { delayMs: false }
  });
  app.use('/api/', speedLimiter);

  // Body parsing middleware
  app.use(express.json({ 
    limit: config.upload?.maxFileSize || '10mb',
    verify: (req, res, buf) => {
      req.rawBody = buf;
    }
  }));
  
  app.use(express.urlencoded({ 
    extended: true, 
    limit: config.upload?.maxFileSize || '10mb' 
  }));

  // Cookie parsing
  app.use(cookieParser());

  // Compression middleware
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

  // Logging middleware
  const morganFormat = config.server?.env === 'production' ? 'combined' : 'dev';
  app.use(morgan(morganFormat, { 
    stream: logger.stream,
    skip: (req, res) => res.statusCode < 400 && config.server?.env === 'production'
  }));

  // Request ID and timestamp middleware
  app.use((req, res, next) => {
    req.requestId = req.headers['x-request-id'] || 
                   `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    req.timestamp = new Date().toISOString();
    
    // Add request ID to response headers
    res.setHeader('X-Request-ID', req.requestId);
    
    // Add request start time for performance monitoring
    req.startTime = Date.now();
    
    next();
  });

  // Performance monitoring middleware
  app.use((req, res, next) => {
    const originalSend = res.send;
    
    res.send = function(data) {
      const responseTime = Date.now() - req.startTime;
      res.setHeader('X-Response-Time', `${responseTime}ms`);
      
      // Log slow requests
      if (responseTime > 1000) {
        logger.warn(`Slow request detected: ${req.method} ${req.originalUrl} - ${responseTime}ms`);
      }
      
      return originalSend.call(this, data);
    };
    
    next();
  });

  logger.info('Logistics Service: Middleware setup completed');
};

// ==================== ROUTES SETUP ====================
const setupRoutes = () => {
  // Health check endpoint
  app.get('/health', (req, res) => {
    const healthCheck = {
      success: true,
      message: 'Logistics Service is running',
      timestamp: new Date().toISOString(),
      service: 'logistics',
      version: '1.0.0',
      environment: config.server?.env || 'development',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      requestId: req.requestId,
      features: {
        gatepass: 'enabled',
        manufacturing: 'enabled',
        inventory: 'enabled',
        packaging: 'enabled',
        delivery: 'enabled',
        warehouse: 'enabled'
      }
    };

    res.status(200).json(healthCheck);
  });

  // API routes
  app.use('/api/v1/logistics', logisticsRoutes);

  // Root endpoint
  app.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'SleepFine Logistics Service API',
      version: '1.0.0',
      documentation: '/api/v1/logistics/health',
      timestamp: new Date().toISOString(),
      services: {
        gatepass: 'Gatepass management and tracking',
        manufacturing: 'Production workflow management',
        inventory: 'Stock and warehouse management',
        packaging: 'Order packaging and preparation',
        delivery: 'Delivery scheduling and tracking',
        quality: 'Quality control and assurance'
      }
    });
  });

  // 404 handler for undefined routes
  app.use(notFoundHandler);

  // Global error handler (must be last)
  app.use(errorHandler);

  logger.info('Logistics Service: Routes setup completed');
};

// ==================== DATABASE CONNECTION ====================
const initializeDatabase = async () => {
  try {
    await connectDB();
    logger.info('Logistics Service: Database connected successfully');
  } catch (error) {
    logger.error('Logistics Service: Database connection failed:', error);
    throw error;
  }
};

// ==================== SERVER STARTUP ====================
const startServer = () => {
  const server = app.listen(port, () => {
    logger.info(`🚚 Logistics Service running on port ${port}`);
    logger.info(`📊 Environment: ${config.server?.env || 'development'}`);
    logger.info(`🔗 Health check: http://localhost:${port}/health`);
    logger.info(`📝 API Documentation: http://localhost:${port}/api/v1/logistics`);
    logger.info(`🏭 Features: Gatepass | Manufacturing | Inventory | Packaging | Delivery`);
  });

  // Graceful shutdown handling
  const gracefulShutdown = (signal) => {
    logger.info(`${signal} received. Starting graceful shutdown...`);
    
    server.close((err) => {
      if (err) {
        logger.error('Error during server shutdown:', err);
        process.exit(1);
      }
      
      logger.info('Logistics Service: Server closed successfully');
      process.exit(0);
    });

    // Force close server after 30s
    setTimeout(() => {
      logger.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 30000);
  };

  // Handle different termination signals
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

  return server;
};

// ==================== SERVICE INITIALIZATION ====================
const initializeLogisticsService = async () => {
  try {
    logger.info('🔧 Initializing Logistics Service...');

    // Setup error handlers
    setupErrorHandlers();

    // Connect to database
    await initializeDatabase();

    // Setup middleware
    setupMiddleware();

    // Setup routes
    setupRoutes();

    // Start server
    const server = startServer();

    logger.info('✅ Logistics Service initialized successfully');
    return { app, server };

  } catch (error) {
    logger.error('❌ Failed to initialize Logistics service:', error);
    process.exit(1);
  }
};

// Start the service
const logisticsService = await initializeLogisticsService();

export default logisticsService;