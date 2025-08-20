import { DATE_FORMATS, VALIDATION_RULES } from '../constants';

// Date and time utilities
export const dateUtils = {
  /**
   * Format date to display format
   * @param {Date|string} date - Date to format
   * @param {string} format - Format string (default: DD/MM/YYYY)
   * @returns {string} Formatted date string
   */
  formatDate: (date, format = DATE_FORMATS.DISPLAY) => {
    if (!date) return '';
    
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    
    return format
      .replace('DD', day)
      .replace('MM', month)
      .replace('YYYY', year);
  },

  /**
   * Format date and time
   * @param {Date|string} date - Date to format
   * @returns {string} Formatted date and time string
   */
  formatDateTime: (date) => {
    if (!date) return '';
    
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  },

  /**
   * Get relative time (e.g., "2 hours ago")
   * @param {Date|string} date - Date to get relative time for
   * @returns {string} Relative time string
   */
  getRelativeTime: (date) => {
    if (!date) return '';
    
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  },

  /**
   * Check if date is today
   * @param {Date|string} date - Date to check
   * @returns {boolean} True if date is today
   */
  isToday: (date) => {
    if (!date) return false;
    
    const today = new Date();
    const checkDate = new Date(date);
    
    return today.toDateString() === checkDate.toDateString();
  },

  /**
   * Check if date is in the past
   * @param {Date|string} date - Date to check
   * @returns {boolean} True if date is in the past
   */
  isPast: (date) => {
    if (!date) return false;
    
    const now = new Date();
    const checkDate = new Date(date);
    
    return checkDate < now;
  },
};

// Validation utilities
export const validationUtils = {
  /**
   * Validate email format
   * @param {string} email - Email to validate
   * @returns {boolean} True if email is valid
   */
  isValidEmail: (email) => {
    if (!email) return false;
    return VALIDATION_RULES.EMAIL.test(email);
  },

  /**
   * Validate phone number format
   * @param {string} phone - Phone number to validate
   * @returns {boolean} True if phone is valid
   */
  isValidPhone: (phone) => {
    if (!phone) return false;
    return VALIDATION_RULES.PHONE.test(phone);
  },

  /**
   * Validate password strength
   * @param {string} password - Password to validate
   * @returns {object} Validation result with isValid and errors
   */
  validatePassword: (password) => {
    const errors = [];
    
    if (!password) {
      errors.push('Password is required');
      return { isValid: false, errors };
    }
    
    if (password.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
      errors.push(`Password must be at least ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} characters`);
    }
    
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/(?=.*\d)/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  /**
   * Validate required fields
   * @param {object} data - Object containing field values
   * @param {array} requiredFields - Array of required field names
   * @returns {object} Validation result with isValid and errors
   */
  validateRequired: (data, requiredFields) => {
    const errors = {};
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
        errors[field] = `${field} is required`;
        isValid = false;
      }
    });
    
    return { isValid, errors };
  },
};

// String utilities
export const stringUtils = {
  /**
   * Capitalize first letter of string
   * @param {string} str - String to capitalize
   * @returns {string} Capitalized string
   */
  capitalize: (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * Convert string to title case
   * @param {string} str - String to convert
   * @returns {string} Title case string
   */
  toTitleCase: (str) => {
    if (!str) return '';
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  },

  /**
   * Truncate string to specified length
   * @param {string} str - String to truncate
   * @param {number} length - Maximum length
   * @param {string} suffix - Suffix to add (default: '...')
   * @returns {string} Truncated string
   */
  truncate: (str, length, suffix = '...') => {
    if (!str) return '';
    if (str.length <= length) return str;
    return str.substring(0, length) + suffix;
  },

  /**
   * Generate random string
   * @param {number} length - Length of random string
   * @returns {string} Random string
   */
  generateRandomString: (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  },

  /**
   * Convert string to slug
   * @param {string} str - String to convert
   * @returns {string} Slug string
   */
  toSlug: (str) => {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },
};

// Number utilities
export const numberUtils = {
  /**
   * Format number as currency
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency code (default: 'USD')
   * @param {string} locale - Locale (default: 'en-US')
   * @returns {string} Formatted currency string
   */
  formatCurrency: (amount, currency = 'USD', locale = 'en-US') => {
    if (amount === null || amount === undefined) return '';
    
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  },

  /**
   * Format number with commas
   * @param {number} num - Number to format
   * @returns {string} Formatted number string
   */
  formatNumber: (num) => {
    if (num === null || num === undefined) return '';
    return new Intl.NumberFormat().format(num);
  },

  /**
   * Calculate percentage
   * @param {number} value - Value to calculate percentage for
   * @param {number} total - Total value
   * @param {number} decimals - Number of decimal places (default: 2)
   * @returns {number} Percentage value
   */
  calculatePercentage: (value, total, decimals = 2) => {
    if (total === 0) return 0;
    return Number(((value / total) * 100).toFixed(decimals));
  },

  /**
   * Round number to specified decimal places
   * @param {number} num - Number to round
   * @param {number} decimals - Number of decimal places (default: 2)
   * @returns {number} Rounded number
   */
  round: (num, decimals = 2) => {
    return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals);
  },
};

