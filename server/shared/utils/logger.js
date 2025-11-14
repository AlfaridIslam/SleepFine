import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../../config/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create logs directory if it doesn't exist
import fs from 'fs';
const logsDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Custom format for structured logging
const customFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.errors({ stack: true }),
  winston.format.json(),
  winston.format.printf(({ timestamp, level, message, stack, ...meta }) => {
    let log = `${timestamp} [${level.toUpperCase()}]: ${message}`;
    
    if (stack) {
      log += `\n${stack}`;
    }
    
    if (Object.keys(meta).length > 0) {
      log += `\n${JSON.stringify(meta, null, 2)}`;
    }
    
    return log;
  })
);

// Console format for development
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({
    format: 'HH:mm:ss',
  }),
  winston.format.printf(({ timestamp, level, message, stack, ...meta }) => {
    let log = `${timestamp} [${level}]: ${message}`;
    
    if (stack) {
      log += `\n${stack}`;
    }
    
    if (Object.keys(meta).length > 0) {
      log += `\n${JSON.stringify(meta, null, 2)}`;
    }
    
    return log;
  })
);

// Create logger instance
const logger = winston.createLogger({
  level: config.logging.level,
  format: customFormat,
  defaultMeta: {
    service: 'sleepfine-backend',
    environment: config.server.env,
  },
  transports: [
    // File transport for all logs
    new winston.transports.File({
      filename: path.resolve(config.logging.filePath),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      tailable: true,
    }),
    
    // File transport for error logs only
    new winston.transports.File({
      filename: path.resolve(config.logging.errorFilePath),
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      tailable: true,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: path.resolve('logs/exceptions.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: path.resolve('logs/rejections.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
  ],
});

// Add console transport in development
if (config.server.env !== 'production') {
  logger.add(new winston.transports.Console({
    format: consoleFormat,
  }));
}

// Create a stream object for Morgan
logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

// Helper methods for structured logging
logger.logRequest = (req, res, responseTime) => {
  logger.info('HTTP Request', {
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
    responseTime: `${responseTime}ms`,
    userAgent: req.get('User-Agent'),
    ip: req.ip,
    userId: req.user?.id,
    userRole: req.user?.role,
  });
};

logger.logError = (error, req = null, additionalInfo = {}) => {
  const errorInfo = {
    message: error.message,
    stack: error.stack,
    name: error.name,
    ...additionalInfo,
  };

  if (req) {
    errorInfo.request = {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body,
      userId: req.user?.id,
      userRole: req.user?.role,
    };
  }

  logger.error('Application Error', errorInfo);
};

logger.logSecurity = (event, details) => {
  logger.warn('Security Event', {
    event,
    details,
    timestamp: new Date().toISOString(),
  });
};

logger.logDatabase = (operation, collection, query, duration) => {
  logger.debug('Database Operation', {
    operation,
    collection,
    query: JSON.stringify(query),
    duration: `${duration}ms`,
  });
};

logger.logCache = (operation, key, hit, duration) => {
  logger.debug('Cache Operation', {
    operation,
    key,
    hit,
    duration: `${duration}ms`,
  });
};

logger.logKafka = (topic, message, operation) => {
  logger.info('Kafka Operation', {
    topic,
    operation,
    messageId: message?.id,
    timestamp: new Date().toISOString(),
  });
};

logger.logWebSocket = (event, userId, data) => {
  logger.debug('WebSocket Event', {
    event,
    userId,
    data: JSON.stringify(data),
    timestamp: new Date().toISOString(),
  });
};

// Performance logging
logger.logPerformance = (operation, duration, metadata = {}) => {
  logger.info('Performance Metric', {
    operation,
    duration: `${duration}ms`,
    ...metadata,
  });
};

// Business logic logging
logger.logOrderEvent = (orderId, event, details) => {
  logger.info('Order Event', {
    orderId,
    event,
    details,
    timestamp: new Date().toISOString(),
  });
};

logger.logPaymentEvent = (orderId, paymentId, event, details) => {
  logger.info('Payment Event', {
    orderId,
    paymentId,
    event,
    details,
    timestamp: new Date().toISOString(),
  });
};

logger.logDeliveryEvent = (orderId, deliveryId, event, details) => {
  logger.info('Delivery Event', {
    orderId,
    deliveryId,
    event,
    details,
    timestamp: new Date().toISOString(),
  });
};

export default logger; 