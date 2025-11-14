import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../modules/auth/AuthContext';
import { ROUTES } from '../constants';

const PrivateRoute = ({ 
  children, 
  requiredPermissions = [], 
  requiredRoles = [], 
  fallbackPath = ROUTES.LOGIN 
}) => {
  const { isAuthenticated, isLoading, hasPermission, hasRole, hasAnyRole } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={fallbackPath} state={{ from: location }} replace />;
  }

  // Check role requirements
  if (requiredRoles.length > 0 && !hasAnyRole(requiredRoles)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">403</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Forbidden</h1>
          <p className="text-gray-600 mb-4">
            You don't have the required role to access this page.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Check permission requirements
  if (requiredPermissions.length > 0) {
    const hasAllPermissions = requiredPermissions.every(permission => 
      hasPermission(permission)
    );

    if (!hasAllPermissions) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-red-600 text-6xl mb-4">403</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Forbidden</h1>
            <p className="text-gray-600 mb-4">
              You don't have the required permissions to access this page.
            </p>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Go Back
            </button>
          </div>
        </div>
      );
    }
  }

  // Render children if all checks pass
  return children;
};

export default PrivateRoute; 