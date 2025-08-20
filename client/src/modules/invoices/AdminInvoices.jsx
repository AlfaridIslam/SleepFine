import React from 'react';
import { useAuth } from '../auth/AuthContext';
import Button from '../../components/common/Button';

const AdminInvoices = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Invoice Management</h1>
          <p className="text-gray-600 mt-2">Manage invoices and billing</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">All Invoices</h2>
            <Button variant="primary" size="md">
              Generate Invoice
            </Button>
          </div>

          {/* Placeholder content */}
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🧾</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Invoice Management</h3>
            <p className="text-gray-600 mb-6">
              This page will contain invoice management functionality including:
            </p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              <li>• View all invoices and billing records</li>
              <li>• Generate new invoices for orders</li>
              <li>• Invoice status tracking and updates</li>
              <li>• Payment processing and reconciliation</li>
              <li>• Invoice templates and customization</li>
              <li>• Financial reporting and analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInvoices; 