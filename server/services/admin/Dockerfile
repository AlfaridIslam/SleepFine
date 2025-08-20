# Multi-stage build for Admin Service
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Development stage
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 3005
CMD ["npm", "run", "dev:admin"]

# Production stage
FROM base AS production
# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Copy application code
COPY --chown=nodejs:nodejs . .

# Create necessary directories
RUN mkdir -p logs uploads && chown -R nodejs:nodejs logs uploads

# Switch to non-root user
USER nodejs

EXPOSE 3005
CMD ["npm", "start:admin"]

# Security scan stage
FROM base AS security-scan
RUN npm ci
RUN npm audit --audit-level=moderate
RUN npm audit fix --force

# Final production stage
FROM production AS final
# Optimize for production
RUN npm prune --production
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3005/health || exit 1 