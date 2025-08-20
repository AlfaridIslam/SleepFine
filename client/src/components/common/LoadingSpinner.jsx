import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'blue', 
  text = 'Loading...', 
  showText = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const colorClasses = {
    blue: 'border-blue-600',
    green: 'border-green-600',
    red: 'border-red-600',
    yellow: 'border-yellow-600',
    gray: 'border-gray-600',
    white: 'border-white',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex items-center space-x-2">
        <div 
          className={`animate-spin rounded-full border-2 border-gray-300 border-t-2 ${sizeClasses[size]} ${colorClasses[color]}`}
        />
        {showText && text && (
          <span className="text-gray-600 text-sm">{text}</span>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner; 