import React from 'react';
import { useAuth } from './AuthContext';
import Button from '../../components/common/Button';

const AdminUsers = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-2">Manage system users and their permissions</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">All Users</h2>
            <Button variant="primary" size="md">
              Add New User
            </Button>
          </div>

          {/* Placeholder content */}
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">👥</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">User Management</h3>
            <p className="text-gray-600 mb-6">
              This page will contain user management functionality including:
            </p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              <li>• View all system users</li>
              <li>• Add new users with role assignments</li>
              <li>• Edit user permissions and roles</li>
              <li>• Deactivate/reactivate user accounts</li>
              <li>• User activity logs and audit trails</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers; 