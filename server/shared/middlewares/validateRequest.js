import Joi from 'joi';
import { ValidationError } from './errorHandler.js';
import logger from '../utils/logger.js';

/**
 * Request validation middleware
 * @param {Object} schema - Joi validation schema
 * @param {string} source - Request source ('body', 'query', 'params', 'headers')
 */
export const validateRequest = (schema, source = 'body') => {
  return (req, res, next) => {
    const dataToValidate = req[source];
    
    const { error, value } = schema.validate(dataToValidate, {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: false,
    });

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message,
        value: detail.context?.value,
        type: detail.type,
      }));

      logger.logSecurity('validation_failed', {
        source,
        errors,
        ip: req.ip,
        url: req.url,
        method: req.method,
      });

      return next(new ValidationError('Validation failed', errors));
    }

    // Replace request data with validated data
    req[source] = value;
    next();
  };
};

/**
 * Common validation schemas
 */
export const commonSchemas = {
  // Pagination
  pagination: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    sortBy: Joi.string().valid('createdAt', 'updatedAt', 'name', 'email', 'status'),
    sortOrder: Joi.string().valid('asc', 'desc').default('desc'),
  }),

  // Search
  search: Joi.object({
    q: Joi.string().min(1).max(100),
    filters: Joi.object().pattern(Joi.string(), Joi.any()),
  }),

  // ID parameter
  idParam: Joi.object({
    id: Joi.string().required().messages({
      'string.empty': 'ID is required',
      'any.required': 'ID is required',
    }),
  }),

  // Email
  email: Joi.string().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required',
  }),

  // Password
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.max': 'Password must not exceed 128 characters',
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      'any.required': 'Password is required',
    }),

  // Phone number
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .required()
    .messages({
      'string.pattern.base': 'Please provide a valid phone number',
      'any.required': 'Phone number is required',
    }),

  // Date range
  dateRange: Joi.object({
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().min(Joi.ref('startDate')).required(),
  }).messages({
    'date.min': 'End date must be after start date',
  }),

  // File upload
  fileUpload: Joi.object({
    file: Joi.object({
      fieldname: Joi.string().required(),
      originalname: Joi.string().required(),
      encoding: Joi.string().required(),
      mimetype: Joi.string().required(),
      size: Joi.number().max(10 * 1024 * 1024).required(), // 10MB max
    }).required(),
  }),
};

/**
 * Business-specific validation schemas
 */
