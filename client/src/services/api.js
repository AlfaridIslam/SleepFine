import axios from 'axios';
import { APP_CONFIG, STORAGE_KEYS, ERROR_MESSAGES } from '../constants';
import { storageUtils } from '../utils';

// Create axios instance
const api = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = storageUtils.getItem(STORAGE_KEYS.AUTH_TOKEN);
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors and token refresh
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = storageUtils.getItem(STORAGE_KEYS.REFRESH_TOKEN);
        
        if (refreshToken) {
          // Attempt to refresh token
          const response = await axios.post(`${APP_CONFIG.API_BASE_URL}/auth/refresh`, {
            refreshToken,
          });
          
          const { accessToken, refreshToken: newRefreshToken } = response.data;
          
          // Store new tokens
          storageUtils.setItem(STORAGE_KEYS.AUTH_TOKEN, accessToken);
          storageUtils.setItem(STORAGE_KEYS.REFRESH_TOKEN, newRefreshToken);
          
          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, clear tokens and redirect to login
        storageUtils.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        storageUtils.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        storageUtils.removeItem(STORAGE_KEYS.USER_DATA);
        
        // Redirect to login page
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// API service functions
export const authService = {
  // Login
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Logout
  logout: async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage regardless of API response
      storageUtils.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      storageUtils.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
      storageUtils.removeItem(STORAGE_KEYS.USER_DATA);
    }
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    try {
      const response = await api.post('/auth/refresh', { refreshToken });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Verify token
  verifyToken: async () => {
    try {
      const response = await api.get('/auth/verify');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Register
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },
};

export const userService = {
  // Get user profile
  getProfile: async () => {
    try {
      const response = await api.get('/users/profile');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Update user profile
  updateProfile: async (userData) => {
    try {
      const response = await api.put('/users/profile', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get all users (admin only)
  getUsers: async (params = {}) => {
    try {
      const response = await api.get('/users', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Create user (admin only)
  createUser: async (userData) => {
    try {
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Update user (admin only)
  updateUser: async (userId, userData) => {
    try {
      const response = await api.put(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Delete user (admin only)
  deleteUser: async (userId) => {
    try {
      const response = await api.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },
};

export const productService = {
  // Get all products
  getProducts: async (params = {}) => {
    try {
      const response = await api.get('/products', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get product by ID
  getProduct: async (productId) => {
    try {
      const response = await api.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Create product
  createProduct: async (productData) => {
    try {
      const response = await api.post('/products', productData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Update product
  updateProduct: async (productId, productData) => {
    try {
      const response = await api.put(`/products/${productId}`, productData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Delete product
  deleteProduct: async (productId) => {
    try {
      const response = await api.delete(`/products/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get product categories
  getCategories: async () => {
    try {
      const response = await api.get('/products/categories');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get inventory
  getInventory: async (params = {}) => {
    try {
      const response = await api.get('/products/inventory', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },
};

export const orderService = {
  // Get all orders
  getOrders: async (params = {}) => {
    try {
      const response = await api.get('/orders', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get order by ID
  getOrder: async (orderId) => {
    try {
      const response = await api.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Create order
  createOrder: async (orderData) => {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Update order
  updateOrder: async (orderId, orderData) => {
    try {
      const response = await api.put(`/orders/${orderId}`, orderData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Delete order
  deleteOrder: async (orderId) => {
    try {
      const response = await api.delete(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Update order status
  updateOrderStatus: async (orderId, status) => {
    try {
      const response = await api.patch(`/orders/${orderId}/status`, { status });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get order tracking
  getOrderTracking: async (orderId) => {
    try {
      const response = await api.get(`/orders/${orderId}/tracking`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },
};

export const invoiceService = {
  // Get all invoices
  getInvoices: async (params = {}) => {
    try {
      const response = await api.get('/invoices', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get invoice by ID
  getInvoice: async (invoiceId) => {
    try {
      const response = await api.get(`/invoices/${invoiceId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Create invoice
  createInvoice: async (invoiceData) => {
    try {
      const response = await api.post('/invoices', invoiceData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Update invoice
  updateInvoice: async (invoiceId, invoiceData) => {
    try {
      const response = await api.put(`/invoices/${invoiceId}`, invoiceData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Delete invoice
  deleteInvoice: async (invoiceId) => {
    try {
      const response = await api.delete(`/invoices/${invoiceId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Generate invoice PDF
  generateInvoicePDF: async (invoiceId) => {
    try {
      const response = await api.get(`/invoices/${invoiceId}/pdf`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Download invoice
  downloadInvoice: async (invoiceId) => {
    try {
      const response = await api.get(`/invoices/${invoiceId}/download`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },
};

export const gatepassService = {
  // Get all gatepasses
  getGatepasses: async (params = {}) => {
    try {
      const response = await api.get('/gatepass', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get gatepass by ID
  getGatepass: async (gatepassId) => {
    try {
      const response = await api.get(`/gatepass/${gatepassId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Create gatepass
  createGatepass: async (gatepassData) => {
    try {
      const response = await api.post('/gatepass', gatepassData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Update gatepass
  updateGatepass: async (gatepassId, gatepassData) => {
    try {
      const response = await api.put(`/gatepass/${gatepassId}`, gatepassData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Delete gatepass
  deleteGatepass: async (gatepassId) => {
    try {
      const response = await api.delete(`/gatepass/${gatepassId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Validate gatepass
  validateGatepass: async (gatepassNumber) => {
    try {
      const response = await api.post('/gatepass/validate', { gatepassNumber });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Generate gatepass PDF
  generateGatepassPDF: async (gatepassId) => {
    try {
      const response = await api.get(`/gatepass/${gatepassId}/pdf`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },
};

export const dashboardService = {
  // Get dashboard stats
  getStats: async () => {
    try {
      const response = await api.get('/dashboard/stats');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },

  // Get dashboard analytics
  getAnalytics: async (params = {}) => {
    try {
      const response = await api.get('/dashboard/analytics', { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || ERROR_MESSAGES.NETWORK_ERROR);
    }
  },
};

// Export the main api instance
export default api; 