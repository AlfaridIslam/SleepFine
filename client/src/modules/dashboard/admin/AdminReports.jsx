import React from 'react';
import { useAuth } from '../../auth/AuthContext';
import Button from '../../../components/common/Button';

const AdminReports = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">Generate and view business reports</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Available Reports</h2>
            <Button variant="primary" size="md">
              Generate Report
            </Button>
          </div>

          {/* Placeholder content */}
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📊</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reports & Analytics</h3>
            <p className="text-gray-600 mb-6">
              This page will contain reporting and analytics functionality including:
            </p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              <li>• Sales reports and revenue analytics</li>
              <li>• Order fulfillment and delivery reports</li>
              <li>• Customer behavior and demographics</li>
              <li>• Inventory and stock level reports</li>
              <li>• Financial statements and P&L reports</li>
              <li>• Custom report builder and scheduling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReports; 