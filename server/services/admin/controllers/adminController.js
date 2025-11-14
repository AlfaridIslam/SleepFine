import adminService from '../services/adminService.js';
import { asyncHandler } from '../../../shared/utils/asyncHandler.js';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';
import logger from '../../../shared/utils/logger.js';

// ==================== DASHBOARD MANAGEMENT ====================

// Get comprehensive admin dashboard
export const getAdminDashboard = asyncHandler(async (req, res) => {
  const adminId = req.user._id;
  const { startDate, endDate } = req.query;

  const dateRange = {};
  if (startDate) dateRange.startDate = startDate;
  if (endDate) dateRange.endDate = endDate;

  const dashboard = await adminService.getDashboardDataService(adminId, dateRange);

  res.status(200).json(
    new ApiResponse(200, dashboard, 'Admin dashboard data retrieved successfully')
  );
});

// Get sales statistics
export const getSalesStats = asyncHandler(async (req, res) => {
  const { startDate, endDate } = req.query;

  const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const end = endDate ? new Date(endDate) : new Date();

  const stats = await adminService.getSalesStatsService(start, end);

  res.status(200).json(
    new ApiResponse(200, stats, 'Sales statistics retrieved successfully')
  );
});

// Get accounts statistics
export const getAccountsStats = asyncHandler(async (req, res) => {
  const { startDate, endDate } = req.query;

  const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const end = endDate ? new Date(endDate) : new Date();

  const stats = await adminService.getAccountsStatsService(start, end);

  res.status(200).json(
    new ApiResponse(200, stats, 'Accounts statistics retrieved successfully')
  );
});

// Get logistics statistics
export const getLogisticsStats = asyncHandler(async (req, res) => {
  const { startDate, endDate } = req.query;

  const start = startDate ? new Date(startDate) : new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const end = endDate ? new Date(endDate) : new Date();

  const stats = await adminService.getLogisticsStatsService(start, end);

  res.status(200).json(
    new ApiResponse(200, stats, 'Logistics statistics retrieved successfully')
  );
});

// ==================== USER MANAGEMENT ====================

// Get all users across services
export const getAllUsers = asyncHandler(async (req, res) => {
  const {
    userType,
    isActive,
    status,
    search,
    page = 1,
    limit = 10
  } = req.query;

  const filters = {
    userType,
    isActive: isActive !== undefined ? isActive === 'true' : undefined,
    status,
    search
  };

  // Remove undefined values
  Object.keys(filters).forEach(key => {
    if (filters[key] === undefined) delete filters[key];
  });

  const result = await adminService.getAllUsersService(
    filters,
    parseInt(page),
    parseInt(limit)
  );

  res.status(200).json(
    new ApiResponse(200, result, 'Users retrieved successfully')
  );
});

// Get user statistics
export const getUserStats = asyncHandler(async (req, res) => {
  const stats = await adminService.getUserStatsService();

  res.status(200).json(
    new ApiResponse(200, stats, 'User statistics retrieved successfully')
  );
});

// ==================== SYSTEM SETTINGS MANAGEMENT ====================

// Get system settings
export const getSystemSettings = asyncHandler(async (req, res) => {
  const { category } = req.query;
  const accessLevel = req.user.role; // admin or super_admin

  const settings = await adminService.getSystemSettingsService(category, accessLevel);

  res.status(200).json(
    new ApiResponse(200, settings, 'System settings retrieved successfully')
  );
});

// Update system setting
export const updateSystemSetting = asyncHandler(async (req, res) => {
  const { settingKey } = req.params;
  const { value } = req.body;
  const updatedBy = req.user._id;

  const setting = await adminService.updateSystemSettingService(settingKey, value, updatedBy);

  logger.info(`System setting updated: ${settingKey} by user: ${updatedBy}`);

  res.status(200).json(
    new ApiResponse(200, setting, 'System setting updated successfully')
  );
});

// ==================== AUDIT LOG MANAGEMENT ====================

// Get audit logs
export const getAuditLogs = asyncHandler(async (req, res) => {
  const {
    userId,
    service,
    actionType,
    resource,
    severity,
    status,
    isReviewed,
    dateFrom,
    dateTo,
    page = 1,
    limit = 10
  } = req.query;

  const filters = {
    userId,
    service,
    actionType,
    resource,
    severity,
    status,
    isReviewed: isReviewed !== undefined ? isReviewed === 'true' : undefined,
    dateFrom,
    dateTo
  };

  // Remove undefined values
  Object.keys(filters).forEach(key => {
    if (filters[key] === undefined) delete filters[key];
  });

  const result = await adminService.getAuditLogsService(
    filters,
    parseInt(page),
    parseInt(limit)
  );

  res.status(200).json(
    new ApiResponse(200, result, 'Audit logs retrieved successfully')
  );
});

