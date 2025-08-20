import Order from '../models/Order.js';
import Salesman from '../models/Salesman.js';
import { cacheService } from '../../../config/db.js';
import logger from '../../../shared/utils/logger.js';
import mongoose from 'mongoose';

class SalesService {
  // ==================== ORDER SERVICES ====================
  
  // Create new order with caching
  createOrderService = async (orderData, salesmanId) => {
    try {
      // Generate unique order ID
      const orderId = this.generateOrderId();
      
      // Create order with calculated fields
      const order = new Order({
        orderId,
        salesman: salesmanId,
        ...orderData,
        orderDetails: {
          ...orderData.orderDetails,
          pendingAmount: orderData.orderDetails.totalAmount - (orderData.orderDetails.advanceAmount || 0)
        },
        status: 'draft',
        lastModifiedBy: salesmanId,
        lastModifiedByModel: 'Salesman'
      });

      const savedOrder = await order.save();
      
      // Cache the order for quick access
      await cacheService.set(`order:${savedOrder._id}`, savedOrder, 3600); // 1 hour
      await cacheService.set(`order:${orderId}`, savedOrder, 3600);
      
      logger.info(`Order created successfully: ${orderId} by salesman: ${salesmanId}`);
      return savedOrder;
    } catch (error) {
      logger.error('Error creating order:', error);
      throw error;
    }
  };

