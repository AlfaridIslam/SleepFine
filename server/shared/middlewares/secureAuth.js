import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../../config/index.js';
import Admin from '../../services/admin/models/Admin.js';
import Salesman from '../../services/sales/models/Salesman.js';
import Accountant from '../../services/accounts/models/Accountant.js';
import Logistics from '../../services/logistics/models/Logistics.js';
import logger from '../utils/logger.js';

// Secure login with httpOnly cookies
export const secureLogin = async (req, res) => {
  try {
    const { email, password, userType = 'admin' } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Select correct model based on userType
    let UserModel;
    switch (userType.toLowerCase()) {
      case 'admin': UserModel = Admin; break;
      case 'salesman': UserModel = Salesman; break;
      case 'accountant': UserModel = Accountant; break;
      case 'logistics': UserModel = Logistics; break;
      default: 
        return res.status(400).json({
          success: false,
          message: 'Invalid user type'
        });
    }

    // Find user with password field
    const user = await UserModel.findOne({ email: email.toLowerCase() }).select('+password');
    
    if (!user) {
      logger.warn('Login attempt with invalid email', { email, ip: req.ip });
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if account is active
    if (!user.isActive || user.status !== 'active') {
      logger.warn('Login attempt with inactive account', { email, ip: req.ip });
      return res.status(401).json({
        success: false,
        message: 'Account is inactive'
      });
    }

    // Check if account is locked
    if (user.isLocked) {
      logger.warn('Login attempt with locked account', { email, ip: req.ip });
      return res.status(401).json({
        success: false,
        message: 'Account is temporarily locked'
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
      // Increment login attempts
      await user.incLoginAttempts();
      logger.warn('Failed login attempt', { email, ip: req.ip });
      
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Reset login attempts on successful login
    if (user.loginAttempts > 0) {
      await user.resetLoginAttempts();
    }

    // Update last login
    user.lastLogin = new Date();
    user.lastLoginIp = req.ip;
    await user.save();

    // Generate JWT token
    const tokenPayload = {
      userId: user._id,
      email: user.email,
      role: user.role,
      permissions: user.permissions || [],
      userType: userType.toLowerCase()
    };

    const token = jwt.sign(tokenPayload, config.jwt.secret, {
      expiresIn: config.jwt.expiresIn
    });

    // Set secure httpOnly cookie
    const isProduction = config.server.env === 'production';
    res.cookie('authToken', token, {
      httpOnly: true,           // Not accessible via JavaScript
      secure: isProduction,     // HTTPS only in production
      sameSite: 'strict',       // CSRF protection
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: '/'
    });

    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;

    logger.info('Successful login', { 
      userId: user._id, 
      email: user.email, 
      role: user.role,
      ip: req.ip 
    });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: userResponse,
        // Don't send token in response - it's in httpOnly cookie
        expiresIn: config.jwt.expiresIn
      }
    });

  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Secure logout
export const secureLogout = async (req, res) => {
  try {
    // Clear the httpOnly cookie
    res.clearCookie('authToken', {
      httpOnly: true,
      secure: config.server.env === 'production',
      sameSite: 'strict',
      path: '/'
    });

    logger.info('User logged out', { 
      userId: req.user?.id, 
      ip: req.ip 
    });

    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });

  } catch (error) {
    logger.error('Logout error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Check authentication status
export const checkAuth = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated'
      });
    }

    res.status(200).json({
      success: true,
      data: {
        user: req.user,
        authenticated: true
      }
    });

  } catch (error) {
    logger.error('Auth check error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
