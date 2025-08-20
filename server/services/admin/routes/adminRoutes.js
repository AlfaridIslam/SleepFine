import express from 'express';
import { authenticate, authorize, requirePermission } from '../../../shared/middlewares/auth.js';
import { validateRequest, businessSchemas } from '../../../shared/middlewares/validateRequest.js';
import { secureLogin, secureLogout, checkAuth } from '../../../shared/middlewares/secureAuth.js';
import {
  getAdminDashboard,
  getSalesStats,
  getAccountsStats,
  getLogisticsStats,
  getAllUsers,
  getUserStats,
  getSystemSettings,
  updateSystemSetting,
  getAuditLogs,
  getSystemReport,
  getPerformanceMetrics,
  getSystemHealth,
  healthCheck,
  getServiceOverview,
  testAdminFunction
} from '../controllers/adminController.js';

const router = express.Router();

// ==================== AUTHENTICATION ROUTES ====================

// Secure login with httpOnly cookies
router.post('/auth/login', secureLogin);

// Secure logout
router.post('/auth/logout', secureLogout);

// Check authentication status
router.get('/auth/me', authenticate, checkAuth);



// ==================== HEALTH & TEST ROUTES ====================

// Health check endpoint
router.get('/health', healthCheck);

// Test admin functionality
router.post('/test',
  authenticate,
  authorize(['admin', 'super_admin']),
  testAdminFunction
);

// ==================== DASHBOARD ROUTES ====================

// Get comprehensive admin dashboard
router.get('/dashboard',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getAdminDashboard
);

// Get sales statistics
router.get('/stats/sales',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getSalesStats
);

// Get accounts statistics
router.get('/stats/accounts',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getAccountsStats
);

// Get logistics statistics
router.get('/stats/logistics',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getLogisticsStats
);

// Get user statistics
router.get('/stats/users',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_users'),
  getUserStats
);

// ==================== USER MANAGEMENT ROUTES ====================

// Get all users across services
router.get('/users',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_users'),
  getAllUsers
);

// Get user by ID (from any service)
router.get('/users/:userId',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_users'),
  getAllUsers
);

// Update user (any service user)
router.patch('/users/:userId',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_users'),
  validateRequest(businessSchemas.updateUser),
  getAllUsers
);

// Deactivate user
router.patch('/users/:userId/deactivate',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_users'),
  getAllUsers
);

// Activate user
router.patch('/users/:userId/activate',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_users'),
  getAllUsers
);

// ==================== SYSTEM SETTINGS ROUTES ====================

// Get system settings
router.get('/settings',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_system'),
  getSystemSettings
);

// Get system settings by category
router.get('/settings/:category',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_system'),
  getSystemSettings
);

// Update system setting
router.patch('/settings/:settingKey',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_system'),
  validateRequest(businessSchemas.updateSystemSetting),
  updateSystemSetting
);

// Reset setting to default
router.patch('/settings/:settingKey/reset',
  authenticate,
  authorize(['super_admin']),
  requirePermission('manage_system'),
  updateSystemSetting
);

// Export system settings
router.get('/settings/export/:category?',
  authenticate,
  authorize(['super_admin']),
  requirePermission('manage_system'),
  getSystemSettings
);

// Import system settings
router.post('/settings/import',
  authenticate,
  authorize(['super_admin']),
  requirePermission('manage_system'),
  validateRequest(businessSchemas.importSystemSettings),
  updateSystemSetting
);

// ==================== AUDIT LOG ROUTES ====================

// Get audit logs
router.get('/audit-logs',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_audit_logs'),
  getAuditLogs
);

// Get audit logs by user
router.get('/audit-logs/user/:userId',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_audit_logs'),
  getAuditLogs
);

// Get audit logs by service
router.get('/audit-logs/service/:service',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_audit_logs'),
  getAuditLogs
);

// Export audit logs
router.get('/audit-logs/export',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_audit_logs'),
  getAuditLogs
);

// ==================== REPORTING ROUTES ====================

// Get comprehensive system report
router.get('/reports/system',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getSystemReport
);

// Get performance metrics
router.get('/reports/performance',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getPerformanceMetrics
);

// Get system health report
router.get('/reports/health',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getSystemHealth
);

// Get service overview
router.get('/reports/services',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getServiceOverview
);

// Generate custom report
router.post('/reports/generate',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  validateRequest(businessSchemas.generateCustomReport),
  getSystemReport
);

// ==================== SYSTEM MANAGEMENT ROUTES ====================

// Get system status
router.get('/system/status',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_system'),
  getSystemHealth
);

// Get system configuration
router.get('/system/config',
  authenticate,
  authorize(['super_admin']),
  requirePermission('manage_system'),
  getSystemSettings
);

// Update system configuration
router.patch('/system/config',
  authenticate,
  authorize(['super_admin']),
  requirePermission('manage_system'),
  validateRequest(businessSchemas.updateSystemConfig),
  updateSystemSetting
);

// ==================== MONITORING ROUTES ====================

// Get real-time metrics
router.get('/monitoring/metrics',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getPerformanceMetrics
);

// Get service health checks
router.get('/monitoring/health-checks',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getSystemHealth
);

// Get system logs
router.get('/monitoring/logs',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_logs'),
  getAuditLogs
);

// ==================== ANALYTICS ROUTES ====================

// Get business analytics
router.get('/analytics/business',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getAdminDashboard
);

// Get user activity analytics
router.get('/analytics/user-activity',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_audit_logs'),
  getAuditLogs
);

// Get performance analytics
router.get('/analytics/performance',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('view_reports'),
  getPerformanceMetrics
);

// ==================== INTEGRATION ROUTES ====================

// Get WhatsApp integration status
router.get('/integrations/whatsapp',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_system'),
  getServiceOverview
);

// Get database connection status
router.get('/integrations/database',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_system'),
  getSystemHealth
);

// Get cache connection status
router.get('/integrations/cache',
  authenticate,
  authorize(['admin', 'super_admin']),
  requirePermission('manage_system'),
  getSystemHealth
);

export default router;