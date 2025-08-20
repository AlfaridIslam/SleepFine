import express from 'express';
import { authenticate, authorize, requirePermission } from '../../../shared/middlewares/auth.js';
import { validateRequest, businessSchemas } from '../../../shared/middlewares/validateRequest.js';
import asyncHandler from '../../../shared/utils/asyncHandler.js';
import * as salesController from '../controllers/salesController.js';

const router = express.Router();

// ==================== HEALTH CHECK ====================
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Sales Service is running',
    timestamp: new Date().toISOString(),
    service: 'sales',
    version: '1.0.0'
  });
});

// ==================== ORDER ROUTES ====================

// Create new order
router.post('/orders',
  authenticate,
  authorize(['salesman', 'admin']),
  requirePermission('create_order'),
  validateRequest(businessSchemas.createOrder),
  asyncHandler(salesController.createOrder)
);

// Get all orders (with filters)
router.get('/orders',
  authenticate,
  authorize(['salesman', 'admin', 'logistics', 'accounts']),
  requirePermission('view_order'),
  validateRequest(businessSchemas.getOrders, 'query'),
  asyncHandler(salesController.getOrders)
);

// Get order by ID
router.get('/orders/:orderId',
  authenticate,
  authorize(['salesman', 'admin', 'logistics', 'accounts']),
  requirePermission('view_order'),
  validateRequest(businessSchemas.getOrderById, 'params'),
  asyncHandler(salesController.getOrderById)
);

// Update order
router.put('/orders/:orderId',
  authenticate,
  authorize(['salesman', 'admin']),
  requirePermission('update_order'),
  validateRequest(businessSchemas.updateOrder),
  asyncHandler(salesController.updateOrder)
);

// Update order status
router.patch('/orders/:orderId/status',
  authenticate,
  authorize(['salesman', 'admin', 'logistics']),
  requirePermission('update_order'),
  validateRequest(businessSchemas.updateOrderStatus),
  asyncHandler(salesController.updateOrderStatus)
);

// Add payment transaction
router.post('/orders/:orderId/payment',
  authenticate,
  authorize(['salesman', 'admin', 'driver', 'accounts']),
  requirePermission('update_payment'),
  validateRequest(businessSchemas.addPayment),
  asyncHandler(salesController.addPayment)
);

// Send order to WhatsApp group
router.post('/orders/:orderId/whatsapp',
  authenticate,
  authorize(['salesman', 'admin']),
  requirePermission('send_notifications'),
  validateRequest(businessSchemas.sendToWhatsApp, 'params'),
  asyncHandler(salesController.sendToWhatsApp)
);

// Get order notifications
router.get('/orders/:orderId/notifications',
  authenticate,
  authorize(['salesman', 'admin', 'logistics', 'accounts']),
  requirePermission('view_order'),
  validateRequest(businessSchemas.getOrderNotifications, 'params'),
  asyncHandler(salesController.getOrderNotifications)
);

// ==================== SALESMAN ROUTES ====================

// Create new salesman
router.post('/salesmen',
  authenticate,
  authorize(['admin']),
  requirePermission('create_user'),
  validateRequest(businessSchemas.createSalesman),
  asyncHandler(salesController.createSalesman)
);

// Get all salesmen
router.get('/salesmen',
  authenticate,
  authorize(['admin', 'salesman']),
  requirePermission('view_user'),
  asyncHandler(salesController.getSalesmen)
);

// Get salesman by ID
router.get('/salesmen/:salesmanId',
  authenticate,
  authorize(['admin', 'salesman']),
  requirePermission('view_user'),
  validateRequest(businessSchemas.getSalesmanById, 'params'),
  asyncHandler(salesController.getSalesmanById)
);

// Get orders by salesman
router.get('/salesmen/:salesmanId/orders',
  authenticate,
  authorize(['admin', 'salesman']),
  requirePermission('view_order'),
  validateRequest(businessSchemas.getSalesmanOrders, 'params'),
  asyncHandler(salesController.getSalesmanOrders)
);

// Get salesman performance
router.get('/salesmen/:salesmanId/performance',
  authenticate,
  authorize(['admin', 'salesman']),
  requirePermission('view_sales_reports'),
  validateRequest(businessSchemas.getSalesmanPerformance, 'params'),
  asyncHandler(salesController.getSalesmanPerformance)
);

// ==================== REPORT ROUTES ====================

// Get sales reports
router.get('/reports/sales',
  authenticate,
  authorize(['admin', 'salesman']),
  requirePermission('view_sales_reports'),
  validateRequest(businessSchemas.getSalesReport, 'query'),
  asyncHandler(salesController.getSalesReport)
);

// Get performance reports
router.get('/reports/performance',
  authenticate,
  authorize(['admin']),
  requirePermission('view_sales_reports'),
  validateRequest(businessSchemas.getPerformanceReport, 'query'),
  asyncHandler(salesController.getPerformanceReport)
);

// Get sales dashboard data
router.get('/dashboard',
  authenticate,
  authorize(['admin', 'salesman']),
  requirePermission('view_sales_reports'),
  asyncHandler(salesController.getDashboardData)
);

// ==================== PROFILE & UTILITY ROUTES ====================

// Get current user profile
router.get('/profile',
  authenticate,
  authorize(['salesman']),
  asyncHandler(async (req, res) => {
    const salesman = await salesController.getSalesmanById({
      params: { salesmanId: req.user.id }
    }, res);
  })
);

// Get current user's orders
router.get('/my-orders',
  authenticate,
  authorize(['salesman']),
  asyncHandler(async (req, res) => {
    const orders = await salesController.getSalesmanOrders({
      params: { salesmanId: req.user.id },
      query: req.query
    }, res);
  })
);

// Get current user's performance
router.get('/my-performance',
  authenticate,
  authorize(['salesman']),
  asyncHandler(async (req, res) => {
    const performance = await salesController.getSalesmanPerformance({
      params: { salesmanId: req.user.id },
      query: req.query
    }, res);
  })
);

// Get products catalog (placeholder)
router.get('/products',
  authenticate,
  authorize(['salesman', 'admin']),
  asyncHandler(async (req, res) => {
    // TODO: Implement product catalog retrieval
    res.json({
      success: true,
      message: 'Product catalog endpoint - to be implemented',
      data: []
    });
  })
);

// Get product by ID (placeholder)
router.get('/products/:productId',
  authenticate,
  authorize(['salesman', 'admin']),
  asyncHandler(async (req, res) => {
    // TODO: Implement product details retrieval
    res.json({
      success: true,
      message: 'Product details endpoint - to be implemented',
      data: null
    });
  })
);

export default router;