import React, { Suspense, lazy } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { USER_ROLES, ROUTES } from '../constants';

// Lazy load admin components for code splitting
const AdminDashboard = lazy(() => import('../modules/dashboard/admin/AdminDashboard'));
const AdminUsers = lazy(() => import('../modules/auth/AdminUsers'));
const AdminProducts = lazy(() => import('../modules/products/AdminProducts'));
const AdminOrders = lazy(() => import('../modules/orders/AdminOrders'));
const AdminInvoices = lazy(() => import('../modules/invoices/AdminInvoices'));
const AdminGatepass = lazy(() => import('../modules/gatepass/AdminGatepass'));
const AdminReports = lazy(() => import('../modules/dashboard/admin/AdminReports'));
const AdminSettings = lazy(() => import('../modules/dashboard/admin/AdminSettings'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="flex items-center space-x-2">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="text-gray-600">Loading...</span>
    </div>
  </div>
);

// Wrapper component for Suspense
const AdminRoutesWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

// Admin routes configuration for createBrowserRouter
export const adminRoutes = [
  {
    path: "/admin",
    element: (
      <AdminRoutesWrapper>
        <PrivateRoute requiredRoles={[USER_ROLES.ADMIN]}>
          <AdminDashboard />
        </PrivateRoute>
      </AdminRoutesWrapper>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <AdminRoutesWrapper>
        <PrivateRoute 
          requiredRoles={[USER_ROLES.ADMIN]}
          requiredPermissions={['users:read']}
        >
          <AdminUsers />
        </PrivateRoute>
      </AdminRoutesWrapper>
    ),
  },
  {
    path: "/admin/products",
    element: (
      <AdminRoutesWrapper>
        <PrivateRoute 
          requiredRoles={[USER_ROLES.ADMIN]}
          requiredPermissions={['products:read']}
        >
          <AdminProducts />
        </PrivateRoute>
      </AdminRoutesWrapper>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <AdminRoutesWrapper>
        <PrivateRoute 
          requiredRoles={[USER_ROLES.ADMIN]}
          requiredPermissions={['orders:read']}
        >
          <AdminOrders />
        </PrivateRoute>
      </AdminRoutesWrapper>
    ),
  },
  {
    path: "/admin/invoices",
    element: (
      <AdminRoutesWrapper>
        <PrivateRoute 
          requiredRoles={[USER_ROLES.ADMIN]}
          requiredPermissions={['invoices:read']}
        >
          <AdminInvoices />
        </PrivateRoute>
      </AdminRoutesWrapper>
    ),
  },
  {
    path: "/admin/gatepass",
    element: (
      <AdminRoutesWrapper>
        <PrivateRoute 
          requiredRoles={[USER_ROLES.ADMIN]}
          requiredPermissions={['gatepass:read']}
        >
          <AdminGatepass />
        </PrivateRoute>
      </AdminRoutesWrapper>
    ),
  },
  {
    path: "/admin/reports",
    element: (
      <AdminRoutesWrapper>
        <PrivateRoute 
          requiredRoles={[USER_ROLES.ADMIN]}
          requiredPermissions={['reports:read']}
        >
          <AdminReports />
        </PrivateRoute>
      </AdminRoutesWrapper>
    ),
  },
  {
    path: "/admin/settings",
    element: (
      <AdminRoutesWrapper>
        <PrivateRoute 
          requiredRoles={[USER_ROLES.ADMIN]}
          requiredPermissions={['settings:read']}
        >
          <AdminSettings />
        </PrivateRoute>
      </AdminRoutesWrapper>
    ),
  },
  {
    path: "/admin/*",
    element: <Navigate to="/admin" replace />,
  },
];

// Keep the original component for backward compatibility
const AdminRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Admin Dashboard */}
        <Route
          path={ROUTES.ADMIN.DASHBOARD}
          element={
            <PrivateRoute requiredRoles={[USER_ROLES.ADMIN]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* Admin Users Management */}
        <Route
          path={ROUTES.ADMIN.USERS}
          element={
            <PrivateRoute 
              requiredRoles={[USER_ROLES.ADMIN]}
              requiredPermissions={['users:read']}
            >
              <AdminUsers />
            </PrivateRoute>
          }
        />

        {/* Admin Products Management */}
        <Route
          path={ROUTES.ADMIN.PRODUCTS}
          element={
            <PrivateRoute 
              requiredRoles={[USER_ROLES.ADMIN]}
              requiredPermissions={['products:read']}
            >
              <AdminProducts />
            </PrivateRoute>
          }
        />

        {/* Admin Orders Management */}
        <Route
          path={ROUTES.ADMIN.ORDERS}
          element={
            <PrivateRoute 
              requiredRoles={[USER_ROLES.ADMIN]}
              requiredPermissions={['orders:read']}
            >
              <AdminOrders />
            </PrivateRoute>
          }
        />

        {/* Admin Invoices Management */}
        <Route
          path={ROUTES.ADMIN.INVOICES}
          element={
            <PrivateRoute 
              requiredRoles={[USER_ROLES.ADMIN]}
              requiredPermissions={['invoices:read']}
            >
              <AdminInvoices />
            </PrivateRoute>
          }
        />

        {/* Admin Gatepass Management */}
        <Route
          path={ROUTES.ADMIN.GATEPASS}
          element={
            <PrivateRoute 
              requiredRoles={[USER_ROLES.ADMIN]}
              requiredPermissions={['gatepass:read']}
            >
              <AdminGatepass />
            </PrivateRoute>
          }
        />

        {/* Admin Reports */}
        <Route
          path={ROUTES.ADMIN.REPORTS}
          element={
            <PrivateRoute 
              requiredRoles={[USER_ROLES.ADMIN]}
              requiredPermissions={['reports:read']}
            >
              <AdminReports />
            </PrivateRoute>
          }
        />

        {/* Admin Settings */}
        <Route
          path={ROUTES.ADMIN.SETTINGS}
          element={
            <PrivateRoute 
              requiredRoles={[USER_ROLES.ADMIN]}
              requiredPermissions={['settings:read']}
            >
              <AdminSettings />
            </PrivateRoute>
          }
        />

        {/* Default redirect for admin routes */}
        <Route
          path="/admin/*"
          element={<Navigate to={ROUTES.ADMIN.DASHBOARD} replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes; 