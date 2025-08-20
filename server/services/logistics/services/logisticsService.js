import Gatepass from '../models/Gatepass.js';
import Logistics from '../models/Logistics.js';
import Driver from '../models/Driver.js';
import Order from '../../sales/models/Order.js';
import { cacheService } from '../../../config/db.js';
import logger from '../../../shared/utils/logger.js';
import mongoose from 'mongoose';

class LogisticsService {
  // ==================== GATEPASS SERVICES ====================
  
  // Create new gatepass with caching
  createGatepassService = async (gatepassData, issuerId) => {
    try {
      // Generate unique gatepass ID
      const gatepassId = this.generateGatepassId();
      
      // Create gatepass with calculated fields
      const gatepass = new Gatepass({
        gatepassId,
        issuedBy: issuerId,
        ...gatepassData,
        paymentDetails: {
          ...gatepassData.paymentDetails,
          pendingAmount: gatepassData.paymentDetails.totalAmount - (gatepassData.paymentDetails.advanceAmount || 0)
        },
        lastModifiedBy: issuerId,
        lastModifiedByModel: 'Logistics'
      });

      const savedGatepass = await gatepass.save();
      
      // Update related order status
      if (savedGatepass.order) {
        await Order.findByIdAndUpdate(
          savedGatepass.order,
          {
            'delivery.gatepass.gatepassId': gatepassId,
            'delivery.gatepass.issuedAt': savedGatepass.issuedAt,
            'delivery.gatepass.issuedBy': issuerId,
            'manufacturing.status': 'packaged',
            status: 'ready',
            lastModifiedBy: issuerId,
            lastModifiedByModel: 'Logistics'
          }
        );
      }
      
      // Cache the gatepass for quick access
      await cacheService.set(`gatepass:${savedGatepass._id}`, savedGatepass, 3600);
      await cacheService.set(`gatepass:${gatepassId}`, savedGatepass, 3600);
      
      logger.info(`Gatepass created successfully: ${gatepassId} by logistics: ${issuerId}`);
      return savedGatepass;
    } catch (error) {
      logger.error('Error creating gatepass:', error);
      throw error;
    }
  };

