import express from 'express';
import { authenticate, authorize, requirePermission } from '../../../shared/middlewares/auth.js';
import { validateRequest, businessSchemas } from '../../../shared/middlewares/validateRequest.js';
import {
  createNotification,
  createFromTemplate,
  getNotifications,
  getNotificationById,
  getUserNotifications,
  markAsRead,
  getWhatsAppShareData,
  createOrderNotification,
  createGatepassNotification,
  createDeliveryValidationNotification,
  sendSystemBroadcast,
  getNotificationTemplates,
  getNotificationsDashboard,
  getNotificationStats,
  healthCheck,
  testNotification
} from '../controllers/notificationsController.js';

const router = express.Router();

// ==================== HEALTH & TEST ROUTES ====================

// Health check endpoint
router.get('/health', healthCheck);

// Test notification endpoint (development only)
router.post('/test',
  authenticate,
  authorize(['admin']),
  testNotification
);

// ==================== NOTIFICATION MANAGEMENT ROUTES ====================

// Create notification
router.post('/notifications',
  authenticate,
  authorize(['admin', 'salesman', 'logistics', 'accounts']),
  requirePermission('send_notifications'),
  validateRequest(businessSchemas.createNotification),
  createNotification
);

// Create notification from template
router.post('/notifications/from-template',
  authenticate,
  authorize(['admin', 'salesman', 'logistics', 'accounts']),
  requirePermission('send_notifications'),
  validateRequest(businessSchemas.createFromTemplate),
  createFromTemplate
);

// Get notifications with filtering
router.get('/notifications',
  authenticate,
  authorize(['admin', 'salesman', 'logistics', 'accounts', 'driver']),
  requirePermission('view_notifications'),
  getNotifications
);

// Get notification by ID
router.get('/notifications/:notificationId',
  authenticate,
  authorize(['admin', 'salesman', 'logistics', 'accounts', 'driver']),
  requirePermission('view_notifications'),
  getNotificationById
);

// Get user's notifications
router.get('/my-notifications',
  authenticate,
  getUserNotifications
);

// Mark notification as read
router.patch('/notifications/:notificationId/read',
  authenticate,
  markAsRead
);

// ==================== WHATSAPP INTEGRATION ROUTES ====================

// Get WhatsApp share data for manual sharing
router.get('/notifications/:notificationId/whatsapp-share',
  authenticate,
  authorize(['admin', 'salesman', 'logistics', 'driver']),
  requirePermission('send_notifications'),
  getWhatsAppShareData
);

// Create order notification for WhatsApp sharing
router.post('/whatsapp/order',
  authenticate,
  authorize(['admin', 'salesman']),
  requirePermission('send_notifications'),
  validateRequest(businessSchemas.createOrderNotification),
  createOrderNotification
);

// Create gatepass notification for WhatsApp sharing
router.post('/whatsapp/gatepass',
  authenticate,
  authorize(['admin', 'logistics']),
  requirePermission('send_notifications'),
  validateRequest(businessSchemas.createGatepassNotification),
  createGatepassNotification
);

// Create delivery validation notification
router.post('/whatsapp/delivery',
  authenticate,
  authorize(['admin', 'driver', 'logistics']),
  requirePermission('send_notifications'),
  validateRequest(businessSchemas.createDeliveryNotification),
  createDeliveryValidationNotification
);

// ==================== REAL-TIME FEATURES ROUTES ====================

// Send system broadcast notification
router.post('/broadcast',
  authenticate,
  authorize(['admin']),
  requirePermission('manage_notifications'),
  validateRequest(businessSchemas.systemBroadcast),
  sendSystemBroadcast
);

// ==================== TEMPLATE MANAGEMENT ROUTES ====================

// Get notification templates
router.get('/templates',
  authenticate,
  authorize(['admin', 'salesman', 'logistics', 'accounts']),
  requirePermission('view_notifications'),
  getNotificationTemplates
);

// ==================== DASHBOARD & REPORTS ROUTES ====================

// Get notifications dashboard data
router.get('/dashboard',
  authenticate,
  authorize(['admin', 'salesman', 'logistics', 'accounts']),
  requirePermission('view_notifications'),
  getNotificationsDashboard
);

// Get notification statistics
router.get('/stats',
  authenticate,
  authorize(['admin']),
  requirePermission('view_notifications'),
  getNotificationStats
);

// Get notifications report
router.get('/reports',
  authenticate,
  authorize(['admin']),
  requirePermission('view_notifications'),
  getNotificationStats // Reusing stats endpoint for reports
);

export default router;