export const businessSchemas = {
  // Order creation
  createOrder: Joi.object({
    customerName: Joi.string().min(2).max(100).required(),
    customerPhone: commonSchemas.phone,
    customerEmail: commonSchemas.email,
    items: Joi.array().items(
      Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().integer().min(1).required(),
        unitPrice: Joi.number().positive().required(),
        description: Joi.string().max(500),
      })
    ).min(1).required(),
    deliveryAddress: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
    paymentMethod: Joi.string().valid('cash', 'online', 'card').required(),
    notes: Joi.string().max(1000),
  }),

  // Payment creation
  createPayment: Joi.object({
    orderId: Joi.string().required(),
    amount: Joi.number().positive().required(),
    paymentMethod: Joi.string().valid('cash', 'online', 'card').required(),
    paymentType: Joi.string().valid('advance', 'full', 'partial').required(),
    transactionId: Joi.string().when('paymentMethod', {
      is: 'online',
      then: Joi.required(),
      otherwise: Joi.optional(),
    }),
    utrNumber: Joi.string().when('paymentMethod', {
      is: 'online',
      then: Joi.required(),
      otherwise: Joi.optional(),
    }),
    notes: Joi.string().max(500),
  }),

  // Delivery creation
  createDelivery: Joi.object({
    orderId: Joi.string().required(),
    driverId: Joi.string().required(),
    vehicleNumber: Joi.string().required(),
    estimatedDeliveryTime: Joi.date().iso().min('now').required(),
    deliveryAddress: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
    notes: Joi.string().max(500),
  }),

  // User creation
  createUser: Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: commonSchemas.email,
    phone: commonSchemas.phone,
    role: Joi.string().valid('admin', 'salesman', 'logistics', 'accounts', 'driver', 'dealer', 'distributor').required(),
    password: commonSchemas.password,
    address: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
    }),
    isActive: Joi.boolean().default(true),
  }),

  // User update
  updateUser: Joi.object({
    firstName: Joi.string().min(2).max(50),
    lastName: Joi.string().min(2).max(50),
    email: Joi.string().email(),
    phone: commonSchemas.phone,
    role: Joi.string().valid('admin', 'salesman', 'logistics', 'accounts', 'driver', 'dealer', 'distributor'),
    address: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
    }),
    isActive: Joi.boolean(),
  }),

  // Login
  login: Joi.object({
    email: commonSchemas.email,
    password: Joi.string().required(),
  }),

  // Password reset
  passwordReset: Joi.object({
    email: commonSchemas.email,
    token: Joi.string().required(),
    newPassword: commonSchemas.password,
  }),

  // Inventory item
  inventoryItem: Joi.object({
    name: Joi.string().min(2).max(100).required(),
    description: Joi.string().max(500),
    category: Joi.string().required(),
    sku: Joi.string().required(),
    price: Joi.number().positive().required(),
    costPrice: Joi.number().positive().required(),
    quantity: Joi.number().integer().min(0).required(),
    minQuantity: Joi.number().integer().min(0).default(0),
    maxQuantity: Joi.number().integer().min(0),
    unit: Joi.string().required(),
    supplier: Joi.string(),
    isActive: Joi.boolean().default(true),
  }),

  // Report filters
  reportFilters: Joi.object({
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().min(Joi.ref('startDate')).required(),
    salesmanId: Joi.string(),
    status: Joi.string().valid('pending', 'processing', 'delivered', 'cancelled'),
    paymentStatus: Joi.string().valid('pending', 'partial', 'completed'),
    category: Joi.string(),
  }),

  // Sales schemas
  getOrders: commonSchemas.pagination,
  getOrderById: commonSchemas.idParam,
  updateOrder: Joi.object({
    customerName: Joi.string().min(2).max(100),
    customerPhone: commonSchemas.phone,
    customerEmail: commonSchemas.email,
    items: Joi.array().items(
      Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().integer().min(1).required(),
        unitPrice: Joi.number().positive().required(),
        description: Joi.string().max(500),
      })
    ).min(1),
    deliveryAddress: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
    }),
    paymentMethod: Joi.string().valid('cash', 'online', 'card'),
    notes: Joi.string().max(1000),
  }),
  updateOrderStatus: Joi.object({
    status: Joi.string().valid('pending', 'processing', 'manufacturing', 'packaging', 'ready', 'delivered', 'cancelled').required(),
    notes: Joi.string().max(500),
  }),
  addPayment: Joi.object({
    amount: Joi.number().positive().required(),
    paymentMethod: Joi.string().valid('cash', 'online', 'card').required(),
    paymentType: Joi.string().valid('advance', 'full', 'partial').required(),
    transactionId: Joi.string(),
    utrNumber: Joi.string(),
    notes: Joi.string().max(500),
  }),
  createSalesman: Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: commonSchemas.email,
    phone: commonSchemas.phone,
    employeeId: Joi.string().required(),
    address: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipCode: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
    salesTarget: Joi.object({
      monthly: Joi.number().positive(),
      quarterly: Joi.number().positive(),
      yearly: Joi.number().positive(),
    }),
    commission: Joi.object({
      percentage: Joi.number().min(0).max(100),
      fixed: Joi.number().positive(),
    }),
    password: commonSchemas.password,
  }),
  getSalesmanById: commonSchemas.idParam,
  getSalesmanOrders: commonSchemas.idParam,
  getSalesmanPerformance: commonSchemas.idParam,
  getSalesReport: commonSchemas.pagination,
  getPerformanceReport: commonSchemas.pagination,
  sendToWhatsApp: commonSchemas.idParam,
  getOrderNotifications: commonSchemas.idParam,

  // Accounts schemas
  verifyPayment: Joi.object({
    method: Joi.string().valid('manual', 'bank_statement', 'gateway_verification', 'receipt_verification').default('manual'),
    notes: Joi.string().max(500).optional()
  }),
  getPayments: commonSchemas.pagination,
  updatePayment: Joi.object({
    amount: Joi.number().positive().optional(),
    method: Joi.string().valid('cash', 'online', 'card', 'upi', 'bank_transfer', 'cheque').optional(),
    status: Joi.string().valid('pending', 'completed', 'failed', 'refunded', 'cancelled').optional(),
    paymentDetails: Joi.object({
      utrNumber: Joi.string().optional(),
      bankName: Joi.string().optional(),
      accountNumber: Joi.string().optional(),
      ifscCode: Joi.string().optional(),
      chequeNumber: Joi.string().optional(),
      cardLast4: Joi.string().length(4).optional(),
      cardType: Joi.string().valid('visa', 'mastercard', 'amex', 'rupay', 'other').optional(),
      upiId: Joi.string().optional()
    }).optional(),
    notes: Joi.string().max(500).optional()
  }),
  
  createInvoice: Joi.object({
    orderId: Joi.string().required(),
    invoiceType: Joi.string().valid('proforma', 'tax_invoice', 'commercial', 'credit_note', 'debit_note').default('tax_invoice'),
    customer: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().optional(),
      phone: Joi.string().optional(),
      address: Joi.object({
        street: Joi.string().optional(),
        city: Joi.string().optional(),
        state: Joi.string().optional(),
        zipCode: Joi.string().optional(),
        country: Joi.string().default('India')
      }).optional(),
      gstin: Joi.string().optional(),
      panNumber: Joi.string().optional()
    }).required(),
    items: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      description: Joi.string().optional(),
      quantity: Joi.number().min(1).required(),
      unit: Joi.string().valid('piece', 'kg', 'meter', 'liter', 'box', 'set').default('piece'),
      rate: Joi.number().min(0).required(),
      discount: Joi.number().min(0).default(0),
      discountType: Joi.string().valid('percentage', 'amount').default('percentage'),
      cgstRate: Joi.number().min(0).default(0),
      sgstRate: Joi.number().min(0).default(0),
      igstRate: Joi.number().min(0).default(0)
    })).min(1).required(),
    paymentTerms: Joi.object({
      dueDate: Joi.date().required(),
      paymentMethod: Joi.array().items(Joi.string().valid('cash', 'online', 'card', 'upi', 'bank_transfer', 'cheque')).default(['cash']),
      lateFee: Joi.number().min(0).default(0)
    }).required(),
    notes: Joi.object({
      publicNotes: Joi.string().optional(),
      privateNotes: Joi.string().optional(),
      termsAndConditions: Joi.string().optional()
    }).optional()
  }),
  
  updateInvoice: Joi.object({
    status: Joi.string().valid('draft', 'sent', 'viewed', 'paid', 'overdue', 'cancelled').optional(),
    paymentTerms: Joi.object({
      dueDate: Joi.date().optional(),
      paymentMethod: Joi.array().items(Joi.string().valid('cash', 'online', 'card', 'upi', 'bank_transfer', 'cheque')).optional(),
      lateFee: Joi.number().min(0).optional()
    }).optional(),
    notes: Joi.object({
      publicNotes: Joi.string().optional(),
      privateNotes: Joi.string().optional(),
      termsAndConditions: Joi.string().optional()
    }).optional()
  }),
  
  markInvoicePaid: Joi.object({
    paymentAmount: Joi.number().positive().required(),
    paymentDate: Joi.date().optional()
  }),
  
  generateFinancialReport: Joi.object({
    reportType: Joi.string().valid('profit_loss', 'balance_sheet', 'cash_flow', 'accounts_receivable', 'accounts_payable', 'sales_report', 'payment_report', 'tax_report', 'expense_report', 'inventory_valuation', 'trial_balance', 'custom').required(),
    reportName: Joi.string().min(2).max(200).required(),
    description: Joi.string().max(500).optional(),
    reportPeriod: Joi.string().valid('daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'custom').required(),
    dateRange: Joi.object({
      startDate: Joi.date().required(),
      endDate: Joi.date().required()
    }).required(),
    filters: Joi.object({
      departments: Joi.array().items(Joi.string()).optional(),
      regions: Joi.array().items(Joi.string()).optional(),
      products: Joi.array().items(Joi.string()).optional(),
      customers: Joi.array().items(Joi.string()).optional(),
      salesmen: Joi.array().items(Joi.string()).optional(),
      paymentMethods: Joi.array().items(Joi.string()).optional()
    }).optional()
  }),
  
  bulkVerifyPayments: Joi.object({
    paymentIds: Joi.array().items(Joi.string()).min(1).required(),
    method: Joi.string().valid('manual', 'bank_statement', 'gateway_verification', 'receipt_verification').default('manual'),
    notes: Joi.string().max(500).optional()
  }),
  
  createAccountant: Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: commonSchemas.email,
    phone: commonSchemas.phone,
    employeeId: Joi.string().required(),
    specialization: Joi.string().valid('general', 'tax', 'audit', 'payroll', 'inventory', 'cost_accounting').default('general'),
    certifications: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      issuingBody: Joi.string().required(),
      issueDate: Joi.date().optional(),
      expiryDate: Joi.date().optional(),
      certificateNumber: Joi.string().optional()
    })).optional(),
    assignedDepartments: Joi.array().items(Joi.string().valid('sales', 'logistics', 'manufacturing', 'hr', 'admin')).optional(),
    password: commonSchemas.password
  }),
  
  updateAccountant: Joi.object({
    firstName: Joi.string().min(2).max(50).optional(),
    lastName: Joi.string().min(2).max(50).optional(),
    phone: commonSchemas.phone.optional(),
    specialization: Joi.string().valid('general', 'tax', 'audit', 'payroll', 'inventory', 'cost_accounting').optional(),
    certifications: Joi.array().items(Joi.object({
      name: Joi.string().required(),
      issuingBody: Joi.string().required(),
      issueDate: Joi.date().optional(),
      expiryDate: Joi.date().optional(),
      certificateNumber: Joi.string().optional()
    })).optional(),
    assignedDepartments: Joi.array().items(Joi.string().valid('sales', 'logistics', 'manufacturing', 'hr', 'admin')).optional(),
    isActive: Joi.boolean().optional(),
    status: Joi.string().valid('active', 'inactive', 'suspended', 'terminated').optional()
  }),
  
  getAccountsReport: commonSchemas.pagination,
  getFinancialReport: commonSchemas.pagination,

  // Admin schemas
  updateUser: Joi.object({
    firstName: Joi.string().min(2).max(50).optional(),
    lastName: Joi.string().min(2).max(50).optional(),
    email: commonSchemas.email.optional(),
    phone: commonSchemas.phone.optional(),
    isActive: Joi.boolean().optional(),
    status: Joi.string().valid('active', 'inactive', 'suspended', 'terminated').optional(),
    permissions: Joi.array().items(Joi.string()).optional()
  }),

  updateSystemSetting: Joi.object({
    value: Joi.alternatives().try(
      Joi.string(),
      Joi.number(),
      Joi.boolean(),
      Joi.array(),
      Joi.object()
    ).required()
  }),

  importSystemSettings: Joi.object({
    settings: Joi.array().items(Joi.object({
      settingKey: Joi.string().required(),
      value: Joi.alternatives().try(
        Joi.string(),
        Joi.number(),
        Joi.boolean(),
        Joi.array(),
        Joi.object()
      ).required()
    })).min(1).required(),
    overwrite: Joi.boolean().default(false)
  }),

  generateCustomReport: Joi.object({
    reportType: Joi.string().valid('overview', 'detailed', 'performance', 'audit', 'user_activity').required(),
    startDate: Joi.date().optional(),
    endDate: Joi.date().optional(),
    filters: Joi.object({
      services: Joi.array().items(Joi.string().valid('sales', 'accounts', 'logistics', 'notifications')).optional(),
      userTypes: Joi.array().items(Joi.string().valid('admin', 'salesman', 'accountant', 'logistics', 'driver')).optional(),
      includeMetrics: Joi.boolean().default(true),
      includeCharts: Joi.boolean().default(false)
    }).optional()
  }),

  updateSystemConfig: Joi.object({
    configurations: Joi.array().items(Joi.object({
      key: Joi.string().required(),
      value: Joi.alternatives().try(
        Joi.string(),
        Joi.number(),
        Joi.boolean(),
        Joi.array(),
        Joi.object()
      ).required()
    })).min(1).required()
  }),

  // Logistics schemas
  createGatepass: Joi.object({
    orderId: Joi.string().required(),
    advancePayment: Joi.number().positive().required(),
    pendingAmount: Joi.number().positive().required(),
    driverId: Joi.string().required(),
    vehicleNumber: Joi.string().required(),
    notes: Joi.string().max(500),
  }),
  getGatepasses: commonSchemas.pagination,
  updateGatepass: Joi.object({
    status: Joi.string().valid('active', 'completed', 'cancelled').required(),
    notes: Joi.string().max(500),
  }),
  updateManufacturingStatus: Joi.object({
    status: Joi.string().valid('started', 'in_progress', 'completed').required(),
    notes: Joi.string().max(500),
  }),
  performQualityCheck: Joi.object({
    passed: Joi.boolean().required(),
    issues: Joi.array().items(Joi.string()),
    notes: Joi.string().max(500),
  }),
  updatePackagingStatus: Joi.object({
    status: Joi.string().valid('pending', 'packaging', 'completed').required(),
    notes: Joi.string().max(500),
  }),
  createLogistics: Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: commonSchemas.email,
    phone: commonSchemas.phone,
    employeeId: Joi.string().required(),
    specialization: Joi.string(),
    assignedWarehouse: Joi.string(),
    assignedZone: Joi.string(),
    password: commonSchemas.password,
  }),
  getLogisticsReport: commonSchemas.pagination,

  // Notifications schemas
  createNotification: Joi.object({
    type: Joi.string().valid('order_update', 'payment_update', 'delivery_update', 'manufacturing_update', 'system_alert', 'reminder', 'announcement').required(),
    title: Joi.string().min(2).max(200).required(),
    message: Joi.string().min(2).max(1000).required(),
    priority: Joi.string().valid('low', 'medium', 'high', 'urgent').default('medium'),
    channels: Joi.array().items(Joi.string().valid('email', 'sms', 'whatsapp', 'push', 'in_app', 'webhook')).min(1).default(['in_app']),
    recipients: Joi.array().items(Joi.object({
      userId: Joi.string().optional(),
      userModel: Joi.string().valid('Admin', 'Salesman', 'Logistics', 'Driver', 'Accountant').optional(),
      role: Joi.string().valid('admin', 'salesman', 'logistics', 'driver', 'accounts').required()
    })).min(1).required(),
    relatedEntity: Joi.object({
      entityType: Joi.string().valid('order', 'payment', 'gatepass', 'user', 'system').optional(),
      entityId: Joi.string().optional(),
      orderId: Joi.string().optional()
    }).optional(),
    metadata: Joi.object().optional()
  }),

  createFromTemplate: Joi.object({
    templateType: Joi.string().required(),
    variables: Joi.object().required(),
    recipients: Joi.array().items(Joi.object({
      userId: Joi.string().optional(),
      userModel: Joi.string().valid('Admin', 'Salesman', 'Logistics', 'Driver', 'Accountant').optional(),
      role: Joi.string().valid('admin', 'salesman', 'logistics', 'driver', 'accounts').required()
    })).min(1).required()
  }),

  createOrderNotification: Joi.object({
    orderId: Joi.string().required(),
    customer: Joi.object({
      name: Joi.string().required()
    }).required(),
    orderDetails: Joi.object({
      totalAmount: Joi.number().min(0).required()
    }).required(),
    items: Joi.array().min(1).required(),
    salesmanName: Joi.string().required()
  }),

  createGatepassNotification: Joi.object({
    gatepassId: Joi.string().required(),
    orderId: Joi.string().required(),
    order: Joi.object({
      customer: Joi.object({
        name: Joi.string().required()
      }).required()
    }).optional(),
    paymentDetails: Joi.object({
      totalAmount: Joi.number().min(0).required()
    }).required(),
    deliveryDetails: Joi.object({
      driver: Joi.object({
        fullName: Joi.string().optional()
      }).optional(),
      vehicleNumber: Joi.string().optional()
    }).optional(),
    validUntil: Joi.date().optional()
  }),

  createDeliveryNotification: Joi.object({
    orderId: Joi.string().required(),
    gatepassId: Joi.string().required(),
    customerName: Joi.string().required(),
    driverName: Joi.string().required(),
    paymentReceived: Joi.number().min(0).default(0),
    paymentMethod: Joi.string().valid('cash', 'online', 'card', 'upi').default('cash')
  }),

  systemBroadcast: Joi.object({
    title: Joi.string().min(2).max(200).required(),
    message: Joi.string().min(2).max(1000).required(),
    priority: Joi.string().valid('low', 'medium', 'high', 'urgent').default('medium'),
    targetRoles: Joi.array().items(Joi.string().valid('admin', 'salesman', 'logistics', 'driver', 'accounts')).default([])
  }),

  getNotifications: commonSchemas.pagination,
  markAsRead: commonSchemas.idParam,
  sendNotification: commonSchemas.idParam,
  createTemplate: Joi.object({
    name: Joi.string().min(2).max(100).required(),
    title: Joi.string().min(2).max(100).required(),
    message: Joi.string().min(2).max(500).required(),
    type: Joi.string().valid('info', 'warning', 'error', 'success').required(),
    channels: Joi.array().items(Joi.string().valid('email', 'sms', 'whatsapp', 'push')).min(1).required(),
  }),
  getNotificationReport: commonSchemas.pagination,
};

