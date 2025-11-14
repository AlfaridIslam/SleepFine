import mongoose from 'mongoose';
import Redis from 'redis';
import config from './index.js';
import logger from '../shared/utils/logger.js';
import RedisMockService from './redis-mock.js';

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.database.uri, config.database.options);
    
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      logger.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      logger.warn('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      logger.info('MongoDB reconnected');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      logger.info('MongoDB connection closed through app termination');
      process.exit(0);
    });

    return conn;
  } catch (error) {
    logger.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

// Redis Connection
const createRedisClient = () => {
  // Create base configuration
  const redisOptions = {
    socket: {
      host: config.redis.host,
      port: config.redis.port,
    },
    database: config.redis.db,
    retryDelayOnFailover: config.redis.retryDelayOnFailover,
    maxRetriesPerRequest: config.redis.maxRetriesPerRequest,
  };

  // Only add password if it exists and is not empty
  if (config.redis.password && config.redis.password.trim() !== '') {
    redisOptions.password = config.redis.password;
    logger.info('Redis password configured');
  } else {
    logger.info('Redis connecting without password (development mode)');
  }

  const client = Redis.createClient(redisOptions);

  client.on('error', (err) => {
    logger.error('Redis Client Error:', err);
  });

  client.on('connect', () => {
    logger.info('Redis Client Connected');
  });

  client.on('ready', () => {
    logger.info('Redis Client Ready');
  });

  client.on('end', () => {
    logger.warn('Redis Client Disconnected');
  });

  return client;
};

// Cache wrapper for Redis
class CacheService {
  constructor() {
    // Try to use real Redis first, fallback to mock if not available
    try {
      logger.info('Attempting to connect to real Redis...');
      this.client = createRedisClient();
      this.isConnected = false;
      this.usingMock = false;
      this.connect();
    } catch (error) {
      logger.warn('Redis connection failed, using mock service:', error.message);
      this.client = new RedisMockService();
      this.isConnected = true;
      this.usingMock = true;
    }
  }

  async connect() {
    if (this.usingMock) return;
    
    try {
      await this.client.connect();
      this.isConnected = true;
    } catch (error) {
      logger.error('Redis connection failed, switching to mock service:', error);
      this.client = new RedisMockService();
      this.isConnected = true;
      this.usingMock = true;
    }
  }

  async get(key) {
    if (!this.isConnected) {
      logger.warn('Redis not connected, skipping get operation');
      return null;
    }

    try {
      const value = await this.client.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      logger.error('Redis get error:', error);
      return null;
    }
  }

  async set(key, value, ttl = config.cache.ttl) {
    if (!this.isConnected) {
      logger.warn('Redis not connected, skipping set operation');
      return false;
    }

    try {
      await this.client.setEx(key, ttl, JSON.stringify(value));
      return true;
    } catch (error) {
      logger.error('Redis set error:', error);
      return false;
    }
  }

  async del(key) {
    if (!this.isConnected) {
      logger.warn('Redis not connected, skipping delete operation');
      return false;
    }

    try {
      await this.client.del(key);
      return true;
    } catch (error) {
      logger.error('Redis delete error:', error);
      return false;
    }
  }

  async flush() {
    if (!this.isConnected) {
      logger.warn('Redis not connected, skipping flush operation');
      return false;
    }

    try {
      await this.client.flushDb();
      return true;
    } catch (error) {
      logger.error('Redis flush error:', error);
      return false;
    }
  }

  async healthCheck() {
    try {
      await this.client.ping();
      return true;
    } catch (error) {
      logger.error('Redis health check failed:', error);
      return false;
    }
  }
}

// Create singleton instances
const cacheService = new CacheService();

export { connectDB, cacheService }; 