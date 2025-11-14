import React from 'react';
import { useAuth } from '../auth/AuthContext';
import Button from '../../components/common/Button';

const AdminProducts = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600 mt-2">Manage product catalog and inventory</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">All Products</h2>
            <Button variant="primary" size="md">
              Add New Product
            </Button>
          </div>

          {/* Placeholder content */}
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Product Management</h3>
            <p className="text-gray-600 mb-6">
              This page will contain product management functionality including:
            </p>
            <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
              <li>• View all products in catalog</li>
              <li>• Add new products with categories</li>
              <li>• Edit product details and pricing</li>
              <li>• Manage product inventory levels</li>
              <li>• Product image and media management</li>
              <li>• Product variants and specifications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts; 