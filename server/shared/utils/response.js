/**
 * Standardized API Response Utility
 * Provides consistent response format across all services
 */

class ApiResponse {
  /**
   * Success response
   * @param {Object} res - Express response object
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Success message
   * @param {*} data - Response data
   * @param {Object} meta - Additional metadata
   */
  static success(res, statusCode = 200, message = 'Success', data = null, meta = {}) {
    const response = {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
      ...meta,
    };

    return res.status(statusCode).json(response);
  }

  /**
   * Error response
   * @param {Object} res - Express response object
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Error message
   * @param {*} errors - Error details
   * @param {Object} meta - Additional metadata
   */
  static error(res, statusCode = 500, message = 'Internal Server Error', errors = null, meta = {}) {
    const response = {
      success: false,
      message,
      errors,
      timestamp: new Date().toISOString(),
      ...meta,
    };

    return res.status(statusCode).json(response);
  }

  /**
   * Created response (201)
   * @param {Object} res - Express response object
   * @param {string} message - Success message
   * @param {*} data - Created resource data
   * @param {Object} meta - Additional metadata
   */
  static created(res, message = 'Resource created successfully', data = null, meta = {}) {
    return this.success(res, 201, message, data, meta);
  }

  /**
   * No content response (204)
   * @param {Object} res - Express response object
   */
  static noContent(res) {
    return res.status(204).send();
  }

  /**
   * Bad request response (400)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {*} errors - Validation errors
   */
  static badRequest(res, message = 'Bad Request', errors = null) {
    return this.error(res, 400, message, errors);
  }

  /**
   * Unauthorized response (401)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   */
  static unauthorized(res, message = 'Unauthorized') {
    return this.error(res, 401, message);
  }

  /**
   * Forbidden response (403)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   */
  static forbidden(res, message = 'Forbidden') {
    return this.error(res, 403, message);
  }

  /**
   * Not found response (404)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   */
  static notFound(res, message = 'Resource not found') {
    return this.error(res, 404, message);
  }

  /**
   * Conflict response (409)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {*} errors - Conflict details
   */
  static conflict(res, message = 'Conflict', errors = null) {
    return this.error(res, 409, message, errors);
  }

  /**
   * Validation error response (422)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {*} errors - Validation errors
   */
  static validationError(res, message = 'Validation failed', errors = null) {
    return this.error(res, 422, message, errors);
  }

  /**
   * Internal server error response (500)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   * @param {*} errors - Error details
   */
  static internalError(res, message = 'Internal Server Error', errors = null) {
    return this.error(res, 500, message, errors);
  }

  /**
   * Service unavailable response (503)
   * @param {Object} res - Express response object
   * @param {string} message - Error message
   */
  static serviceUnavailable(res, message = 'Service Unavailable') {
    return this.error(res, 503, message);
  }

  /**
   * Paginated response
   * @param {Object} res - Express response object
   * @param {string} message - Success message
   * @param {Array} data - Array of items
   * @param {Object} pagination - Pagination info
   * @param {Object} meta - Additional metadata
   */
  static paginated(res, message = 'Data retrieved successfully', data = [], pagination = {}, meta = {}) {
    const response = {
      success: true,
      message,
      data,
      pagination: {
        page: pagination.page || 1,
        limit: pagination.limit || 10,
        total: pagination.total || 0,
        totalPages: pagination.totalPages || 0,
        hasNext: pagination.hasNext || false,
        hasPrev: pagination.hasPrev || false,
      },
      timestamp: new Date().toISOString(),
      ...meta,
    };

    return res.status(200).json(response);
  }

  /**
   * File download response
   * @param {Object} res - Express response object
   * @param {Buffer} fileBuffer - File buffer
   * @param {string} filename - Filename
   * @param {string} contentType - Content type
   */
  static fileDownload(res, fileBuffer, filename, contentType = 'application/octet-stream') {
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Length', fileBuffer.length);
    return res.send(fileBuffer);
  }

  /**
   * Health check response
   * @param {Object} res - Express response object
   * @param {Object} healthData - Health check data
   */
  static healthCheck(res, healthData = {}) {
    const response = {
      success: true,
      message: 'Service is healthy',
      data: {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        ...healthData,
      },
    };

    return res.status(200).json(response);
  }
}

export default ApiResponse; 