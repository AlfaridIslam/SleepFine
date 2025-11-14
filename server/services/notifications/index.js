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
import http from 'http';

import config from '../../config/index.js';
import { connectDB } from '../../config/db.js';
import { errorHandler, notFoundHandler, setupErrorHandlers } from '../../shared/middlewares/errorHandler.js';
import logger from '../../shared/utils/logger.js';
import webSocketService from '../../config/websocket.js';
import notificationsService from './services/notificationsService.js';
import notificationsRoutes from './routes/notificationsRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const env = process.env.NODE_ENV || 'development';
const envPath = path.join(__dirname, '../../config/env', `${env}.env`);
dotenv.config({ path: envPath });

// Initialize Express app
const app = express();
const server = http.createServer(app);
const port = config.services.notifications.port || 3004;

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
        connectSrc: ["'self'", "ws:", "wss:"],
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

  // Rate limiting with custom configuration for notifications
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
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
    delayAfter: 50, // Allow 50 requests per 15 minutes at full speed
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
      `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    req.timestamp = new Date().toISOString();
    req.startTime = Date.now();
    
    res.setHeader('X-Request-ID', req.requestId);
    res.setHeader('X-Service', 'notifications');
    
    next();
  });

  // Response time tracking
  app.use((req, res, next) => {
    res.on('finish', () => {
      const responseTime = Date.now() - req.startTime;
      
      // Log slow requests
      if (responseTime > 1000) {
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

  logger.info('Notifications service middleware setup completed');
};

// ==================== ROUTES SETUP ====================

const setupRoutes = () => {
  // Health check endpoint
  app.get('/health', (req, res) => {
    const health = {
      success: true,
      message: 'Notifications Service is running',
      service: 'notifications',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.server.env,
      features: {
        socketIO: !!notificationsService.socketIO,
        whatsappIntegration: 'manual',
        whatsappGroupUrl: notificationsService.whatsappGroupUrl,
        realTimeNotifications: true,
        templateSupport: true
      },
      database: {
        status: 'connected',
        name: 'MongoDB'
      }
    };
    
    res.status(200).json(health);
  });

  // API routes
  app.use('/api/v1/notifications', notificationsRoutes);

  // Root endpoint
  app.get('/', (req, res) => {
    res.status(200).json({
      success: true,
      message: 'SleepFine Notifications Service API',
      version: '1.0.0',
      documentation: '/api/v1/notifications/health',
      endpoints: {
        health: '/health',
        notifications: '/api/v1/notifications',
        whatsapp: '/api/v1/notifications/whatsapp',
        dashboard: '/api/v1/notifications/dashboard'
      }
    });
  });

  // 404 handler
  app.use(notFoundHandler);

  // Global error handler
  app.use(errorHandler);

  logger.info('Notifications service routes setup completed');
};

// ==================== DATABASE CONNECTION ====================

const initializeDatabase = async () => {
  try {
    await connectDB();
    logger.info('Notifications service database connection established');
  } catch (error) {
    logger.error('Failed to connect to database:', error);
    throw error;
  }
};

// ==================== WEBSOCKET INITIALIZATION ====================

const initializeWebSocket = () => {
  try {
    const io = webSocketService.initialize(server);
    
    // Initialize Socket.IO for notifications service
    notificationsService.initializeSocketIO(io);
    
    // Setup notification-specific Socket.IO events
    io.on('connection', (socket) => {
      logger.info(`Client connected to notifications service: ${socket.id}`);
      
      // Join user-specific room
      socket.on('join_user_room', (userId) => {
        socket.join(`user_${userId}`);
        logger.info(`User ${userId} joined their notification room`);
      });
      
      // Join role-specific room
      socket.on('join_role_room', (role) => {
        socket.join(`role_${role}`);
        logger.info(`User joined role room: ${role}`);
      });
      
      // Handle disconnect
      socket.on('disconnect', () => {
        logger.info(`Client disconnected from notifications service: ${socket.id}`);
      });
    });
    
    logger.info('Notifications service WebSocket initialized successfully');
  } catch (error) {
    logger.error('Failed to initialize WebSocket:', error);
    throw error;
  }
};

// ==================== SERVER STARTUP ====================

const startServer = () => {
  server.listen(port, () => {
    logger.info(`🚀 Notifications Service started successfully!`);
    logger.info(`📡 Server running on port ${port}`);
    logger.info(`🌍 Environment: ${config.server.env}`);
    logger.info(`🔗 Health check: http://localhost:${port}/health`);
    logger.info(`📱 API base URL: http://localhost:${port}/api/v1/notifications`);
    logger.info(`🔌 WebSocket: ws://localhost:${port}`);
    logger.info(`📞 WhatsApp Group: ${notificationsService.whatsappGroupUrl}`);
    
    if (config.server.env === 'development') {
      logger.info(`📋 Available endpoints:`);
      logger.info(`   • GET  /health - Service health check`);
      logger.info(`   • GET  /api/v1/notifications/health - Detailed health info`);
      logger.info(`   • POST /api/v1/notifications/test - Test notification`);
      logger.info(`   • GET  /api/v1/notifications/dashboard - Dashboard data`);
      logger.info(`   • POST /api/v1/notifications/whatsapp/order - Order notifications`);
      logger.info(`   • POST /api/v1/notifications/whatsapp/gatepass - Gatepass notifications`);
      logger.info(`   • POST /api/v1/notifications/whatsapp/delivery - Delivery notifications`);
    }
  });
};

// ==================== GRACEFUL SHUTDOWN ====================

const gracefulShutdown = async (signal) => {
  logger.info(`📋 Received ${signal}. Starting graceful shutdown...`);
  
  try {
    // Close server
    server.close(() => {
      logger.info('✅ HTTP server closed');
    });
    
    // Close WebSocket connections
    if (webSocketService.io) {
      webSocketService.io.close();
      logger.info('✅ WebSocket connections closed');
    }
    
    // Close database connections would go here
    // await mongoose.connection.close();
    
    logger.info('✅ Notifications service shutdown completed');
    process.exit(0);
  } catch (error) {
    logger.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
};

// ==================== MAIN INITIALIZATION ====================

const initializeNotificationsService = async () => {
  try {
    logger.info('🚀 Initializing Notifications Service...');
    
    // Setup error handlers
    setupErrorHandlers();
    
    // Initialize database
    await initializeDatabase();
    
    // Setup middleware
    setupMiddleware();
    
    // Setup routes
    setupRoutes();
    
    // Initialize WebSocket
    initializeWebSocket();
    
    // Start server
    startServer();
    
    logger.info('✅ Notifications Service initialization completed');
  } catch (error) {
    logger.error('❌ Failed to initialize Notifications service:', error);
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

initializeNotificationsService();

export { app, server, port };