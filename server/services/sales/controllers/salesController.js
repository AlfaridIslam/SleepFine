import salesService from '../services/salesService.js';
import asyncHandler from '../../../shared/utils/asyncHandler.js';
import ApiResponse from '../../../shared/utils/apiResponse.js';
import logger from '../../../shared/utils/logger.js';

// ==================== ORDER CONTROLLERS ====================

// @desc    Create new order
// @route   POST /api/v1/sales/orders
// @access  Private (Salesman)
export const createOrder = asyncHandler(async (req, res) => {
  const order = await salesService.createOrderService(req.body, req.user.id);
  
  // TODO: WhatsApp integration - notify logistics team
  // await whatsAppService.notifyLogistics(order.orderId, order.customer.name);
  
  logger.info(`Order created successfully: ${order.orderId} by salesman: ${req.user.id}`);
  
  return new ApiResponse(res)
    .status(201)
    .data(order)
    .message('Order created successfully')
    .send();
});

// @desc    Get all orders (with filters)
// @route   GET /api/v1/sales/orders
// @access  Private
export const getOrders = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, ...filters } = req.query;
  
  const result = await salesService.getOrdersService(
    filters,
    parseInt(page),
    parseInt(limit)
  );

  return new ApiResponse(res)
    .data(result)
    .send();
});

// @desc    Get order by ID
// @route   GET /api/v1/sales/orders/:orderId
// @access  Private
export const getOrderById = asyncHandler(async (req, res) => {
  const order = await salesService.getOrderByIdService(req.params.orderId);
  
  if (!order) {
    return new ApiResponse(res)
      .status(404)
      .error('Order not found')
      .send();
  }

  return new ApiResponse(res)
    .data(order)
    .send();
});

// @desc    Update order
// @route   PUT /api/v1/sales/orders/:orderId
// @access  Private
export const updateOrder = asyncHandler(async (req, res) => {
  const order = await salesService.updateOrderService(
    req.params.orderId,
    req.body,
    req.user.id,
    req.user.role
  );

  return new ApiResponse(res)
    .data(order)
    .message('Order updated successfully')
    .send();
});

// @desc    Update order status
// @route   PATCH /api/v1/sales/orders/:orderId/status
// @access  Private
export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  
  const order = await salesService.updateOrderStatusService(
    req.params.orderId,
    status,
    req.user.id,
    req.user.role
  );

  return new ApiResponse(res)
    .data(order)
    .message('Order status updated successfully')
    .send();
});

// @desc    Add payment transaction
// @route   POST /api/v1/sales/orders/:orderId/payment
// @access  Private
export const addPayment = asyncHandler(async (req, res) => {
  const order = await salesService.addPaymentService(
    req.params.orderId,
    req.body,
    req.user.id,
    req.user.role
  );

  return new ApiResponse(res)
    .data(order)
    .message('Payment added successfully')
    .send();
});

// ==================== SALESMAN CONTROLLERS ====================

// @desc    Create new salesman
// @route   POST /api/v1/sales/salesmen
// @access  Private (Admin)
export const createSalesman = asyncHandler(async (req, res) => {
  const salesman = await salesService.createSalesmanService(req.body);
  
  return new ApiResponse(res)
    .status(201)
    .data(salesman)
    .message('Salesman created successfully')
    .send();
});

// @desc    Get all salesmen
// @route   GET /api/v1/sales/salesmen
// @access  Private
export const getSalesmen = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, ...filters } = req.query;
  
  const result = await salesService.getSalesmenService(
    filters,
    parseInt(page),
    parseInt(limit)
  );

  return new ApiResponse(res)
    .data(result)
    .send();
});

// @desc    Get salesman by ID
// @route   GET /api/v1/sales/salesmen/:salesmanId
// @access  Private
export const getSalesmanById = asyncHandler(async (req, res) => {
  const salesman = await salesService.getSalesmanByIdService(req.params.salesmanId);
  
  if (!salesman) {
    return new ApiResponse(res)
      .status(404)
      .error('Salesman not found')
      .send();
  }

  return new ApiResponse(res)
    .data(salesman)
    .send();
});

// @desc    Get orders by salesman
// @route   GET /api/v1/sales/salesmen/:salesmanId/orders
// @access  Private
export const getSalesmanOrders = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, status } = req.query;
  
  const result = await salesService.getSalesmanOrdersService(
    req.params.salesmanId,
    parseInt(page),
    parseInt(limit),
    status
  );

  return new ApiResponse(res)
    .data(result)
    .send();
});

// @desc    Get salesman performance
// @route   GET /api/v1/sales/salesmen/:salesmanId/performance
// @access  Private
export const getSalesmanPerformance = asyncHandler(async (req, res) => {
  const { period = 'monthly' } = req.query;
  
  const performance = await salesService.getSalesmanPerformanceService(
    req.params.salesmanId,
    period
  );

  return new ApiResponse(res)
    .data(performance)
    .send();
});

// ==================== REPORT CONTROLLERS ====================

// @desc    Get sales reports
// @route   GET /api/v1/sales/reports/sales
// @access  Private
export const getSalesReport = asyncHandler(async (req, res) => {
  const { startDate, endDate, ...filters } = req.query;
  
  if (!startDate || !endDate) {
    return new ApiResponse(res)
      .status(400)
      .error('Start date and end date are required')
      .send();
  }

  const report = await salesService.generateSalesReport(
    { startDate, endDate },
    filters
  );

  return new ApiResponse(res)
    .data(report)
    .send();
});

// @desc    Get performance reports
// @route   GET /api/v1/sales/reports/performance
// @access  Private
export const getPerformanceReport = asyncHandler(async (req, res) => {
  const { period = 'monthly', ...filters } = req.query;
  
  const report = await salesService.generatePerformanceReport(period, filters);

  return new ApiResponse(res)
    .data(report)
    .send();
});

// @desc    Get dashboard data
// @route   GET /api/v1/sales/dashboard
// @access  Private
export const getDashboardData = asyncHandler(async (req, res) => {
  const salesmanId = req.query.salesmanId || null;
  
  const dashboard = await salesService.getDashboardData(salesmanId);

  return new ApiResponse(res)
    .data(dashboard)
    .send();
});

// ==================== WHATSAPP CONTROLLERS ====================

// @desc    Send order to WhatsApp group
// @route   POST /api/v1/sales/orders/:orderId/whatsapp
// @access  Private
export const sendToWhatsApp = asyncHandler(async (req, res) => {
  const order = await salesService.getOrderByIdService(req.params.orderId);
  
  if (!order) {
    return new ApiResponse(res)
      .status(404)
      .error('Order not found')
      .send();
  }

  const message = `🆕 New Order: ${order.orderId}
Customer: ${order.customer.name}
Amount: ₹${order.orderDetails.totalAmount}
Items: ${order.items.length} products`;

  const success = await salesService.sendWhatsAppMessage(order.orderId, message);

  if (success) {
    return new ApiResponse(res)
      .message('Order sent to WhatsApp successfully')
      .send();
  } else {
    return new ApiResponse(res)
      .status(500)
      .error('Failed to send order to WhatsApp')
      .send();
  }
});

// @desc    Get order notifications
// @route   GET /api/v1/sales/orders/:orderId/notifications
// @access  Private
export const getOrderNotifications = asyncHandler(async (req, res) => {
  // TODO: Implement notification retrieval from notifications service
  const notifications = []; // Placeholder
  
  return new ApiResponse(res)
    .data(notifications)
    .message('Notifications retrieved successfully')
    .send();
});