// ==================== REPORTS & ANALYTICS ====================

// Get comprehensive system report
export const getSystemReport = asyncHandler(async (req, res) => {
  const { startDate, endDate, reportType = 'overview' } = req.query;

  const dateRange = {};
  if (startDate) dateRange.startDate = startDate;
  if (endDate) dateRange.endDate = endDate;

  const dashboard = await adminService.getDashboardDataService(null, dateRange);

  const report = {
    reportType,
    generatedAt: new Date().toISOString(),
    generatedBy: req.user._id,
    period: dashboard.period,
    summary: dashboard.overview,
    detailed: {
      sales: dashboard.sales,
      accounts: dashboard.accounts,
      logistics: dashboard.logistics,
      users: dashboard.users
    }
  };

  res.status(200).json(
    new ApiResponse(200, report, 'System report generated successfully')
  );
});

// Get performance metrics
export const getPerformanceMetrics = asyncHandler(async (req, res) => {
  const metrics = {
    system: {
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      nodeVersion: process.version,
      environment: process.env.NODE_ENV || 'development'
    },
    services: {
      admin: { status: 'running', port: process.env.ADMIN_SERVICE_PORT || 3005 },
      sales: { status: 'running', port: process.env.SALES_SERVICE_PORT || 3001 },
      accounts: { status: 'running', port: process.env.ACCOUNTS_SERVICE_PORT || 3002 },
      logistics: { status: 'running', port: process.env.LOGISTICS_SERVICE_PORT || 3003 },
      notifications: { status: 'running', port: process.env.NOTIFICATIONS_SERVICE_PORT || 3004 }
    },
    database: {
      status: 'connected',
      name: 'MongoDB'
    },
    cache: {
      status: 'connected',
      name: 'Redis'
    }
  };

  res.status(200).json(
    new ApiResponse(200, metrics, 'Performance metrics retrieved successfully')
  );
});

// ==================== SYSTEM MANAGEMENT ====================

// Get system health
export const getSystemHealth = asyncHandler(async (req, res) => {
  const health = {
    service: 'admin',
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    features: {
      userManagement: true,
      systemSettings: true,
      auditLogging: true,
      dashboard: true,
      reporting: true,
      monitoring: true
    },
    database: {
      status: 'connected',
      name: 'MongoDB'
    },
    cache: {
      status: 'connected',
      name: 'Redis'
    },
    services: {
      sales: 'running',
      accounts: 'running',
      logistics: 'running',
      notifications: 'running'
    }
  };

  res.status(200).json(
    new ApiResponse(200, health, 'Admin service is healthy')
  );
});

// Health check for admin service
export const healthCheck = asyncHandler(async (req, res) => {
  const health = {
    success: true,
    message: 'Admin Service is running',
    service: 'admin',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  };

  res.status(200).json(health);
});

// ==================== UTILITY ENDPOINTS ====================

// Get service overview
export const getServiceOverview = asyncHandler(async (req, res) => {
  const overview = {
    totalServices: 5,
    runningServices: 5,
    serviceDetails: {
      admin: {
        name: 'Admin Service',
        status: 'running',
        port: process.env.ADMIN_SERVICE_PORT || 3005,
        description: 'System administration and management'
      },
      sales: {
        name: 'Sales Service',
        status: 'running',
        port: process.env.SALES_SERVICE_PORT || 3001,
        description: 'Order management and sales tracking'
      },
      accounts: {
        name: 'Accounts Service',
        status: 'running',
        port: process.env.ACCOUNTS_SERVICE_PORT || 3002,
        description: 'Payment processing and financial management'
      },
      logistics: {
        name: 'Logistics Service',
        status: 'running',
        port: process.env.LOGISTICS_SERVICE_PORT || 3003,
        description: 'Inventory and delivery management'
      },
      notifications: {
        name: 'Notifications Service',
        status: 'running',
        port: process.env.NOTIFICATIONS_SERVICE_PORT || 3004,
        description: 'Real-time notifications and WhatsApp integration'
      }
    },
    architecture: 'Microservices',
    messageQueue: 'Kafka',
    database: 'MongoDB',
    cache: 'Redis',
    gateway: 'API Gateway'
  };

  res.status(200).json(
    new ApiResponse(200, overview, 'Service overview retrieved successfully')
  );
});

// Test admin functionality
export const testAdminFunction = asyncHandler(async (req, res) => {
  const testData = {
    message: 'Admin service test successful',
    timestamp: new Date().toISOString(),
    adminId: req.user._id,
    adminRole: req.user.role,
    permissions: req.user.permissions || []
  };

  logger.info(`Admin test function called by: ${req.user._id}`);

  res.status(200).json(
    new ApiResponse(200, testData, 'Admin test function executed successfully')
  );
});