  // Get gatepasses with advanced filtering and caching
  getGatepassesService = async (filters = {}, page = 1, limit = 10) => {
    try {
      const cacheKey = `gatepasses:${JSON.stringify(filters)}:${page}:${limit}`;
      
      // Try cache first
      const cachedGatepasses = await cacheService.get(cacheKey);
      if (cachedGatepasses) {
        return cachedGatepasses;
      }

      const query = {};
      
      // Build dynamic query
      if (filters.status) query.status = filters.status;
      if (filters.issuedBy) query.issuedBy = filters.issuedBy;
      if (filters.orderId) query.orderId = { $regex: filters.orderId, $options: 'i' };
      if (filters.gatepassId) query.gatepassId = { $regex: filters.gatepassId, $options: 'i' };
      if (filters.deliveryStatus) query['deliveryDetails.deliveryStatus'] = filters.deliveryStatus;
      if (filters.paymentStatus) query['paymentDetails.paymentStatus'] = filters.paymentStatus;
      if (filters.qualityStatus) query['qualityCheck.qualityStatus'] = filters.qualityStatus;
      if (filters.driver) query['deliveryDetails.driver'] = filters.driver;
      if (filters.dateFrom || filters.dateTo) {
        query.issuedAt = {};
        if (filters.dateFrom) query.issuedAt.$gte = new Date(filters.dateFrom);
        if (filters.dateTo) query.issuedAt.$lte = new Date(filters.dateTo);
      }

      const skip = (page - 1) * limit;
      
      const [gatepasses, total] = await Promise.all([
        Gatepass.find(query)
          .sort({ issuedAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('order', 'orderId customer.name items')
          .populate('issuedBy', 'firstName lastName specialization')
          .populate('deliveryDetails.driver', 'firstName lastName phone vehicle')
          .populate('qualityCheck.checkedBy', 'firstName lastName')
          .populate('packaging.packagedBy', 'firstName lastName'),
        Gatepass.countDocuments(query)
      ]);

      const result = {
        gatepasses,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
          hasNext: page * limit < total,
          hasPrev: page > 1
        }
      };

      // Cache for 15 minutes
      await cacheService.set(cacheKey, result, 900);
      
      return result;
    } catch (error) {
      logger.error('Error fetching gatepasses:', error);
      throw error;
    }
  };

  // Get gatepass by ID with caching
  getGatepassByIdService = async (gatepassId) => {
    try {
      // Try cache first
      const cachedGatepass = await cacheService.get(`gatepass:${gatepassId}`);
      if (cachedGatepass) {
        return cachedGatepass;
      }

      const gatepass = await Gatepass.findById(gatepassId)
        .populate('order', 'orderId customer items orderDetails')
        .populate('issuedBy', 'firstName lastName email phone specialization')
        .populate('deliveryDetails.driver', 'firstName lastName phone vehicle currentLocation')
        .populate('qualityCheck.checkedBy', 'firstName lastName')
        .populate('packaging.packagedBy', 'firstName lastName');

      if (gatepass) {
        await cacheService.set(`gatepass:${gatepassId}`, gatepass, 3600);
      }

      return gatepass;
    } catch (error) {
      logger.error(`Error fetching gatepass ${gatepassId}:`, error);
      throw error;
    }
  };

  // Generate unique gatepass ID
  generateGatepassId = () => {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `GP${timestamp}${random}`;
  };

  // Update gatepass status
  updateGatepassStatusService = async (gatepassId, status, userId, userRole) => {
    try {
      const gatepass = await Gatepass.findByIdAndUpdate(
        gatepassId,
        { 
          status,
          lastModifiedBy: userId,
          lastModifiedByModel: userRole,
          updatedAt: new Date()
        },
        { new: true, runValidators: true }
      );

      if (!gatepass) {
        throw new Error('Gatepass not found');
      }

      // Update related order status if gatepass is used
      if (status === 'used' && gatepass.order) {
        await Order.findByIdAndUpdate(
          gatepass.order,
          {
            'delivery.status': 'out_for_delivery',
            status: 'out_for_delivery',
            lastModifiedBy: userId,
            lastModifiedByModel: userRole
          }
        );
      }

      // Invalidate related caches
      await this.invalidateGatepassCaches(gatepassId, gatepass.gatepassId);
      
      logger.info(`Gatepass status updated: ${gatepassId} to ${status} by ${userRole}: ${userId}`);
      return gatepass;
    } catch (error) {
      logger.error(`Error updating gatepass status ${gatepassId}:`, error);
      throw error;
    }
  };

  // Update quality check
  updateQualityCheckService = async (gatepassId, qualityData, userId) => {
    try {
      const gatepass = await Gatepass.findByIdAndUpdate(
        gatepassId,
        {
          'qualityCheck.isChecked': true,
          'qualityCheck.checkedBy': userId,
          'qualityCheck.checkedAt': new Date(),
          'qualityCheck.qualityStatus': qualityData.qualityStatus,
          'qualityCheck.qualityNotes': qualityData.qualityNotes,
          lastModifiedBy: userId,
          lastModifiedByModel: 'Logistics',
          updatedAt: new Date()
        },
        { new: true, runValidators: true }
      );

      if (!gatepass) {
        throw new Error('Gatepass not found');
      }

      // Update related order manufacturing status
      if (gatepass.order && qualityData.qualityStatus === 'passed') {
        await Order.findByIdAndUpdate(
          gatepass.order,
          {
            'manufacturing.status': 'quality_check',
            lastModifiedBy: userId,
            lastModifiedByModel: 'Logistics'
          }
        );
      }

      // Invalidate caches
      await this.invalidateGatepassCaches(gatepassId, gatepass.gatepassId);
      
      logger.info(`Quality check updated: ${gatepassId} to ${qualityData.qualityStatus}`);
      return gatepass;
    } catch (error) {
      logger.error(`Error updating quality check ${gatepassId}:`, error);
      throw error;
    }
  };

  // ==================== DRIVER SERVICES ====================
  
  // Get drivers with filtering and caching
  getDriversService = async (filters = {}, page = 1, limit = 10) => {
    try {
      const cacheKey = `drivers:${JSON.stringify(filters)}:${page}:${limit}`;
      
      // Try cache first
      const cachedDrivers = await cacheService.get(cacheKey);
      if (cachedDrivers) {
        return cachedDrivers;
      }

      const query = { isActive: true };
      
      // Build dynamic query
      if (filters.status) query.status = filters.status;
      if (filters.currentStatus) query.currentStatus = filters.currentStatus;
      if (filters.zone) query.assignedZone = filters.zone;
      if (filters.warehouse) query.assignedWarehouse = filters.warehouse;
      if (filters.vehicleType) query['vehicle.type'] = filters.vehicleType;
      if (filters.search) {
        query.$or = [
          { firstName: { $regex: filters.search, $options: 'i' } },
          { lastName: { $regex: filters.search, $options: 'i' } },
          { employeeId: { $regex: filters.search, $options: 'i' } },
          { 'vehicle.number': { $regex: filters.search, $options: 'i' } }
        ];
      }

      const skip = (page - 1) * limit;
      
      const [drivers, total] = await Promise.all([
        Driver.find(query)
          .select('-password')
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('manager', 'firstName lastName email'),
        Driver.countDocuments(query)
      ]);

      const result = {
        drivers,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
          hasNext: page * limit < total,
          hasPrev: page > 1
        }
      };

      // Cache for 30 minutes
      await cacheService.set(cacheKey, result, 1800);
      
      return result;
    } catch (error) {
      logger.error('Error fetching drivers:', error);
      throw error;
    }
  };

