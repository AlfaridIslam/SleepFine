# Multi-stage build for production optimization
FROM node:18-alpine AS base

# Install dependencies for node-gyp
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Development stage
FROM base AS development

# Install development dependencies
RUN npm ci

# Copy source code
COPY . .

# Create necessary directories
RUN mkdir -p logs uploads

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start development server
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Copy source code
COPY . .

# Create necessary directories and set permissions
RUN mkdir -p logs uploads && \
    chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start production server
CMD ["npm", "start"]

# Security scanning stage
FROM production AS security-scan

# Install security scanning tools
USER root
RUN apk add --no-cache curl

# Run security scans
RUN npm audit --audit-level=moderate || true

# Switch back to non-root user
USER nodejs

# Final production image
FROM production AS final

# Add labels for better maintainability
LABEL maintainer="SleepFine Team <team@sleepfine.com>"
LABEL version="1.0.0"
LABEL description="SleepFine API Gateway"
LABEL org.opencontainers.image.source="https://github.com/sleepfine/backend"

# Security: Remove unnecessary files
RUN rm -rf /app/tests /app/docs /app/.git

# Security: Set proper file permissions
RUN find /app -type f -exec chmod 644 {} \; && \
    find /app -type d -exec chmod 755 {} \; && \
    chmod +x /app/api-gateway/gateway.js

# Security: Use non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start the application
CMD ["npm", "start"] 