/**
 * Custom validation functions
 */
export const customValidators = {
  // Check if email is unique
  isEmailUnique: (User) => async (email, helpers) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return helpers.error('any.invalid');
    }
    return email;
  },

  // Check if phone is unique
  isPhoneUnique: (User) => async (phone, helpers) => {
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return helpers.error('any.invalid');
    }
    return phone;
  },

  // Validate order status transition
  isValidStatusTransition: (currentStatus, allowedTransitions) => (newStatus, helpers) => {
    if (!allowedTransitions[currentStatus]?.includes(newStatus)) {
      return helpers.error('any.invalid');
    }
    return newStatus;
  },

  // Validate payment amount
  isValidPaymentAmount: (orderTotal, existingPayments) => (amount, helpers) => {
    const totalPaid = existingPayments.reduce((sum, payment) => sum + payment.amount, 0);
    const remainingAmount = orderTotal - totalPaid;
    
    if (amount > remainingAmount) {
      return helpers.error('any.invalid');
    }
    return amount;
  },
};

/**
 * Sanitization functions
 */
export const sanitizers = {
  // Sanitize HTML content
  sanitizeHtml: (value) => {
    if (typeof value !== 'string') return value;
    return value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  },

  // Sanitize phone number
  sanitizePhone: (value) => {
    if (typeof value !== 'string') return value;
    return value.replace(/[^\d+]/g, '');
  },

  // Sanitize email
  sanitizeEmail: (value) => {
    if (typeof value !== 'string') return value;
    return value.toLowerCase().trim();
  },

  // Sanitize text
  sanitizeText: (value) => {
    if (typeof value !== 'string') return value;
    return value.trim().replace(/\s+/g, ' ');
  },
};

export default validateRequest; 