  // Get driver by ID
  getDriverByIdService = async (driverId) => {
    try {
      // Try cache first
      const cachedDriver = await cacheService.get(`driver:${driverId}`);
      if (cachedDriver) {
        return cachedDriver;
      }

      const driver = await Driver.findById(driverId)
        .select('-password')
        .populate('manager', 'firstName lastName email');

      if (driver) {
        await cacheService.set(`driver:${driverId}`, driver, 3600);
      }

      return driver;
    } catch (error) {
      logger.error(`Error fetching driver ${driverId}:`, error);
      throw error;
    }
  };

  // Search available drivers for assignment
  searchAvailableDriversService = async (filters = {}) => {
    try {
      const query = {
        isActive: true,
        status: 'active',
        currentStatus: 'available'
      };

      if (filters.zone) query.assignedZone = filters.zone;
      if (filters.warehouse) query.assignedWarehouse = filters.warehouse;
      if (filters.vehicleType) query['vehicle.type'] = filters.vehicleType;

      const drivers = await Driver.find(query)
        .select('firstName lastName phone vehicle currentLocation performance')
        .sort({ 'performance.averageRating': -1 })
        .limit(10);

      return drivers;
    } catch (error) {
      logger.error('Error searching available drivers:', error);
      throw error;
    }
  };

  // ==================== REPORTING SERVICES ====================
  
  // Get logistics dashboard data
  getLogisticsDashboard = async (personnelId = null) => {
    try {
      const cacheKey = personnelId ? `logistics_dashboard:${personnelId}` : 'logistics_dashboard:all';
      
      // Try cache first
      const cachedDashboard = await cacheService.get(cacheKey);
      if (cachedDashboard) {
        return cachedDashboard;
      }

      const today = new Date();
      const startOfDay = new Date(today.setHours(0, 0, 0, 0));
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

      let matchQuery = {};
      if (personnelId) {
        matchQuery.issuedBy = new mongoose.Types.ObjectId(personnelId);
      }

      const [gatepassStats, driverStats, todayStats, monthStats] = await Promise.all([
        Gatepass.getStats(),
        Driver.getStats(),
        Gatepass.aggregate([
          { $match: { ...matchQuery, issuedAt: { $gte: startOfDay } } },
          {
            $group: {
              _id: null,
              gatepasses: { $sum: 1 },
              totalAmount: { $sum: '$paymentDetails.totalAmount' }
            }
          }
        ]),
        Gatepass.aggregate([
          { $match: { ...matchQuery, issuedAt: { $gte: startOfMonth } } },
          {
            $group: {
              _id: null,
              gatepasses: { $sum: 1 },
              totalAmount: { $sum: '$paymentDetails.totalAmount' }
            }
          }
        ])
      ]);

      const dashboard = {
        gatepassStats,
        driverStats,
        today: todayStats[0] || { gatepasses: 0, totalAmount: 0 },
        month: monthStats[0] || { gatepasses: 0, totalAmount: 0 }
      };

      // Cache for 15 minutes
      await cacheService.set(cacheKey, dashboard, 900);
      
      return dashboard;
    } catch (error) {
      logger.error('Error fetching logistics dashboard:', error);
      throw error;
    }
  };

  // Invalidate gatepass-related caches
  invalidateGatepassCaches = async (gatepassId, gatepassIdString) => {
    try {
      const cacheKeys = [
        `gatepass:${gatepassId}`,
        `gatepass:${gatepassIdString}`,
        'logistics_dashboard:all'
      ];
      
      // Invalidate all related caches
      await Promise.all(
        cacheKeys.map(key => cacheService.del(key))
      );
      
      logger.info(`Gatepass caches invalidated for: ${gatepassId}`);
    } catch (error) {
      logger.error('Error invalidating gatepass caches:', error);
    }
  };
}

export default new LogisticsService();