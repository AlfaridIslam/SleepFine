import Notification from '../models/Notification.js';
import NotificationTemplate from '../models/NotificationTemplate.js';
import { cacheService } from '../../../config/db.js';
import logger from '../../../shared/utils/logger.js';
import mongoose from 'mongoose';

class NotificationsService {
  constructor() {
    this.socketIO = null;
    this.whatsappGroupUrl = 'https://chat.whatsapp.com/KGwplcCVgf9HbNboZ5L9iE';
  }

  // Initialize Socket.IO
  initializeSocketIO = (io) => {
    this.socketIO = io;
    logger.info('Socket.IO initialized for notifications service');
  };

  // ==================== NOTIFICATION SERVICES ====================

  // Create notification with real-time delivery
  createNotificationService = async (notificationData, createdBy = null) => {
    try {
      // Generate unique notification ID
      const notificationId = this.generateNotificationId();
      
      // Create notification
      const notification = new Notification({
        notificationId,
        ...notificationData,
        createdBy,
        createdByModel: this.getUserModel(createdBy),
        status: 'pending'
      });

      const savedNotification = await notification.save();
      
      // Cache the notification
      await cacheService.set(`notification:${savedNotification._id}`, savedNotification, 3600);
      
      // Send real-time notification via Socket.IO
      await this.sendRealTimeNotification(savedNotification);
      
      // Process delivery channels
      await this.processNotificationDelivery(savedNotification);
      
      logger.info(`Notification created successfully: ${notificationId}`);
      return savedNotification;
    } catch (error) {
      logger.error('Error creating notification:', error);
      throw error;
    }
  };

  // Create notification from template
  createFromTemplateService = async (templateType, variables, recipients, createdBy = null) => {
    try {
      // Get template
      const template = await NotificationTemplate.findByType(templateType);
      if (!template) {
        throw new Error(`Template not found: ${templateType}`);
      }

      // Validate variables
      const validationErrors = template.validateVariables(variables);
      if (validationErrors.length > 0) {
        throw new Error(`Template validation failed: ${validationErrors.join(', ')}`);
      }

      // Render templates
      const title = template.renderTemplate('title', variables);
      const message = template.renderTemplate('message', variables);

      // Create notification data
      const notificationData = {
        type: template.type,
        title,
        message,
        priority: template.priority,
        channels: template.channels,
        recipients: Array.isArray(recipients) ? recipients : [recipients],
        relatedEntity: variables.relatedEntity || {},
        metadata: {
          templateId: template.templateId,
          templateVersion: template.version,
          variables,
          category: template.category
        }
      };

      // Create notification
      const notification = await this.createNotificationService(notificationData, createdBy);
      
      // Generate WhatsApp share data if WhatsApp channel is enabled
      if (template.channels.includes('whatsapp')) {
        const whatsappData = template.generateWhatsAppShareData(variables);
        notification.whatsappShareData = whatsappData;
        
        // Cache WhatsApp share data
        await cacheService.set(`whatsapp_share:${notification._id}`, whatsappData, 3600);
      }

      return notification;
    } catch (error) {
      logger.error('Error creating notification from template:', error);
      throw error;
    }
  };

  // Generate unique notification ID
  generateNotificationId = () => {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `NOTIF${timestamp}${random}`;
  };

  // Get user model based on role
  getUserModel = (userId) => {
    return 'Admin';
  };

  // Send real-time notification via Socket.IO
  sendRealTimeNotification = async (notification) => {
    try {
      if (!this.socketIO) {
        logger.warn('Socket.IO not initialized, skipping real-time notification');
        return;
      }

      // Send to each recipient
      notification.recipients.forEach(recipient => {
        const roomName = `user_${recipient.userId}`;
        this.socketIO.to(roomName).emit('new_notification', {
          notificationId: notification.notificationId,
          type: notification.type,
          title: notification.title,
          message: notification.message,
          priority: notification.priority,
          createdAt: notification.createdAt,
          relatedEntity: notification.relatedEntity
        });
      });

      logger.info(`Real-time notification sent: ${notification.notificationId}`);
    } catch (error) {
      logger.error('Error sending real-time notification:', error);
    }
  };

  // Process notification delivery across channels
  processNotificationDelivery = async (notification) => {
    try {
      notification.status = 'sent';
      await notification.save();
      logger.info(`Notification delivery processed: ${notification.notificationId}`);
    } catch (error) {
      logger.error('Error processing notification delivery:', error);
    }
  };

  // ==================== WHATSAPP INTEGRATION SERVICES ====================

