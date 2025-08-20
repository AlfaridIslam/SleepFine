import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables based on NODE_ENV
const env = process.env.NODE_ENV || 'development';
const envPath = path.join(__dirname, 'env', `${env}.env`);

dotenv.config({ path: envPath });

const config = {
  // Server Configuration
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
    env: process.env.NODE_ENV || 'development',
    apiVersion: process.env.API_VERSION || 'v1',
  },

  // Database Configuration
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/sleepfineCRM_DEV',
    testUri: process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/sleepfineCRM_test',
    options: {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    },
  },

  // Redis Configuration
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    password: process.env.REDIS_PASSWORD || null,
    db: parseInt(process.env.REDIS_DB, 10) || 0,
    retryDelayOnFailover: 100,
    maxRetriesPerRequest: 3,
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'fallback-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
  },

  // AWS Configuration
  aws: {
    region: process.env.AWS_REGION || 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    s3Bucket: process.env.AWS_S3_BUCKET || 'sleepfine-bucket',
    sqsQueueUrl: process.env.AWS_SQS_QUEUE_URL,
  },

  // Kafka Configuration
  kafka: {
    brokers: process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'],
    clientId: process.env.KAFKA_CLIENT_ID || 'sleepfine-client',
    groupId: process.env.KAFKA_GROUP_ID || 'sleepfine-group',
  },

  // Email Configuration
  email: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.EMAIL_FROM || 'noreply@sleepfine.com',
  },

  // SMS Configuration
  sms: {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER,
  },

  // WhatsApp Configuration
  whatsapp: {
    apiUrl: process.env.WHATSAPP_API_URL || 'https://graph.facebook.com/v17.0',
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN,
  },

  // Rate Limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 900000, // 15 minutes
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS, 10) || 100,
    slowDownWindowMs: parseInt(process.env.SLOW_DOWN_WINDOW_MS, 10) || 900000,
    slowDownDelayAfter: parseInt(process.env.SLOW_DOWN_DELAY_AFTER, 10) || 50,
    slowDownDelayMs: parseInt(process.env.SLOW_DOWN_DELAY_MS, 10) || 500,
  },

  // Slow Down Configuration
  slowDown: {
    windowMs: parseInt(process.env.SLOW_DOWN_WINDOW_MS, 10) || 900000, // 15 minutes
    delayAfter: parseInt(process.env.SLOW_DOWN_DELAY_AFTER, 10) || 50,
    delayMs: parseInt(process.env.SLOW_DOWN_DELAY_MS, 10) || 500,
  },

  // CORS Configuration
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
    credentials: process.env.CORS_CREDENTIALS === 'true',
  },

  // Logging Configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    filePath: process.env.LOG_FILE_PATH || 'logs/app.log',
    errorFilePath: process.env.LOG_ERROR_FILE_PATH || 'logs/error.log',
  },

  // Monitoring Configuration
  monitoring: {
    prometheusPort: parseInt(process.env.PROMETHEUS_PORT, 10) || 9090,
    statusMonitorPort: parseInt(process.env.STATUS_MONITOR_PORT, 10) || 3001,
  },

  // File Upload Configuration
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 10485760, // 10MB
    uploadPath: process.env.UPLOAD_PATH || 'uploads/',
  },

  // Cache Configuration
  cache: {
    ttl: parseInt(process.env.CACHE_TTL, 10) || 3600, // 1 hour
    checkPeriod: parseInt(process.env.CACHE_CHECK_PERIOD, 10) || 600, // 10 minutes
  },

  // Security Configuration
  security: {
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS, 10) || 12,
    sessionSecret: process.env.SESSION_SECRET || 'fallback-session-secret',
    cookieSecret: process.env.COOKIE_SECRET || 'fallback-cookie-secret',
  },

  // Microservice URLs and Ports
  services: {
    sales: {
      url: process.env.SALES_SERVICE_URL || 'http://localhost:3001',
      port: parseInt(process.env.SALES_SERVICE_PORT, 10) || 3001,
    },
    accounts: {
      url: process.env.ACCOUNTS_SERVICE_URL || 'http://localhost:3002',
      port: parseInt(process.env.ACCOUNTS_SERVICE_PORT, 10) || 3002,
    },
    logistics: {
      url: process.env.LOGISTICS_SERVICE_URL || 'http://localhost:3003',
      port: parseInt(process.env.LOGISTICS_SERVICE_PORT, 10) || 3003,
    },
    admin: {
      url: process.env.ADMIN_SERVICE_URL || 'http://localhost:3004',
      port: parseInt(process.env.ADMIN_SERVICE_PORT, 10) || 3004,
    },
    notifications: {
      url: process.env.NOTIFICATIONS_SERVICE_URL || 'http://localhost:3005',
      port: parseInt(process.env.NOTIFICATIONS_SERVICE_PORT, 10) || 3005,
    },
  },

  // External APIs
  externalApis: {
    paymentGateway: process.env.PAYMENT_GATEWAY_URL || 'https://api.payment-gateway.com',
    smsGateway: process.env.SMS_GATEWAY_URL || 'https://api.sms-gateway.com',
  },

  // Development Tools
  devTools: {
    enableSwagger: process.env.ENABLE_SWAGGER === 'true',
    enableStatusMonitor: process.env.ENABLE_STATUS_MONITOR === 'true',
    enablePrometheus: process.env.ENABLE_PROMETHEUS === 'true',
  },
};

export default config; 