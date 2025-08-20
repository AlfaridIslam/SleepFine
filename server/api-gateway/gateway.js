import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import hpp from 'hpp';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import expressStatusMonitor from 'express-status-monitor';
import prometheusMiddleware from 'express-prometheus-middleware';

// Import configurations and utilities
import config from '../config/index.js';
import { connectDB, cacheService } from '../config/db.js';
import webSocketService from '../config/websocket.js';
import logger from '../shared/utils/logger.js';
import ApiResponse from '../shared/utils/response.js';
import { errorHandler, notFoundHandler, setupErrorHandlers } from '../shared/middlewares/errorHandler.js';
import { authenticate, authorize } from '../shared/middlewares/auth.js';

// Import service routes
import adminRoutes from '../services/admin/routes/adminRoutes.js';
import salesRoutes from '../services/sales/routes/salesRoutes.js';
import accountsRoutes from '../services/accounts/routes/accountsRoutes.js';
import logisticsRoutes from '../services/logistics/routes/logisticsRoutes.js';
import notificationsRoutes from '../services/notifications/routes/notifyRoutes.js';

class ApiGateway {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.port = config.server.port;
  }

  /**
   * Initialize the API Gateway
   */
  async initialize() {
    try {
      // Setup error handlers
      setupErrorHandlers();

      // Connect to database
      await connectDB();

      // Setup middleware
      this.setupMiddleware();

      // Setup routes
      this.setupRoutes();

      // Setup WebSocket
      webSocketService.initialize(this.server);

      // Setup monitoring
      this.setupMonitoring();

      // Start server
      this.startServer();

      logger.info('API Gateway initialized successfully');
    } catch (error) {
      logger.error('Failed to initialize API Gateway:', error);
      process.exit(1);
    }
  }

  /**
   * Setup middleware
   */
  setupMiddleware() {
    // Trust proxy for rate limiting
    this.app.set('trust proxy', 1);

    // Body parsing middleware
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '10mb' }));

    // Security middleware
    this.setupSecurityMiddleware();

    // Logging middleware
    this.setupLoggingMiddleware();

    // Performance middleware
    this.setupPerformanceMiddleware();

    // Request processing middleware
    this.setupRequestMiddleware();
  }

  /**
   * Setup security middleware
   */
  setupSecurityMiddleware() {
    // Helmet for security headers
    this.app.use(helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", "data:", "https:"],
        },
      },
      crossOriginEmbedderPolicy: false,
    }));

    // CORS configuration
    this.app.use(cors({
      origin: config.cors.origin,
      credentials: config.cors.credentials,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key'],
    }));

    // Rate limiting
    const limiter = rateLimit({
      windowMs: config.rateLimit.windowMs,
      max: config.rateLimit.maxRequests,
      message: {
        success: false,
        message: 'Too many requests from this IP, please try again later.',
      },
      standardHeaders: true,
      legacyHeaders: false,
    });
    this.app.use('/api/', limiter);

    // Slow down requests
    const speedLimiter = slowDown({
      windowMs: config.slowDown.windowMs,
      delayAfter: config.slowDown.delayAfter,
      delayMs: () => config.slowDown.delayMs,
      validate: { delayMs: false }, // Disable warning
    });
    this.app.use('/api/', speedLimiter);

    // Data sanitization
    this.app.use(mongoSanitize()); // Prevent NoSQL injection
    this.app.use(xss()); // Prevent XSS attacks
    this.app.use(hpp()); // Prevent HTTP Parameter Pollution

    // Request size limiting
    this.app.use((req, res, next) => {
      const contentLength = parseInt(req.headers['content-length'] || '0');
      if (contentLength > config.upload.maxFileSize) {
        return ApiResponse.badRequest(res, 'Request entity too large');
      }
      next();
    });
  }

  /**
   * Setup logging middleware
   */
  setupLoggingMiddleware() {
    // Morgan for HTTP request logging
    const morganFormat = config.server.env === 'development' ? 'dev' : 'combined';
    this.app.use(morgan(morganFormat, {
      stream: logger.stream,
      skip: (req, res) => res.statusCode < 400,
    }));

    // Custom request logging
    this.app.use((req, res, next) => {
      const start = Date.now();
      
      res.on('finish', () => {
        const duration = Date.now() - start;
        logger.logRequest(req, res, duration);
      });

      next();
    });
  }

  /**
   * Setup performance middleware
   */
  setupPerformanceMiddleware() {
    // Compression
    this.app.use(compression());

    // Cache headers
    this.app.use((req, res, next) => {
      if (req.method === 'GET') {
        res.set('Cache-Control', 'public, max-age=300'); // 5 minutes
      }
      next();
    });
  }

  /**
   * Setup request processing middleware
   */
  setupRequestMiddleware() {
    // Add request ID
    this.app.use((req, res, next) => {
      req.id = req.headers['x-request-id'] || `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      res.setHeader('X-Request-ID', req.id);
      next();
    });

    // Add timestamp
    this.app.use((req, res, next) => {
      req.timestamp = new Date();
      next();
    });
  }

  /**
   * Setup routes
   */
  setupRoutes() {
    // Health check endpoint
    this.app.get('/health', (req, res) => {
      const healthData = {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString(),
        environment: config.server.env,
        version: process.env.npm_package_version || '1.0.0',
      };
      ApiResponse.healthCheck(res, healthData);
    });

    // API documentation
    if (config.devTools.enableSwagger) {
      this.setupSwagger();
    }

    // API routes
    this.app.use('/api/v1', this.setupApiRoutes());

    // 404 handler
    this.app.use(notFoundHandler);
  }

  /**
   * Setup API routes
   */
  setupApiRoutes() {
    const router = express.Router();

    // Public routes
    router.use('/auth', this.getAuthRoutes());
    router.use('/public', this.getPublicRoutes());

    // Protected routes
    router.use('/admin', authenticate, authorize('admin'), adminRoutes);
    router.use('/sales', authenticate, authorize(['salesman', 'admin']), salesRoutes);
    router.use('/accounts', authenticate, authorize(['accounts', 'admin']), accountsRoutes);
    router.use('/logistics', authenticate, authorize(['logistics', 'admin']), logisticsRoutes);
    router.use('/notifications', authenticate, notificationsRoutes);

    // Service-to-service routes (with API key authentication)
    router.use('/internal', this.getInternalRoutes());

    return router;
  }

  /**
   * Setup authentication routes
   */
  getAuthRoutes() {
    const router = express.Router();

    router.post('/login', (req, res) => {
      // Login logic would go here
      ApiResponse.success(res, 200, 'Login successful', { token: 'mock-jwt-token' });
    });

    router.post('/register', (req, res) => {
      // Registration logic would go here
      ApiResponse.created(res, 'User registered successfully');
    });

    router.post('/refresh', (req, res) => {
      // Token refresh logic would go here
      ApiResponse.success(res, 200, 'Token refreshed successfully', { token: 'new-jwt-token' });
    });

    router.post('/logout', authenticate, (req, res) => {
      // Logout logic would go here
      ApiResponse.success(res, 200, 'Logged out successfully');
    });

    return router;
  }

  /**
   * Setup public routes
   */
  getPublicRoutes() {
    const router = express.Router();

    router.get('/products', (req, res) => {
      // Public product listing
      ApiResponse.success(res, 200, 'Products retrieved successfully', []);
    });

    router.get('/categories', (req, res) => {
      // Public category listing
      ApiResponse.success(res, 200, 'Categories retrieved successfully', []);
    });

    return router;
  }

  /**
   * Setup internal service routes
   */
  getInternalRoutes() {
    const router = express.Router();

    // Service health checks
    router.get('/health/sales', async (req, res) => {
      try {
        // Check sales service health
        const response = await fetch(`${config.services.sales}/health`);
        const data = await response.json();
        ApiResponse.success(res, 200, 'Sales service health check', data);
      } catch (error) {
        ApiResponse.serviceUnavailable(res, 'Sales service unavailable');
      }
    });

    router.get('/health/accounts', async (req, res) => {
      try {
        // Check accounts service health
        const response = await fetch(`${config.services.accounts}/health`);
        const data = await response.json();
        ApiResponse.success(res, 200, 'Accounts service health check', data);
      } catch (error) {
        ApiResponse.serviceUnavailable(res, 'Accounts service unavailable');
      }
    });

    router.get('/health/logistics', async (req, res) => {
      try {
        // Check logistics service health
        const response = await fetch(`${config.services.logistics}/health`);
        const data = await response.json();
        ApiResponse.success(res, 200, 'Logistics service health check', data);
      } catch (error) {
        ApiResponse.serviceUnavailable(res, 'Logistics service unavailable');
      }
    });

    return router;
  }

  /**
   * Setup Swagger documentation
   */
  setupSwagger() {
    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'SleepFine API Documentation',
          version: '1.0.0',
          description: 'API documentation for SleepFine microservices',
        },
        servers: [
          {
            url: `http://localhost:${this.port}/api/v1`,
            description: 'Development server',
          },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              bearerFormat: 'JWT',
            },
          },
        },
      },
      apis: [
        '../services/*/routes/*.js',
        '../shared/middlewares/*.js',
      ],
    };

    const specs = swaggerJsdoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  /**
   * Setup monitoring
   */
  setupMonitoring() {
    // Status monitor
    if (config.devTools.enableStatusMonitor) {
      this.app.use(expressStatusMonitor({
        title: 'SleepFine API Status',
        path: '/status',
        spans: [{
          interval: 1,
          retention: 60,
        }, {
          interval: 5,
          retention: 60,
        }, {
          interval: 15,
          retention: 60,
        }],
      }));
    }

    // Prometheus metrics
    if (config.devTools.enablePrometheus) {
      this.app.use(prometheusMiddleware({
        metricsPath: '/metrics',
        collectDefaultMetrics: true,
        requestDurationBuckets: [0.1, 0.5, 1, 2, 5],
        requestLengthBuckets: [512, 1024, 5120, 10240, 51200],
        responseLengthBuckets: [512, 1024, 5120, 10240, 51200],
      }));
    }
  }

  /**
   * Start the server
   */
  startServer() {
    this.server.listen(this.port, () => {
      logger.info(`API Gateway running on port ${this.port}`);
      logger.info(`Environment: ${config.server.env}`);
      logger.info(`API Documentation: http://localhost:${this.port}/api-docs`);
      if (config.devTools.enableStatusMonitor) {
        logger.info(`Status Monitor: http://localhost:${this.port}/status`);
      }
      if (config.devTools.enablePrometheus) {
        logger.info(`Metrics: http://localhost:${this.port}/metrics`);
      }
    });

    // Store server reference for graceful shutdown
    global.server = this.server;
  }
}

// Create and start the API Gateway
const gateway = new ApiGateway();
gateway.initialize().catch((error) => {
  logger.error('Failed to start API Gateway:', error);
  process.exit(1);
});

export default gateway; 