// User types
export const USER_TYPES = {
  // User object structure
  USER: {
    id: 'string',
    email: 'string',
    firstName: 'string',
    lastName: 'string',
    role: 'string',
    permissions: 'array',
    isActive: 'boolean',
    createdAt: 'date',
    updatedAt: 'date',
  },
  
  // Auth response structure
  AUTH_RESPONSE: {
    user: 'USER',
    accessToken: 'string',
    refreshToken: 'string',
    expiresIn: 'number',
  },
  
  // Login request structure
  LOGIN_REQUEST: {
    email: 'string',
    password: 'string',
    rememberMe: 'boolean',
  },
  
  // Register request structure
  REGISTER_REQUEST: {
    email: 'string',
    password: 'string',
    firstName: 'string',
    lastName: 'string',
    role: 'string',
  },
};

// Product types
export const PRODUCT_TYPES = {
  // Product object structure
  PRODUCT: {
    id: 'string',
    name: 'string',
    description: 'string',
    category: 'string',
    price: 'number',
    costPrice: 'number',
    sku: 'string',
    barcode: 'string',
    images: 'array',
    specifications: 'object',
    warranty: 'object',
    isActive: 'boolean',
    stockQuantity: 'number',
    minStockLevel: 'number',
    supplier: 'string',
    createdAt: 'date',
    updatedAt: 'date',
  },
  
  // Product category structure
  PRODUCT_CATEGORY: {
    id: 'string',
    name: 'string',
    description: 'string',
    parentCategory: 'string',
    isActive: 'boolean',
  },
  
  // Product specification structure
  PRODUCT_SPECIFICATION: {
    dimensions: 'object',
    materials: 'array',
    features: 'array',
    weight: 'number',
    color: 'string',
    size: 'string',
  },
  
  // Product warranty structure
  PRODUCT_WARRANTY: {
    duration: 'number',
    type: 'string',
    terms: 'string',
    coverage: 'array',
  },
};

// Order types
export const ORDER_TYPES = {
  // Order object structure
  ORDER: {
    id: 'string',
    orderNumber: 'string',
    customerId: 'string',
    customer: 'object',
    items: 'array',
    subtotal: 'number',
    tax: 'number',
    discount: 'number',
    total: 'number',
    status: 'string',
    paymentStatus: 'string',
    paymentMethod: 'string',
    shippingAddress: 'object',
    billingAddress: 'object',
    notes: 'string',
    createdAt: 'date',
    updatedAt: 'date',
  },
  
  // Order item structure
  ORDER_ITEM: {
    productId: 'string',
    product: 'object',
    quantity: 'number',
    unitPrice: 'number',
    totalPrice: 'number',
    discount: 'number',
  },
  
  // Order status structure
  ORDER_STATUS: {
    status: 'string',
    timestamp: 'date',
    updatedBy: 'string',
    notes: 'string',
  },
  
  // Customer structure
  CUSTOMER: {
    id: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    phone: 'string',
    address: 'object',
    isActive: 'boolean',
    createdAt: 'date',
    updatedAt: 'date',
  },
};

// Invoice types
export const INVOICE_TYPES = {
  // Invoice object structure
  INVOICE: {
    id: 'string',
    invoiceNumber: 'string',
    orderId: 'string',
    order: 'object',
    customerId: 'string',
    customer: 'object',
    items: 'array',
    subtotal: 'number',
    tax: 'number',
    discount: 'number',
    total: 'number',
    status: 'string',
    dueDate: 'date',
    paidDate: 'date',
    paymentMethod: 'string',
    notes: 'string',
    createdAt: 'date',
    updatedAt: 'date',
  },
  
  // Invoice item structure
  INVOICE_ITEM: {
    productId: 'string',
    product: 'object',
    quantity: 'number',
    unitPrice: 'number',
    totalPrice: 'number',
    tax: 'number',
  },
};

// Gatepass types
export const GATEPASS_TYPES = {
  // Gatepass object structure
  GATEPASS: {
    id: 'string',
    gatepassNumber: 'string',
    orderId: 'string',
    order: 'object',
    customerId: 'string',
    customer: 'object',
    items: 'array',
    issuedBy: 'string',
    issuedTo: 'string',
    validFrom: 'date',
    validUntil: 'date',
    status: 'string',
    notes: 'string',
    createdAt: 'date',
    updatedAt: 'date',
  },
  
  // Gatepass item structure
  GATEPASS_ITEM: {
    productId: 'string',
    product: 'object',
    quantity: 'number',
    serialNumber: 'string',
  },
};

// Dashboard types
export const DASHBOARD_TYPES = {
  // Dashboard stats structure
  DASHBOARD_STATS: {
    totalOrders: 'number',
    totalRevenue: 'number',
    totalProducts: 'number',
    totalCustomers: 'number',
    pendingOrders: 'number',
    overdueInvoices: 'number',
    lowStockProducts: 'number',
  },
  
  // Chart data structure
  CHART_DATA: {
    labels: 'array',
    datasets: 'array',
  },
  
  // Recent activity structure
  RECENT_ACTIVITY: {
    id: 'string',
    type: 'string',
    description: 'string',
    timestamp: 'date',
    user: 'string',
  },
};

// API response types
export const API_TYPES = {
  // Success response structure
  SUCCESS_RESPONSE: {
    success: 'boolean',
    data: 'any',
    message: 'string',
    timestamp: 'date',
  },
  
  // Error response structure
  ERROR_RESPONSE: {
    success: 'boolean',
    error: 'string',
    message: 'string',
    statusCode: 'number',
    timestamp: 'date',
  },
  
  // Paginated response structure
  PAGINATED_RESPONSE: {
    success: 'boolean',
    data: 'array',
    pagination: {
      page: 'number',
      limit: 'number',
      total: 'number',
      totalPages: 'number',
    },
    message: 'string',
  },
};

// Form types
export const FORM_TYPES = {
  // Form field structure
  FORM_FIELD: {
    name: 'string',
    label: 'string',
    type: 'string',
    placeholder: 'string',
    required: 'boolean',
    validation: 'object',
    options: 'array',
  },
  
  // Form validation structure
  FORM_VALIDATION: {
    required: 'boolean',
    minLength: 'number',
    maxLength: 'number',
    pattern: 'regex',
    custom: 'function',
  },
  
  // Form error structure
  FORM_ERROR: {
    field: 'string',
    message: 'string',
    type: 'string',
  },
};

// UI types
export const UI_TYPES = {
  // Modal structure
  MODAL: {
    isOpen: 'boolean',
    title: 'string',
    content: 'component',
    size: 'string',
    onClose: 'function',
  },
  
  // Notification structure
  NOTIFICATION: {
    id: 'string',
    type: 'string',
    title: 'string',
    message: 'string',
    duration: 'number',
    isVisible: 'boolean',
  },
  
  // Loading state structure
  LOADING_STATE: {
    isLoading: 'boolean',
    loadingText: 'string',
    progress: 'number',
  },
  
  // Table structure
  TABLE: {
    columns: 'array',
    data: 'array',
    pagination: 'object',
    sorting: 'object',
    filtering: 'object',
  },
};

// Export all types
export const ALL_TYPES = {
  ...USER_TYPES,
  ...PRODUCT_TYPES,
  ...ORDER_TYPES,
  ...INVOICE_TYPES,
  ...GATEPASS_TYPES,
  ...DASHBOARD_TYPES,
  ...API_TYPES,
  ...FORM_TYPES,
  ...UI_TYPES,
}; 