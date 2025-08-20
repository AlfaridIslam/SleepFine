export const ROLES = {
  ADMIN: 'admin',
  SALESMAN: 'salesman', 
  LOGISTICS: 'logistics',
  ACCOUNTS: 'accounts',
  DRIVER: 'driver',
  MANAGER: 'manager'
};

export const PERMISSIONS = {
  // Order permissions
  CREATE_ORDER: 'create_order',
  VIEW_ORDER: 'view_order',
  UPDATE_ORDER: 'update_order',
  DELETE_ORDER: 'delete_order',
  VIEW_OWN_ORDERS: 'view_own_orders',
  
  // User permissions
  CREATE_USER: 'create_user',
  VIEW_USER: 'view_user',
  UPDATE_USER: 'update_user',
  DELETE_USER: 'delete_user',
  
  // Payment permissions
  UPDATE_PAYMENT: 'update_payment',
  VERIFY_PAYMENT: 'verify_payment',
  
  // Report permissions
  VIEW_SALES_REPORTS: 'view_sales_reports',
  VIEW_FINANCIAL_REPORTS: 'view_financial_reports',
  
  // Notification permissions
  SEND_NOTIFICATIONS: 'send_notifications',
  
  // Customer permissions
  CREATE_CUSTOMER: 'create_customer',
  VIEW_CUSTOMER: 'view_customer',
  UPDATE_CUSTOMER: 'update_customer',
  
  // Product permissions
  VIEW_PRODUCTS: 'view_products',
  VIEW_PRICING: 'view_pricing'
};

export default { ROLES, PERMISSIONS };