  // Generate WhatsApp share data for manual sharing
  generateWhatsAppShareData = async (notificationId) => {
    try {
      const cachedData = await cacheService.get(`whatsapp_share:${notificationId}`);
      if (cachedData) {
        return cachedData;
      }

      const notification = await Notification.findById(notificationId);
      if (!notification) {
        throw new Error('Notification not found');
      }

      let whatsappMessage = notification.message;
      whatsappMessage = this.addWhatsAppEmojis(whatsappMessage, notification.type);

      const shareData = {
        groupUrl: this.whatsappGroupUrl,
        message: whatsappMessage,
        shareUrl: `${this.whatsappGroupUrl}&text=${encodeURIComponent(whatsappMessage)}`,
        instructions: 'Please manually share this information in the WhatsApp group',
        notificationId: notification.notificationId,
        type: notification.type,
        priority: notification.priority,
        createdAt: notification.createdAt
      };

      await cacheService.set(`whatsapp_share:${notificationId}`, shareData, 3600);
      return shareData;
    } catch (error) {
      logger.error(`Error generating WhatsApp share data for ${notificationId}:`, error);
      throw error;
    }
  };

  // Create order notification for WhatsApp sharing
  createOrderNotificationService = async (orderData, createdBy) => {
    try {
      const whatsappMessage = `🆕 New Order Created!

Order ID: ${orderData.orderId}
Customer: ${orderData.customer?.name || 'N/A'}
Total Amount: ₹${orderData.orderDetails?.totalAmount || 0}
Items: ${orderData.items?.length || 0} products
Salesman: ${orderData.salesmanName || 'N/A'}
Date: ${new Date().toLocaleString('en-IN')}

Please start manufacturing process.`;

      const notificationData = {
        type: 'order_update',
        title: 'New Order Created',
        message: whatsappMessage,
        priority: 'high',
        channels: ['whatsapp', 'in_app'],
        recipients: [
          { role: 'logistics', userModel: 'Logistics' },
          { role: 'admin', userModel: 'Admin' }
        ],
        relatedEntity: {
          entityType: 'order',
          entityId: orderData._id,
          orderId: orderData.orderId
        }
      };

      const notification = await this.createNotificationService(notificationData, createdBy);
      
      // Generate WhatsApp share data
      const whatsappData = {
        groupUrl: this.whatsappGroupUrl,
        message: whatsappMessage,
        shareUrl: `${this.whatsappGroupUrl}&text=${encodeURIComponent(whatsappMessage)}`,
        instructions: 'Please manually share this in the logistics WhatsApp group',
        type: 'order_created'
      };
      
      await cacheService.set(`whatsapp_share:${notification._id}`, whatsappData, 3600);
      notification.whatsappShareData = whatsappData;

      return notification;
    } catch (error) {
      logger.error('Error creating order notification:', error);
      throw error;
    }
  };

  // Create gatepass notification for WhatsApp sharing
  createGatepassNotificationService = async (gatepassData, createdBy) => {
    try {
      const whatsappMessage = `🎫 New Gatepass Created!

Gatepass ID: ${gatepassData.gatepassId}
Order ID: ${gatepassData.orderId}
Customer: ${gatepassData.order?.customer?.name || 'N/A'}
Total Amount: ₹${gatepassData.paymentDetails?.totalAmount || 0}
Driver: ${gatepassData.deliveryDetails?.driver?.fullName || 'Not Assigned'}
Vehicle: ${gatepassData.deliveryDetails?.vehicleNumber || 'N/A'}
Valid Until: ${gatepassData.validUntil?.toLocaleString('en-IN')}
Date: ${new Date().toLocaleString('en-IN')}

Ready for delivery!`;

      const notificationData = {
        type: 'delivery_update',
        title: 'Gatepass Created',
        message: whatsappMessage,
        priority: 'high',
        channels: ['whatsapp', 'in_app'],
        recipients: [
          { role: 'driver', userModel: 'Driver' },
          { role: 'admin', userModel: 'Admin' }
        ],
        relatedEntity: {
          entityType: 'gatepass',
          entityId: gatepassData._id,
          orderId: gatepassData.orderId
        }
      };

      const notification = await this.createNotificationService(notificationData, createdBy);
      
      // Generate WhatsApp share data
      const whatsappData = {
        groupUrl: this.whatsappGroupUrl,
        message: whatsappMessage,
        shareUrl: `${this.whatsappGroupUrl}&text=${encodeURIComponent(whatsappMessage)}`,
        instructions: 'Please manually share this in the delivery WhatsApp group',
        type: 'gatepass_created'
      };
      
      await cacheService.set(`whatsapp_share:${notification._id}`, whatsappData, 3600);
      notification.whatsappShareData = whatsappData;

      return notification;
    } catch (error) {
      logger.error('Error creating gatepass notification:', error);
      throw error;
    }
  };

