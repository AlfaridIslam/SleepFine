// Application-wide constants
export const APP_CONFIG = {
  NAME: 'SleepFine',
  VERSION: '1.0.0',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  CLOUDINARY_CLOUD_NAME: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
};

// User roles and permissions
export const USER_ROLES = {
  ADMIN: 'admin',
  SALESMAN: 'salesman',
  ACCOUNTANT: 'accountant',
  LOGISTICS: 'logistics',
  VENDOR: 'vendor',
  CUSTOMER: 'customer',
};

export const ROLE_PERMISSIONS = {
  [USER_ROLES.ADMIN]: [
    'dashboard:read',
    'users:read',
    'users:write',
    'users:delete',
    'products:read',
    'products:write',
    'products:delete',
    'orders:read',
    'orders:write',
    'orders:delete',
    'invoices:read',
    'invoices:write',
    'invoices:delete',
    'gatepass:read',
    'gatepass:write',
    'gatepass:delete',
    'reports:read',
    'settings:read',
    'settings:write',
  ],
  [USER_ROLES.SALESMAN]: [
    'dashboard:read',
    'products:read',
    'orders:read',
    'orders:write',
    'invoices:read',
    'invoices:write',
    'gatepass:read',
    'gatepass:write',
    'customers:read',
    'customers:write',
  ],
  [USER_ROLES.ACCOUNTANT]: [
    'dashboard:read',
    'invoices:read',
    'invoices:write',
    'invoices:delete',
    'orders:read',
    'reports:read',
    'financial:read',
    'financial:write',
  ],
  [USER_ROLES.LOGISTICS]: [
    'dashboard:read',
    'orders:read',
    'orders:write',
    'gatepass:read',
    'gatepass:write',
    'inventory:read',
    'inventory:write',
    'shipping:read',
    'shipping:write',
  ],
  [USER_ROLES.VENDOR]: [
    'dashboard:read',
    'products:read',
    'orders:read',
    'invoices:read',
  ],
};

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    VERIFY: '/auth/verify',
  },
  USERS: {
    BASE: '/users',
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
  },
  PRODUCTS: {
    BASE: '/products',
    CATEGORIES: '/products/categories',
    INVENTORY: '/products/inventory',
  },
  ORDERS: {
    BASE: '/orders',
    STATUS: '/orders/status',
    TRACKING: '/orders/tracking',
  },
  INVOICES: {
    BASE: '/invoices',
    GENERATE: '/invoices/generate',
    DOWNLOAD: '/invoices/download',
  },
  GATEPASS: {
    BASE: '/gatepass',
    GENERATE: '/gatepass/generate',
    VALIDATE: '/gatepass/validate',
  },
  DASHBOARD: {
    STATS: '/dashboard/stats',
    ANALYTICS: '/dashboard/analytics',
  },
};

// Route paths
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  ADMIN: {
    DASHBOARD: '/admin',
    USERS: '/admin/users',
    PRODUCTS: '/admin/products',
    ORDERS: '/admin/orders',
    INVOICES: '/admin/invoices',
    GATEPASS: '/admin/gatepass',
    REPORTS: '/admin/reports',
    SETTINGS: '/admin/settings',
  },
  SALESMAN: {
    DASHBOARD: '/salesman',
    ORDERS: '/salesman/orders',
    CUSTOMERS: '/salesman/customers',
    INVOICES: '/salesman/invoices',
    GATEPASS: '/salesman/gatepass',
  },
  ACCOUNTANT: {
    DASHBOARD: '/accountant',
    INVOICES: '/accountant/invoices',
    FINANCIAL: '/accountant/financial',
    REPORTS: '/accountant/reports',
  },
  LOGISTICS: {
    DASHBOARD: '/logistics',
    ORDERS: '/logistics/orders',
    INVENTORY: '/logistics/inventory',
    SHIPPING: '/logistics/shipping',
    GATEPASS: '/logistics/gatepass',
  },
  VENDOR: {
    DASHBOARD: '/vendor',
    PRODUCTS: '/vendor/products',
    ORDERS: '/vendor/orders',
  },
};

// Order statuses
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  RETURNED: 'returned',
};

// Invoice statuses
export const INVOICE_STATUS = {
  DRAFT: 'draft',
  SENT: 'sent',
  PAID: 'paid',
  OVERDUE: 'overdue',
  CANCELLED: 'cancelled',
};

// Product categories
export const PRODUCT_CATEGORIES = {
  MATTRESS: 'mattress',
  BED: 'bed',
  SOFA: 'sofa',
  ACCESSORIES: 'accessories',
};

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'sleepfine_auth_token',
  REFRESH_TOKEN: 'sleepfine_refresh_token',
  USER_DATA: 'sleepfine_user_data',
  THEME: 'sleepfine_theme',
  LANGUAGE: 'sleepfine_language',
};

// Validation rules
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 20, 50, 100],
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  API: 'YYYY-MM-DD',
  DATETIME: 'DD/MM/YYYY HH:mm',
  TIME: 'HH:mm',
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  FORBIDDEN: 'Access forbidden.',
  NOT_FOUND: 'Resource not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNKNOWN_ERROR: 'An unknown error occurred.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logout successful!',
  SAVE_SUCCESS: 'Data saved successfully!',
  DELETE_SUCCESS: 'Data deleted successfully!',
  UPDATE_SUCCESS: 'Data updated successfully!',
  CREATE_SUCCESS: 'Data created successfully!',
}; 