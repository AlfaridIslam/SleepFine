import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { USER_ROLES, ROLE_PERMISSIONS, STORAGE_KEYS } from '../../constants';
import { storageUtils } from '../../utils';

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
  permissions: [],
  role: null,
};

// Action types
const AUTH_ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  UPDATE_USER: 'UPDATE_USER',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        permissions: action.payload.permissions || [],
        role: action.payload.user.role,
      };
    
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
        permissions: [],
        role: null,
      };
    
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        permissions: [],
        role: null,
      };
    
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    
    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    
    case AUTH_ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    
    case AUTH_ACTIONS.REFRESH_TOKEN:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    
    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing auth token on mount
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = storageUtils.getItem(STORAGE_KEYS.AUTH_TOKEN);
        const userData = storageUtils.getItem(STORAGE_KEYS.USER_DATA);
        
        if (token && userData) {
          // Validate token and set user
          dispatch({
            type: AUTH_ACTIONS.LOGIN_SUCCESS,
            payload: {
              user: userData,
              permissions: ROLE_PERMISSIONS[userData.role] || [],
            },
          });
        } else {
          dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      dispatch({ type: AUTH_ACTIONS.LOGIN_START });
      
      // TODO: Replace with actual API call
      // const response = await authService.login(credentials);
      
      // Mock response for now
      const mockResponse = {
        user: {
          id: '1',
          email: credentials.email,
          firstName: 'John',
          lastName: 'Doe',
          role: USER_ROLES.ADMIN,
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        expiresIn: 3600,
      };

      const { user, accessToken, refreshToken } = mockResponse;
      
      // Store tokens and user data
      storageUtils.setItem(STORAGE_KEYS.AUTH_TOKEN, accessToken);
      storageUtils.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
      storageUtils.setItem(STORAGE_KEYS.USER_DATA, user);
      
      dispatch({
        type: AUTH_ACTIONS.LOGIN_SUCCESS,
        payload: {
          user,
          permissions: ROLE_PERMISSIONS[user.role] || [],
        },
      });
      
      return { success: true };
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.LOGIN_FAILURE,
        payload: error.message || 'Login failed',
      });
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    try {
      // Clear stored data
      storageUtils.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      storageUtils.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
      storageUtils.removeItem(STORAGE_KEYS.USER_DATA);
      
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Update user function
  const updateUser = (userData) => {
    try {
      const updatedUser = { ...state.user, ...userData };
      storageUtils.setItem(STORAGE_KEYS.USER_DATA, updatedUser);
      
      dispatch({
        type: AUTH_ACTIONS.UPDATE_USER,
        payload: userData,
      });
    } catch (error) {
      console.error('Update user error:', error);
    }
  };

  // Check permission function
  const hasPermission = (permission) => {
    if (!state.isAuthenticated || !state.permissions) return false;
    return state.permissions.includes(permission);
  };

  // Check role function
  const hasRole = (role) => {
    if (!state.isAuthenticated || !state.role) return false;
    return state.role === role;
  };

  // Check if user has any of the specified roles
  const hasAnyRole = (roles) => {
    if (!state.isAuthenticated || !state.role) return false;
    return roles.includes(state.role);
  };

  // Get user's role-based dashboard path
  const getDashboardPath = () => {
    if (!state.role) return '/';
    
    const rolePaths = {
      [USER_ROLES.ADMIN]: '/admin',
      [USER_ROLES.SALESMAN]: '/salesman',
      [USER_ROLES.ACCOUNTANT]: '/accountant',
      [USER_ROLES.LOGISTICS]: '/logistics',
      [USER_ROLES.VENDOR]: '/vendor',
    };
    
    return rolePaths[state.role] || '/';
  };

  // Refresh token function
  const refreshToken = async () => {
    try {
      const refreshToken = storageUtils.getItem(STORAGE_KEYS.REFRESH_TOKEN);
      
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }
      
      // TODO: Replace with actual API call
      // const response = await authService.refreshToken(refreshToken);
      
      // Mock response for now
      const mockResponse = {
        accessToken: 'new-mock-access-token',
        refreshToken: 'new-mock-refresh-token',
        expiresIn: 3600,
      };
      
      storageUtils.setItem(STORAGE_KEYS.AUTH_TOKEN, mockResponse.accessToken);
      storageUtils.setItem(STORAGE_KEYS.REFRESH_TOKEN, mockResponse.refreshToken);
      
      dispatch({
        type: AUTH_ACTIONS.REFRESH_TOKEN,
        payload: mockResponse,
      });
      
      return { success: true };
    } catch (error) {
      console.error('Token refresh error:', error);
      logout();
      return { success: false, error: error.message };
    }
  };

  // Context value
  const value = {
    // State
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    error: state.error,
    permissions: state.permissions,
    role: state.role,
    
    // Actions
    login,
    logout,
    updateUser,
    refreshToken,
    
    // Utility functions
    hasPermission,
    hasRole,
    hasAnyRole,
    getDashboardPath,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

// Export action types for external use
export { AUTH_ACTIONS }; 