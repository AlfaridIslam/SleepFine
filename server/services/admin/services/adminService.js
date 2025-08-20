import Admin from '../models/Admin.js';
import SystemSettings from '../models/SystemSettings.js';
import AuditLog from '../models/AuditLog.js';
import Salesman from '../../sales/models/Salesman.js';
import Accountant from '../../accounts/models/Accountant.js';
import Logistics from '../../logistics/models/Logistics.js';
import Order from '../../sales/models/Order.js';
import Payment from '../../accounts/models/Payment.js';
import Gatepass from '../../logistics/models/Gatepass.js';
import { cacheService } from '../../../config/db.js';
import logger from '../../../shared/utils/logger.js';

class AdminService {
  constructor() {
    this.cachePrefix = 'admin:';
    this.defaultCacheTTL = 3600;
  }

  // Get comprehensive dashboard data
  getDashboardDataService = async (adminId = null, dateRange = {}) => {
    try {
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      
      const startDate = dateRange.startDate ? new Date(dateRange.startDate) : startOfMonth;
      const endDate = dateRange.endDate ? new Date(dateRange.endDate) : endOfMonth;

      const [salesStats, accountsStats, logisticsStats, userStats] = await Promise.all([
        this.getSalesStatsService(startDate, endDate),
        this.getAccountsStatsService(startDate, endDate),
        this.getLogisticsStatsService(startDate, endDate),
        this.getUserStatsService()
      ]);

      return {
        period: { startDate, endDate },
        overview: {
          totalRevenue: accountsStats.totalRevenue || 0,
          totalOrders: salesStats.totalOrders || 0,
          totalUsers: userStats.totalUsers || 0,
          pendingPayments: accountsStats.pendingAmount || 0,
          activeGatepasses: logisticsStats.activeGatepasses || 0
        },
        sales: salesStats,
        accounts: accountsStats,
        logistics: logisticsStats,
        users: userStats
      };
    } catch (error) {
      logger.error('Error fetching dashboard data:', error);
      throw error;
    }
  };

  // Get sales statistics
  getSalesStatsService = async (startDate, endDate) => {
    try {
      const salesAgg = await Order.aggregate([
        { $match: { createdAt: { $gte: startDate, $lte: endDate } } },
        {
          $group: {
            _id: null,
            totalOrders: { $sum: 1 },
            totalRevenue: { $sum: '$orderDetails.totalAmount' },
            completedOrders: { $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] } },
            pendingOrders: { $sum: { $cond: [{ $eq: ['$status', 'pending'] }, 1, 0] } },
            averageOrderValue: { $avg: '$orderDetails.totalAmount' }
          }
        }
      ]);

