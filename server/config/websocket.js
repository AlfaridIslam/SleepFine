import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import config from './index.js';
import logger from '../shared/utils/logger.js';

class WebSocketService {
  constructor() {
    this.io = null;
    this.connectedUsers = new Map();
  }

  initialize(server) {
    this.io = new Server(server, {
      cors: {
        origin: config.cors.origin,
        credentials: config.cors.credentials,
      },
      transports: ['websocket', 'polling'],
      allowEIO3: true,
    });

    this.setupMiddleware();
    this.setupEventHandlers();
    
    logger.info('WebSocket service initialized');
  }

  setupMiddleware() {
    // Authentication middleware
    this.io.use(async (socket, next) => {
      try {
        const token = socket.handshake.auth.token || socket.handshake.headers.authorization;
        
        if (!token) {
          return next(new Error('Authentication error: Token required'));
        }

        const decoded = jwt.verify(token.replace('Bearer ', ''), config.jwt.secret);
        socket.userId = decoded.userId;
        socket.userRole = decoded.role;
        socket.userEmail = decoded.email;
        
        next();
      } catch (error) {
        logger.error('WebSocket authentication error:', error);
        next(new Error('Authentication error: Invalid token'));
      }
    });
  }

  setupEventHandlers() {
    this.io.on('connection', (socket) => {
      logger.info(`User connected: ${socket.userId} (${socket.userEmail})`);
      
      // Store connected user
      this.connectedUsers.set(socket.userId, {
        socketId: socket.id,
        role: socket.userRole,
        email: socket.userEmail,
        connectedAt: new Date(),
      });

      // Join user to role-based room
      socket.join(`role:${socket.userRole}`);
      
      // Join user to personal room
      socket.join(`user:${socket.userId}`);

      // Handle order updates
      socket.on('join-order', (orderId) => {
        socket.join(`order:${orderId}`);
        logger.info(`User ${socket.userId} joined order room: ${orderId}`);
      });

      socket.on('leave-order', (orderId) => {
        socket.leave(`order:${orderId}`);
        logger.info(`User ${socket.userId} left order room: ${orderId}`);
      });

      // Handle typing indicators
      socket.on('typing-start', (data) => {
        socket.to(`order:${data.orderId}`).emit('user-typing', {
          userId: socket.userId,
          userName: socket.userEmail,
          orderId: data.orderId,
        });
      });

      socket.on('typing-stop', (data) => {
        socket.to(`order:${data.orderId}`).emit('user-stop-typing', {
          userId: socket.userId,
          orderId: data.orderId,
        });
      });

      // Handle disconnection
      socket.on('disconnect', () => {
        this.connectedUsers.delete(socket.userId);
        logger.info(`User disconnected: ${socket.userId}`);
      });

      // Handle errors
      socket.on('error', (error) => {
        logger.error(`Socket error for user ${socket.userId}:`, error);
      });
    });
  }

  // Send notification to specific user
  sendToUser(userId, event, data) {
    const user = this.connectedUsers.get(userId);
    if (user) {
      this.io.to(user.socketId).emit(event, data);
      logger.info(`Notification sent to user ${userId}: ${event}`);
    } else {
      logger.warn(`User ${userId} not connected, notification not sent`);
    }
  }

  // Send notification to all users with specific role
  sendToRole(role, event, data) {
    this.io.to(`role:${role}`).emit(event, data);
    logger.info(`Notification sent to role ${role}: ${event}`);
  }

  // Send notification to order room
  sendToOrder(orderId, event, data) {
    this.io.to(`order:${orderId}`).emit(event, data);
    logger.info(`Notification sent to order ${orderId}: ${event}`);
  }

  // Send notification to all connected users
  sendToAll(event, data) {
    this.io.emit(event, data);
    logger.info(`Broadcast notification sent: ${event}`);
  }

  // Send order status update
  sendOrderStatusUpdate(orderId, status, data) {
    this.sendToOrder(orderId, 'order-status-update', {
      orderId,
      status,
      timestamp: new Date(),
      ...data,
    });
  }

  // Send payment notification
  sendPaymentNotification(orderId, paymentData) {
    this.sendToOrder(orderId, 'payment-update', {
      orderId,
      paymentData,
      timestamp: new Date(),
    });
  }

  // Send delivery notification
  sendDeliveryNotification(orderId, deliveryData) {
    this.sendToOrder(orderId, 'delivery-update', {
      orderId,
      deliveryData,
      timestamp: new Date(),
    });
  }

  // Send admin notification
  sendAdminNotification(notificationData) {
    this.sendToRole('admin', 'admin-notification', {
      ...notificationData,
      timestamp: new Date(),
    });
  }

  // Send salesman notification
  sendSalesmanNotification(salesmanId, notificationData) {
    this.sendToUser(salesmanId, 'salesman-notification', {
      ...notificationData,
      timestamp: new Date(),
    });
  }

  // Send logistics notification
  sendLogisticsNotification(notificationData) {
    this.sendToRole('logistics', 'logistics-notification', {
      ...notificationData,
      timestamp: new Date(),
    });
  }

  // Send accounts notification
  sendAccountsNotification(notificationData) {
    this.sendToRole('accounts', 'accounts-notification', {
      ...notificationData,
      timestamp: new Date(),
    });
  }

  // Get connected users count
  getConnectedUsersCount() {
    return this.connectedUsers.size;
  }

  // Get connected users by role
  getConnectedUsersByRole(role) {
    const users = [];
    for (const [userId, userData] of this.connectedUsers) {
      if (userData.role === role) {
        users.push({ userId, ...userData });
      }
    }
    return users;
  }

  // Health check
  healthCheck() {
    return {
      connected: this.io !== null,
      connectedUsers: this.getConnectedUsersCount(),
      rooms: Array.from(this.io?.sockets?.adapter?.rooms?.keys() || []),
    };
  }
}

// Create singleton instance
const webSocketService = new WebSocketService();

export default webSocketService; 