  // Get orders with advanced filtering and caching
  getOrdersService = async (filters = {}, page = 1, limit = 10) => {
    try {
      const cacheKey = `orders:${JSON.stringify(filters)}:${page}:${limit}`;
      
      // Try cache first
      const cachedOrders = await cacheService.get(cacheKey);
      if (cachedOrders) {
        return cachedOrders;
      }

      const query = {};
      
      // Build dynamic query
      if (filters.status) query.status = filters.status;
      if (filters.salesman) query.salesman = filters.salesman;
      if (filters.customerName) query['customer.name'] = { $regex: filters.customerName, $options: 'i' };
      if (filters.customerPhone) query['customer.phone'] = { $regex: filters.customerPhone, $options: 'i' };
      if (filters.priority) query.priority = filters.priority;
      if (filters.source) query.source = filters.source;
      if (filters.dateFrom || filters.dateTo) {
        query.createdAt = {};
        if (filters.dateFrom) query.createdAt.$gte = new Date(filters.dateFrom);
        if (filters.dateTo) query.createdAt.$lte = new Date(filters.dateTo);
      }

      const skip = (page - 1) * limit;
      
      const [orders, total] = await Promise.all([
        Order.find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('salesman', 'firstName lastName phone email')
          .populate('items.productId', 'name category specifications'),
        Order.countDocuments(query)
      ]);

      const result = {
        orders,
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
      logger.error('Error fetching orders:', error);
      throw error;
    }
  };

  // Get order by ID with caching
  getOrderByIdService = async (orderId) => {
    try {
      // Try cache first
      const cachedOrder = await cacheService.get(`order:${orderId}`);
      if (cachedOrder) {
        return cachedOrder;
      }

      const order = await Order.findById(orderId)
        .populate('salesman', 'firstName lastName phone email')
        .populate('items.productId', 'name category specifications')
        .populate('delivery.driver', 'name phone vehicleNumber')
        .populate('manufacturing.assignedTo', 'firstName lastName specialization');

      if (order) {
        await cacheService.set(`order:${orderId}`, order, 3600);
      }

      return order;
    } catch (error) {
      logger.error(`Error fetching order ${orderId}:`, error);
      throw error;
    }
  };

  // Update order with cache invalidation
  updateOrderService = async (orderId, updateData, userId, userRole) => {
    try {
      const order = await Order.findByIdAndUpdate(
        orderId,
        {
          ...updateData,
          lastModifiedBy: userId,
          lastModifiedByModel: userRole,
          updatedAt: new Date()
        },
        { new: true, runValidators: true }
      );

      if (!order) {
        throw new Error('Order not found');
      }

      // Invalidate related caches
      await this.invalidateOrderCaches(orderId, order.orderId);
      
      logger.info(`Order updated: ${orderId} by ${userRole}: ${userId}`);
      return order;
    } catch (error) {
      logger.error(`Error updating order ${orderId}:`, error);
      throw error;
    }
  };

  // Update order status
  updateOrderStatusService = async (orderId, status, userId, userRole) => {
    try {
      const order = await Order.findByIdAndUpdate(
        orderId,
        { 
          status,
          lastModifiedBy: userId,
          lastModifiedByModel: userRole,
          updatedAt: new Date()
        },
        { new: true, runValidators: true }
      );

      if (!order) {
        throw new Error('Order not found');
      }

      // Invalidate related caches
      await this.invalidateOrderCaches(orderId, order.orderId);
      
      logger.info(`Order status updated: ${orderId} to ${status} by ${userRole}: ${userId}`);
      return order;
    } catch (error) {
      logger.error(`Error updating order status ${orderId}:`, error);
      throw error;
    }
  };

  // Add payment to order
  addPaymentService = async (orderId, paymentData, userId, userRole) => {
    try {
      const order = await Order.findById(orderId);
      if (!order) {
        throw new Error('Order not found');
      }

      // Add payment transaction
      order.payment.transactions.push({
        amount: paymentData.amount,
        method: paymentData.method,
        transactionId: paymentData.transactionId,
        utrNumber: paymentData.utrNumber,
        status: 'completed',
        timestamp: new Date(),
        notes: paymentData.notes
      });

      // Update payment status
      const totalPaid = order.payment.transactions.reduce((sum, t) => sum + t.amount, 0);
      if (totalPaid >= order.orderDetails.totalAmount) {
        order.payment.status = 'completed';
      } else if (totalPaid > 0) {
        order.payment.status = 'partial';
      }

      // Update pending amount
      order.orderDetails.pendingAmount = Math.max(0, order.orderDetails.totalAmount - totalPaid);

      order.lastModifiedBy = userId;
      order.lastModifiedByModel = userRole;
      order.updatedAt = new Date();

      const savedOrder = await order.save();

      // Invalidate caches
      await this.invalidateOrderCaches(orderId, order.orderId);
      
      logger.info(`Payment added to order: ${orderId}, amount: ${paymentData.amount}`);
      return savedOrder;
    } catch (error) {
      logger.error(`Error adding payment to order ${orderId}:`, error);
      throw error;
    }
  };

  // ==================== SALESMAN SERVICES ====================
  
  // Create new salesman
  createSalesmanService = async (salesmanData) => {
    try {
      const salesman = new Salesman(salesmanData);
      const savedSalesman = await salesman.save();
      
      // Cache the salesman
      await cacheService.set(`salesman:${savedSalesman._id}`, savedSalesman, 3600);
      
      logger.info(`Salesman created successfully: ${savedSalesman.employeeId}`);
      return savedSalesman;
    } catch (error) {
      logger.error('Error creating salesman:', error);
      throw error;
    }
  };

  // Get salesmen with filtering and caching
  getSalesmenService = async (filters = {}, page = 1, limit = 10) => {
    try {
      const cacheKey = `salesmen:${JSON.stringify(filters)}:${page}:${limit}`;
      
      // Try cache first
      const cachedSalesmen = await cacheService.get(cacheKey);
      if (cachedSalesmen) {
        return cachedSalesmen;
      }

      const query = { isActive: true };
      
      // Build dynamic query
      if (filters.status) query.status = filters.status;
      if (filters.territory) query.assignedTerritory = filters.territory;
      if (filters.manager) query.manager = filters.manager;
      if (filters.search) {
        query.$or = [
          { firstName: { $regex: filters.search, $options: 'i' } },
          { lastName: { $regex: filters.search, $options: 'i' } },
          { employeeId: { $regex: filters.search, $options: 'i' } },
          { email: { $regex: filters.search, $options: 'i' } }
        ];
      }

      const skip = (page - 1) * limit;
      
      const [salesmen, total] = await Promise.all([
        Salesman.find(query)
          .select('-password')
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('manager', 'firstName lastName email'),
        Salesman.countDocuments(query)
      ]);

      const result = {
        salesmen,
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
      logger.error('Error fetching salesmen:', error);
      throw error;
    }
  };

  // Get salesman by ID
  getSalesmanByIdService = async (salesmanId) => {
    try {
      // Try cache first
      const cachedSalesman = await cacheService.get(`salesman:${salesmanId}`);
      if (cachedSalesman) {
        return cachedSalesman;
      }

      const salesman = await Salesman.findById(salesmanId)
        .select('-password')
        .populate('manager', 'firstName lastName email');

      if (salesman) {
        await cacheService.set(`salesman:${salesmanId}`, salesman, 3600);
      }

      return salesman;
    } catch (error) {
      logger.error(`Error fetching salesman ${salesmanId}:`, error);
      throw error;
    }
  };

  // Get salesman orders
  getSalesmanOrdersService = async (salesmanId, page = 1, limit = 10, status = null) => {
    try {
      const cacheKey = `salesman_orders:${salesmanId}:${page}:${limit}:${status || 'all'}`;
      
      // Try cache first
      const cachedOrders = await cacheService.get(cacheKey);
      if (cachedOrders) {
        return cachedOrders;
      }

      const query = { salesman: salesmanId };
      if (status && status !== 'all') {
        query.status = status;
      }

      const skip = (page - 1) * limit;
      
      const [orders, total] = await Promise.all([
        Order.find(query)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .populate('items.productId', 'name category'),
        Order.countDocuments(query)
      ]);

      const result = {
        orders,
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
      logger.error(`Error fetching orders for salesman ${salesmanId}:`, error);
      throw error;
    }
  };

  // Get salesman performance
  getSalesmanPerformanceService = async (salesmanId, period = 'monthly') => {
    try {
      const cacheKey = `salesman_performance:${salesmanId}:${period}`;
      
      // Try cache first
      const cachedPerformance = await cacheService.get(cacheKey);
      if (cachedPerformance) {
        return cachedPerformance;
      }

      const startDate = this.getPeriodStartDate(period);
      
      const performance = await Order.aggregate([
        { $match: { salesman: new mongoose.Types.ObjectId(salesmanId), createdAt: { $gte: startDate } } },
        {
          $group: {
            _id: null,
            totalOrders: { $sum: 1 },
            totalAmount: { $sum: '$orderDetails.totalAmount' },
            deliveredOrders: {
              $sum: { $cond: [{ $eq: ['$status', 'delivered'] }, 1, 0] }
            },
            pendingOrders: {
              $sum: { $cond: [{ $in: ['$status', ['draft', 'confirmed', 'processing']] }, 1, 0] }
            },
            averageOrderValue: { $avg: '$orderDetails.totalAmount' }
          }
        }
      ]);

      const result = performance[0] || {
        totalOrders: 0,
        totalAmount: 0,
        deliveredOrders: 0,
        pendingOrders: 0,
        averageOrderValue: 0
      };

      // Cache for 1 hour
      await cacheService.set(cacheKey, result, 3600);
      
      return result;
    } catch (error) {
      logger.error(`Error fetching performance for salesman ${salesmanId}:`, error);
      throw error;
    }
  };

  // ==================== REPORT SERVICES ====================
  
  // Generate sales report
  generateSalesReport = async (dateRange, filters = {}) => {
    try {
      const cacheKey = `sales_report:${JSON.stringify(dateRange)}:${JSON.stringify(filters)}`;
      
      // Try cache first
      const cachedReport = await cacheService.get(cacheKey);
      if (cachedReport) {
        return cachedReport;
      }

      const { startDate, endDate } = dateRange;
      const query = {
        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) }
      };

      // Apply additional filters
      if (filters.salesman) query.salesman = filters.salesman;
      if (filters.status) query.status = filters.status;
      if (filters.source) query.source = filters.source;

      const report = await Order.aggregate([
        { $match: query },
        {
          $group: {
            _id: {
              date: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
              status: '$status',
              source: '$source'
            },
            count: { $sum: 1 },
            totalAmount: { $sum: '$orderDetails.totalAmount' },
            advanceAmount: { $sum: '$orderDetails.advanceAmount' },
            pendingAmount: { $sum: '$orderDetails.pendingAmount' }
          }
        },
        { $sort: { '_id.date': 1 } }
      ]);

      // Cache for 1 hour
      await cacheService.set(cacheKey, report, 3600);
      
      return report;
    } catch (error) {
      logger.error('Error generating sales report:', error);
      throw error;
    }
  };

  // Generate performance report
  generatePerformanceReport = async (period, filters = {}) => {
    try {
      const cacheKey = `performance_report:${period}:${JSON.stringify(filters)}`;
      
      // Try cache first
      const cachedReport = await cacheService.get(cacheKey);
      if (cachedReport) {
        return cachedReport;
      }

      const startDate = this.getPeriodStartDate(period);
      
      const report = await Order.aggregate([
        { $match: { createdAt: { $gte: startDate } } },
        {
          $lookup: {
            from: 'salesmen',
            localField: 'salesman',
            foreignField: '_id',
            as: 'salesmanInfo'
          }
        },
        { $unwind: '$salesmanInfo' },
        {
          $group: {
            _id: '$salesman',
            salesmanName: { $first: '$salesmanInfo.fullName' },
            totalOrders: { $sum: 1 },
            totalAmount: { $sum: '$orderDetails.totalAmount' },
            deliveredOrders: {
              $sum: { $cond: [{ $eq: ['$status', 'delivered'] }, 1, 0] }
            },
            averageOrderValue: { $avg: '$orderDetails.totalAmount' }
          }
        },
        { $sort: { totalAmount: -1 } }
      ]);

      // Cache for 1 hour
      await cacheService.set(cacheKey, report, 3600);
      
      return report;
    } catch (error) {
      logger.error('Error generating performance report:', error);
      throw error;
    }
  };

  // Get dashboard data
  getDashboardData = async (salesmanId = null) => {
    try {
      const cacheKey = salesmanId ? `dashboard:${salesmanId}` : 'dashboard:all';
      
      // Try cache first
      const cachedDashboard = await cacheService.get(cacheKey);
      if (cachedDashboard) {
        return cachedDashboard;
      }

      const today = new Date();
      const startOfDay = new Date(today.setHours(0, 0, 0, 0));
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

      let matchQuery = {};
      if (salesmanId) {
        matchQuery.salesman = new mongoose.Types.ObjectId(salesmanId);
      }

      const [todayStats, monthStats, totalStats] = await Promise.all([
        Order.aggregate([
          { $match: { ...matchQuery, createdAt: { $gte: startOfDay } } },
          {
            $group: {
              _id: null,
              orders: { $sum: 1 },
              amount: { $sum: '$orderDetails.totalAmount' }
            }
          }
        ]),
        Order.aggregate([
          { $match: { ...matchQuery, createdAt: { $gte: startOfMonth } } },
          {
            $group: {
              _id: null,
              orders: { $sum: 1 },
              amount: { $sum: '$orderDetails.totalAmount' }
            }
          }
        ]),
        Order.aggregate([
          { $match: matchQuery },
          {
            $group: {
              _id: null,
              totalOrders: { $sum: 1 },
              totalAmount: { $sum: '$orderDetails.totalAmount' },
              pendingAmount: { $sum: '$orderDetails.pendingAmount' }
            }
          }
        ])
      ]);

      const dashboard = {
        today: todayStats[0] || { orders: 0, amount: 0 },
        month: monthStats[0] || { orders: 0, amount: 0 },
        total: totalStats[0] || { totalOrders: 0, totalAmount: 0, pendingAmount: 0 }
      };

      // Cache for 15 minutes
      await cacheService.set(cacheKey, dashboard, 900);
      
      return dashboard;
    } catch (error) {
      logger.error('Error fetching dashboard data:', error);
      throw error;
    }
  };

  // ==================== UTILITY METHODS ====================
  
  // Generate unique order ID
  generateOrderId = () => {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `SF${timestamp}${random}`;
  };

  // Get period start date
  getPeriodStartDate = (period) => {
    const now = new Date();
    switch (period) {
      case 'daily':
        return new Date(now.setHours(0, 0, 0, 0));
      case 'weekly':
        return new Date(now.setDate(now.getDate() - 7));
      case 'monthly':
        return new Date(now.getFullYear(), now.getMonth(), 1);
      case 'quarterly':
        return new Date(now.getFullYear(), Math.floor(now.getMonth() / 3) * 3, 1);
      case 'yearly':
        return new Date(now.getFullYear(), 0, 1);
      default:
        return new Date(now.getFullYear(), now.getMonth(), 1);
    }
  };

  // Invalidate order-related caches
  invalidateOrderCaches = async (orderId, orderIdString) => {
    try {
      const cacheKeys = [
        `order:${orderId}`,
        `order:${orderIdString}`,
        'dashboard:all'
      ];
      
      // Invalidate all related caches
      await Promise.all(
        cacheKeys.map(key => cacheService.del(key))
      );
      
      logger.info(`Order caches invalidated for: ${orderId}`);
    } catch (error) {
      logger.error('Error invalidating order caches:', error);
    }
  };

  // ==================== WHATSAPP SERVICES ====================
  
  // Send WhatsApp message (placeholder)
  sendWhatsAppMessage = async (orderId, message) => {
    try {
      // TODO: Integrate with WhatsApp Business API
      // Example: Twilio, MessageBird, or direct WhatsApp Business API
      logger.info(`WhatsApp message would be sent for order ${orderId}: ${message}`);
      return true;
    } catch (error) {
      logger.error(`Error sending WhatsApp message for order ${orderId}:`, error);
      return false;
    }
  };
}

export default new SalesService();