  // Create delivery validation notification
  createDeliveryValidationNotificationService = async (deliveryData, createdBy) => {
    try {
      const whatsappMessage = `✅ Delivery Completed!

Order ID: ${deliveryData.orderId}
Gatepass ID: ${deliveryData.gatepassId}
Customer: ${deliveryData.customerName}
Delivery Date: ${new Date().toLocaleString('en-IN')}
Driver: ${deliveryData.driverName}
Payment Received: ₹${deliveryData.paymentReceived || 0}
Payment Method: ${deliveryData.paymentMethod || 'Cash'}

Order successfully delivered and payment collected!`;

      const notificationData = {
        type: 'delivery_update',
        title: 'Delivery Completed',
        message: whatsappMessage,
        priority: 'high',
        channels: ['whatsapp', 'in_app'],
        recipients: [
          { role: 'salesman', userModel: 'Salesman' },
          { role: 'accounts', userModel: 'Accountant' },
          { role: 'admin', userModel: 'Admin' }
        ],
        relatedEntity: {
          entityType: 'order',
          entityId: deliveryData.orderId,
          orderId: deliveryData.orderId
        }
      };

      const notification = await this.createNotificationService(notificationData, createdBy);
      
      // Generate WhatsApp share data
      const whatsappData = {
        groupUrl: this.whatsappGroupUrl,
        message: whatsappMessage,
        shareUrl: `${this.whatsappGroupUrl}&text=${encodeURIComponent(whatsappMessage)}`,
        instructions: 'Please manually share this delivery confirmation in the WhatsApp group',
        type: 'delivery_completed'
      };
      
      await cacheService.set(`whatsapp_share:${notification._id}`, whatsappData, 3600);
      notification.whatsappShareData = whatsappData;

      return notification;
    } catch (error) {
      logger.error('Error creating delivery validation notification:', error);
      throw error;
    }
  };

  // Add WhatsApp emojis based on notification type
  addWhatsAppEmojis = (message, type) => {
    const emojiMap = {
      'order_update': '📋',
      'payment_update': '💰',
      'delivery_update': '🚚',
      'manufacturing_update': '🏭',
      'system_alert': '⚠️',
      'reminder': '⏰',
      'announcement': '📢'
    };

    const emoji = emojiMap[type] || '📌';
    return message.startsWith(emoji) ? message : `${emoji} ${message}`;
  };

  // Get notifications with filtering
  getNotificationsService = async (filters = {}, page = 1, limit = 10) => {
    try {
      const query = {};
      
      if (filters.type) query.type = filters.type;
      if (filters.status) query.status = filters.status;
      if (filters.priority) query.priority = filters.priority;
      if (filters.userId) query['recipients.userId'] = filters.userId;
      if (filters.role) query['recipients.role'] = filters.role;
      if (filters.orderId) query['relatedEntity.orderId'] = filters.orderId;

      const skip = (page - 1) * limit;
      
      const [notifications, total] = await Promise.all([
        Notification.find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('createdBy', 'firstName lastName email'),
        Notification.countDocuments(query)
      ]);

      return {
        notifications,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
          hasNext: page * limit < total,
          hasPrev: page > 1
        }
      };
    } catch (error) {
      logger.error('Error fetching notifications:', error);
      throw error;
    }
  };

  // Get notifications dashboard data
  getNotificationsDashboard = async (userId = null, role = null) => {
    try {
      const today = new Date();
      const startOfDay = new Date(today.setHours(0, 0, 0, 0));

      let matchQuery = {};
      if (userId) {
        matchQuery['recipients.userId'] = new mongoose.Types.ObjectId(userId);
      } else if (role) {
        matchQuery['recipients.role'] = role;
      }

      const [overallStats, todayStats] = await Promise.all([
        Notification.getStats(),
        Notification.aggregate([
          { $match: { ...matchQuery, createdAt: { $gte: startOfDay } } },
          {
            $group: {
              _id: null,
              count: { $sum: 1 },
              unreadCount: {
                $sum: { $cond: [{ $eq: ['$recipients.isRead', false] }, 1, 0] }
              }
            }
          }
        ])
      ]);

      return {
        overallStats,
        today: todayStats[0] || { count: 0, unreadCount: 0 }
      };
    } catch (error) {
      logger.error('Error fetching notifications dashboard:', error);
      throw error;
    }
  };
}

export default new NotificationsService();