// Array utilities
export const arrayUtils = {
  /**
   * Remove duplicates from array
   * @param {array} arr - Array to remove duplicates from
   * @param {string} key - Key to use for comparison (optional)
   * @returns {array} Array without duplicates
   */
  removeDuplicates: (arr, key = null) => {
    if (!Array.isArray(arr)) return [];
    
    if (key) {
      const seen = new Set();
      return arr.filter(item => {
        const value = item[key];
        if (seen.has(value)) {
          return false;
        }
        seen.add(value);
        return true;
      });
    }
    
    return [...new Set(arr)];
  },

  /**
   * Group array by key
   * @param {array} arr - Array to group
   * @param {string} key - Key to group by
   * @returns {object} Grouped object
   */
  groupBy: (arr, key) => {
    if (!Array.isArray(arr)) return {};
    
    return arr.reduce((groups, item) => {
      const group = item[key];
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(item);
      return groups;
    }, {});
  },

  /**
   * Sort array by key
   * @param {array} arr - Array to sort
   * @param {string} key - Key to sort by
   * @param {string} direction - Sort direction ('asc' or 'desc', default: 'asc')
   * @returns {array} Sorted array
   */
  sortBy: (arr, key, direction = 'asc') => {
    if (!Array.isArray(arr)) return [];
    
    return [...arr].sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];
      
      // Handle null/undefined values
      if (aVal === null || aVal === undefined) aVal = '';
      if (bVal === null || bVal === undefined) bVal = '';
      
      // Handle string comparison
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }
      
      if (direction === 'desc') {
        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
      }
      
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    });
  },

  /**
   * Chunk array into smaller arrays
   * @param {array} arr - Array to chunk
   * @param {number} size - Size of each chunk
   * @returns {array} Array of chunks
   */
  chunk: (arr, size) => {
    if (!Array.isArray(arr)) return [];
    
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  },
};

// Object utilities
export const objectUtils = {
  /**
   * Deep clone object
   * @param {object} obj - Object to clone
   * @returns {object} Cloned object
   */
  deepClone: (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => objectUtils.deepClone(item));
    if (typeof obj === 'object') {
      const clonedObj = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          clonedObj[key] = objectUtils.deepClone(obj[key]);
        }
      }
      return clonedObj;
    }
  },

  /**
   * Pick specific keys from object
   * @param {object} obj - Object to pick from
   * @param {array} keys - Array of keys to pick
   * @returns {object} Object with picked keys
   */
  pick: (obj, keys) => {
    if (!obj || typeof obj !== 'object') return {};
    
    return keys.reduce((result, key) => {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  },

  /**
   * Omit specific keys from object
   * @param {object} obj - Object to omit from
   * @param {array} keys - Array of keys to omit
   * @returns {object} Object without omitted keys
   */
  omit: (obj, keys) => {
    if (!obj || typeof obj !== 'object') return {};
    
    return Object.keys(obj).reduce((result, key) => {
      if (!keys.includes(key)) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  },

  /**
   * Check if object is empty
   * @param {object} obj - Object to check
   * @returns {boolean} True if object is empty
   */
  isEmpty: (obj) => {
    if (!obj) return true;
    if (Array.isArray(obj)) return obj.length === 0;
    if (typeof obj === 'object') return Object.keys(obj).length === 0;
    return false;
  },
};

// Storage utilities
export const storageUtils = {
  /**
   * Set item in localStorage
   * @param {string} key - Storage key
   * @param {any} value - Value to store
   */
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage item:', error);
    }
  },

  /**
   * Get item from localStorage
   * @param {string} key - Storage key
   * @param {any} defaultValue - Default value if item doesn't exist
   * @returns {any} Stored value or default value
   */
  getItem: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error getting localStorage item:', error);
      return defaultValue;
    }
  },

  /**
   * Remove item from localStorage
   * @param {string} key - Storage key
   */
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing localStorage item:', error);
    }
  },

  /**
   * Clear all localStorage
   */
  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};

// Export all utilities
export default {
  dateUtils,
  validationUtils,
  stringUtils,
  numberUtils,
  arrayUtils,
  objectUtils,
  storageUtils,
}; 