      return salesAgg[0] || { totalOrders: 0, totalRevenue: 0, completedOrders: 0, pendingOrders: 0, averageOrderValue: 0 };
    } catch (error) {
      logger.error('Error getting sales stats:', error);
      return { totalOrders: 0, totalRevenue: 0, completedOrders: 0, pendingOrders: 0, averageOrderValue: 0 };
    }
  };

  // Get accounts statistics
  getAccountsStatsService = async (startDate, endDate) => {
    try {
      const paymentStats = await Payment.aggregate([
        { $match: { collectedAt: { $gte: startDate, $lte: endDate } } },
        {
          $group: {
            _id: null,
            totalPayments: { $sum: 1 },
            totalAmount: { $sum: '$amount' },
            completedAmount: { $sum: { $cond: [{ $eq: ['$status', 'completed'] }, '$amount', 0] } },
            pendingAmount: { $sum: { $cond: [{ $eq: ['$status', 'pending'] }, '$amount', 0] } },
            verifiedPayments: { $sum: { $cond: [{ $eq: ['$verification.isVerified', true] }, 1, 0] } }
          }
        }
      ]);

      return {
        ...paymentStats[0] || { totalPayments: 0, totalAmount: 0, completedAmount: 0, pendingAmount: 0, verifiedPayments: 0 },
        totalRevenue: (paymentStats[0]?.completedAmount || 0)
      };
    } catch (error) {
      logger.error('Error getting accounts stats:', error);
      return { totalPayments: 0, totalAmount: 0, completedAmount: 0, pendingAmount: 0, verifiedPayments: 0, totalRevenue: 0 };
    }
  };

  // Get logistics statistics
  getLogisticsStatsService = async (startDate, endDate) => {
    try {
      const logisticsAgg = await Gatepass.aggregate([
        { $match: { createdAt: { $gte: startDate, $lte: endDate } } },
        {
          $group: {
            _id: null,
            totalGatepasses: { $sum: 1 },
            activeGatepasses: { $sum: { $cond: [{ $eq: ['$status', 'active'] }, 1, 0] } },
            completedGatepasses: { $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] } },
            totalDeliveries: { $sum: { $cond: [{ $eq: ['$deliveryStatus', 'delivered'] }, 1, 0] } }
          }
        }
      ]);

      return logisticsAgg[0] || { totalGatepasses: 0, activeGatepasses: 0, completedGatepasses: 0, totalDeliveries: 0 };
    } catch (error) {
      logger.error('Error getting logistics stats:', error);
      return { totalGatepasses: 0, activeGatepasses: 0, completedGatepasses: 0, totalDeliveries: 0 };
    }
  };

  // Get user statistics
  getUserStatsService = async () => {
    try {
      const [adminCount, salesmanCount, accountantCount, logisticsCount] = await Promise.all([
        Admin.countDocuments({ isActive: true }),
        Salesman.countDocuments({ isActive: true }),
        Accountant.countDocuments({ isActive: true }),
        Logistics.countDocuments({ isActive: true })
      ]);

      return {
        totalUsers: adminCount + salesmanCount + accountantCount + logisticsCount,
        adminCount,
        salesmanCount,
        accountantCount,
        logisticsCount
      };
    } catch (error) {
      logger.error('Error getting user stats:', error);
      return { totalUsers: 0, adminCount: 0, salesmanCount: 0, accountantCount: 0, logisticsCount: 0 };
    }
  };

  // Get all users across services
  getAllUsersService = async (filters = {}, page = 1, limit = 10) => {
    try {
      const skip = (page - 1) * limit;
      const userTypes = filters.userType ? [filters.userType] : ['admin', 'salesman', 'accountant', 'logistics'];
      
      let allUsers = [];
      let totalCount = 0;

      for (const userType of userTypes) {
        let Model;
        
        switch (userType) {
          case 'admin': Model = Admin; break;
          case 'salesman': Model = Salesman; break;
          case 'accountant': Model = Accountant; break;
          case 'logistics': Model = Logistics; break;
          default: continue;
        }

        const query = {};
        if (filters.isActive !== undefined) query.isActive = filters.isActive;
        if (filters.status) query.status = filters.status;

        const [users, count] = await Promise.all([
          Model.find(query).select('-password').sort({ createdAt: -1 }).limit(100),
          Model.countDocuments(query)
        ]);

        allUsers = allUsers.concat(users.map(user => ({ ...user.toObject(), userType })));
        totalCount += count;
      }

      return {
        users: allUsers.slice(skip, skip + limit),
        pagination: {
          page, limit, total: totalCount,
          pages: Math.ceil(totalCount / limit),
          hasNext: page * limit < totalCount,
          hasPrev: page > 1
        }
      };
    } catch (error) {
      logger.error('Error fetching all users:', error);
      throw error;
    }
  };

  // Get system settings
  getSystemSettingsService = async (category = null) => {
    try {
      return category ? 
        await SystemSettings.findByCategory(category) : 
        await SystemSettings.findByAccessLevel('admin');
    } catch (error) {
      logger.error('Error fetching system settings:', error);
      throw error;
    }
  };

  // Update system setting
  updateSystemSettingService = async (settingKey, value, updatedBy) => {
    try {
      const setting = await SystemSettings.updateSetting(settingKey, value, updatedBy);
      logger.info(`System setting updated: ${settingKey} by ${updatedBy}`);
      return setting;
    } catch (error) {
      logger.error('Error updating system setting:', error);
      throw error;
    }
  };

  // Get audit logs
  getAuditLogsService = async (filters = {}, page = 1, limit = 10) => {
    try {
      const query = {};
      if (filters.userId) query.userId = filters.userId;
      if (filters.service) query.service = filters.service;
      if (filters.actionType) query.actionType = filters.actionType;
      if (filters.dateFrom || filters.dateTo) {
        query.createdAt = {};
        if (filters.dateFrom) query.createdAt.$gte = new Date(filters.dateFrom);
        if (filters.dateTo) query.createdAt.$lte = new Date(filters.dateTo);
      }

      const skip = (page - 1) * limit;
      
      const [logs, total] = await Promise.all([
        AuditLog.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit),
        AuditLog.countDocuments(query)
      ]);

      return {
        logs,
        pagination: { page, limit, total, pages: Math.ceil(total / limit), hasNext: page * limit < total, hasPrev: page > 1 }
      };
    } catch (error) {
      logger.error('Error fetching audit logs:', error);
      throw error;
    }
  };
}

export default new AdminService();
