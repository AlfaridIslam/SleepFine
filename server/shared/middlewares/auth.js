import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import config from '../../config/index.js';
import { hasPermission, canAccessRole } from '../constants/roles.js';
import logger from '../utils/logger.js';
import ApiResponse from '../utils/response.js';

// JWT Strategy with cookie support
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromExtractors([
    ExtractJwt.fromAuthHeaderAsBearerToken(),
    (req) => req.cookies?.authToken // Support httpOnly cookies
  ]),
  secretOrKey: config.jwt.secret,
  passReqToCallback: true,
}, async (req, payload, done) => {
  try {
    // Check if token is expired
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      return done(null, false, { message: 'Token expired' });
    }

    // Add user info to request
    req.user = {
      id: payload.userId,
      email: payload.email,
      role: payload.role,
      permissions: payload.permissions || [],
    };

    return done(null, req.user);
  } catch (error) {
    logger.error('JWT Strategy Error:', error);
    return done(error, false);
  }
}));

// Local Strategy (for login)
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    // This would typically query your database
    // For now, we'll return a mock user
    const user = {
      id: '1',
      email,
      role: 'admin',
      password: await bcrypt.hash('password', 10),
    };

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return done(null, false, { message: 'Invalid credentials' });
    }

    return done(null, user);
  } catch (error) {
    logger.error('Local Strategy Error:', error);
    return done(error);
  }
}));

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    // This would typically query your database
    const user = { id, email: 'user@example.com', role: 'admin' };
    done(null, user);
  } catch (error) {
    done(error);
  }
});

/**
 * Authentication middleware
 * Verifies JWT token and adds user to request
 */
const authenticate = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      logger.error('Authentication error:', err);
      return ApiResponse.unauthorized(res, 'Authentication failed');
    }

    if (!user) {
      logger.logSecurity('authentication_failed', {
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        reason: info?.message || 'No user found',
      });
      return ApiResponse.unauthorized(res, info?.message || 'Authentication required');
    }

    req.user = user;
    next();
  })(req, res, next);
};

/**
 * Role-based authorization middleware
 * @param {string|Array} roles - Required role(s)
 */
const authorize = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return ApiResponse.unauthorized(res, 'Authentication required');
    }

    const userRole = req.user.role;
    const requiredRoles = Array.isArray(roles) ? roles : [roles];

    if (!requiredRoles.includes(userRole)) {
      logger.logSecurity('authorization_failed', {
        userId: req.user.id,
        userRole,
        requiredRoles,
        ip: req.ip,
        url: req.url,
      });
      return ApiResponse.forbidden(res, 'Insufficient permissions');
    }

    next();
  };
};

/**
 * Permission-based authorization middleware
 * @param {string|Array} permissions - Required permission(s)
 */
const requirePermission = (permissions) => {
  return (req, res, next) => {
    if (!req.user) {
      return ApiResponse.unauthorized(res, 'Authentication required');
    }

    const userRole = req.user.role;
    const requiredPermissions = Array.isArray(permissions) ? permissions : [permissions];

    const hasAllPermissions = requiredPermissions.every(permission =>
      hasPermission(userRole, permission)
    );

    if (!hasAllPermissions) {
      logger.logSecurity('permission_denied', {
        userId: req.user.id,
        userRole,
        requiredPermissions,
        ip: req.ip,
        url: req.url,
      });
      return ApiResponse.forbidden(res, 'Insufficient permissions');
    }

    next();
  };
};

/**
 * Resource ownership middleware
 * Checks if user can access a specific resource
 * @param {Function} resourceGetter - Function to get resource by ID
 * @param {string} resourceField - Field name for resource ID (default: 'id')
 */
const requireOwnership = (resourceGetter, resourceField = 'id') => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return ApiResponse.unauthorized(res, 'Authentication required');
      }

      const resourceId = req.params[resourceField];
      if (!resourceId) {
        return ApiResponse.badRequest(res, 'Resource ID required');
      }

      const resource = await resourceGetter(resourceId);
      if (!resource) {
        return ApiResponse.notFound(res, 'Resource not found');
      }

      const userRole = req.user.role;
      const resourceOwnerId = resource.userId || resource.createdBy;

      // Admin can access all resources
      if (userRole === 'admin') {
        req.resource = resource;
        return next();
      }

      // Check if user owns the resource
      if (resourceOwnerId && resourceOwnerId.toString() === req.user.id.toString()) {
        req.resource = resource;
        return next();
      }

      logger.logSecurity('ownership_violation', {
        userId: req.user.id,
        userRole,
        resourceId,
        resourceOwnerId,
        ip: req.ip,
        url: req.url,
      });

      return ApiResponse.forbidden(res, 'Access denied to this resource');
    } catch (error) {
      logger.error('Ownership check error:', error);
      return ApiResponse.internalError(res, 'Error checking resource ownership');
    }
  };
};

/**
 * Rate limiting middleware for authentication endpoints
 */
const authRateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: 'Too many authentication attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
};

/**
 * Optional authentication middleware
 * Similar to authenticate but doesn't fail if no token
 */
const optionalAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      logger.error('Optional authentication error:', err);
    }

    if (user) {
      req.user = user;
    }

    next();
  })(req, res, next);
};

/**
 * API key authentication middleware
 * For service-to-service communication
 */
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'] || req.headers.authorization?.replace('Bearer ', '');

  if (!apiKey) {
    return ApiResponse.unauthorized(res, 'API key required');
  }

  // In production, validate against stored API keys
  const validApiKeys = process.env.VALID_API_KEYS?.split(',') || [];
  
  if (!validApiKeys.includes(apiKey)) {
    logger.logSecurity('invalid_api_key', {
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      providedKey: apiKey.substring(0, 8) + '...',
    });
    return ApiResponse.unauthorized(res, 'Invalid API key');
  }

  req.apiKey = apiKey;
  next();
};

/**
 * Session authentication middleware
 * For web-based authentication
 */
const authenticateSession = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return ApiResponse.unauthorized(res, 'Session authentication required');
  }
  next();
};

export {
  authenticate,
  authorize,
  requirePermission,
  requireOwnership,
  optionalAuth,
  authenticateApiKey,
  authenticateSession,
  authRateLimit,
}; 