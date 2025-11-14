# SleepFine Microservices Architecture

This document provides detailed information about the microservices structure and how to run each service independently.

## 🏗️ Architecture Overview

The SleepFine backend is built using a microservices architecture with the following services:

- **API Gateway** (Port 3000) - Central entry point and routing
- **Sales Service** (Port 3001) - Order and salesman management
- **Accounts Service** (Port 3002) - Payment and financial management
- **Logistics Service** (Port 3003) - Manufacturing, gatepass, and delivery management
- **Notifications Service** (Port 3004) - Real-time notifications and messaging
- **Admin Service** (Port 3005) - System administration and reporting

## 📁 Service Structure

Each microservice follows the same structure:

```
services/
├── {service-name}/
│   ├── index.js              # Main entry point
│   ├── models/               # Database models
│   │   ├── {Entity}.js       # Mongoose schemas
│   ├── controllers/          # Request handlers
│   │   └── {service}Controller.js
│   ├── routes/               # API routes
│   │   └── {service}Routes.js
│   └── services/             # Business logic layer
│       └── {service}Service.js
```

## 🚀 Running Services Independently

### Prerequisites

1. **Database Setup**: Ensure MongoDB is running
2. **Redis Setup**: Ensure Redis is running for caching
3. **Environment Variables**: Copy and configure environment files

### Individual Service Startup

#### 1. Sales Service
```bash
cd services/sales
npm start
# or
node index.js
```
- **Port**: 3001
- **Health Check**: http://localhost:3001/health
- **API Base**: http://localhost:3001/api/v1/sales

#### 2. Accounts Service
```bash
cd services/accounts
npm start
# or
node index.js
```
- **Port**: 3002
- **Health Check**: http://localhost:3002/health
- **API Base**: http://localhost:3002/api/v1/accounts

#### 3. Logistics Service
```bash
cd services/logistics
npm start
# or
node index.js
```
- **Port**: 3003
- **Health Check**: http://localhost:3003/health
- **API Base**: http://localhost:3003/api/v1/logistics

#### 4. Notifications Service
```bash
cd services/notifications
npm start
# or
node index.js
```
- **Port**: 3004
- **Health Check**: http://localhost:3004/health
- **WebSocket**: ws://localhost:3004
- **API Base**: http://localhost:3004/api/v1/notifications

#### 5. Admin Service
```bash
cd services/admin
npm start
# or
node index.js
```
- **Port**: 3005
- **Health Check**: http://localhost:3005/health
- **API Base**: http://localhost:3005/api/v1/admin

#### 6. API Gateway
```bash
cd api-gateway
npm start
# or
node gateway.js
```
- **Port**: 3000
- **Health Check**: http://localhost:3000/health
- **API Base**: http://localhost:3000/api/v1

## 🔧 Service Configuration

### Environment Variables

Each service uses the same environment configuration structure. Key variables:

```env
# Service-specific ports
SALES_SERVICE_PORT=3001
ACCOUNTS_SERVICE_PORT=3002
LOGISTICS_SERVICE_PORT=3003
NOTIFICATIONS_SERVICE_PORT=3004
ADMIN_SERVICE_PORT=3005
API_GATEWAY_PORT=3000

# Database
MONGODB_URI=mongodb://localhost:27017/sleepfine

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d

# Kafka
KAFKA_BROKERS=localhost:9092
```

### Service Dependencies

Each service has these common dependencies:
- **Database**: MongoDB (shared)
- **Cache**: Redis (shared)
- **Message Broker**: Kafka (for inter-service communication)
- **Shared Libraries**: Authentication, validation, logging

## 📊 Service Responsibilities

### Sales Service
- **Models**: Salesman, Order
- **Key Features**:
  - Order creation and management
  - Salesman management
  - Sales reports and performance tracking
  - WhatsApp integration for order sharing
  - Customer management

### Accounts Service
- **Models**: Accountant, Payment
- **Key Features**:
  - Payment verification and management
  - Financial reporting
  - Accountant management
  - Receipt generation
  - Transaction tracking

### Logistics Service
- **Models**: Logistics, Gatepass
- **Key Features**:
  - Manufacturing status management
  - Gatepass creation and tracking
  - Quality control processes
  - Packaging management
  - Delivery coordination

### Notifications Service
- **Models**: Notification
- **Key Features**:
  - Real-time notifications via WebSocket
  - Multi-channel delivery (Email, SMS, WhatsApp, Push)
  - Notification templates
  - Delivery tracking
  - Scheduled notifications

### Admin Service
- **Models**: Admin
- **Key Features**:
  - System administration
  - User management across all services
  - Comprehensive reporting
  - System settings management
  - Audit logs

## 🔄 Inter-Service Communication

### 1. HTTP/REST APIs
Services communicate via HTTP APIs for synchronous operations.

### 2. Kafka Message Broker
Used for asynchronous communication and event-driven architecture.

### 3. WebSocket (Notifications Service)
Real-time notifications and updates.

### 4. Shared Database
MongoDB is shared across services for data consistency.

## 🛠️ Development Workflow

### 1. Local Development
```bash
# Start all services
npm run dev:all

# Start individual services
npm run dev:sales
npm run dev:accounts
npm run dev:logistics
npm run dev:notifications
npm run dev:admin
npm run dev:gateway
```

### 2. Testing
```bash
# Test all services
npm test

# Test individual services
npm run test:sales
npm run test:accounts
npm run test:logistics
npm run test:notifications
npm run test:admin
```

### 3. Docker Development
```bash
# Start all services with Docker
docker-compose up -d

# Start individual services
docker-compose up sales-service
docker-compose up accounts-service
docker-compose up logistics-service
docker-compose up notifications-service
docker-compose up admin-service
docker-compose up api-gateway
```

## 📈 Monitoring and Health Checks

### Health Check Endpoints
Each service provides a health check endpoint:
- `GET /health` - Returns service status and version

### Monitoring Tools
- **Prometheus**: Metrics collection
- **Grafana**: Visualization dashboard
- **ELK Stack**: Log aggregation and analysis
- **Express Status Monitor**: Real-time status monitoring

## 🔒 Security Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (RBAC)
- Permission-based authorization
- API key authentication for service-to-service communication

### Security Middleware
- Helmet.js for security headers
- CORS configuration
- Rate limiting
- Input validation and sanitization
- XSS protection
- SQL injection prevention

## 📝 API Documentation

### Swagger/OpenAPI
Each service includes Swagger documentation:
- **API Gateway**: http://localhost:3000/api-docs
- **Sales Service**: http://localhost:3001/api-docs
- **Accounts Service**: http://localhost:3002/api-docs
- **Logistics Service**: http://localhost:3003/api-docs
- **Notifications Service**: http://localhost:3004/api-docs
- **Admin Service**: http://localhost:3005/api-docs

## 🚀 Deployment

### Production Deployment
1. **Environment Configuration**: Set production environment variables
2. **Database Setup**: Configure production MongoDB and Redis
3. **Kafka Setup**: Configure production Kafka cluster
4. **Service Deployment**: Deploy each service independently
5. **Load Balancer**: Configure load balancer for API Gateway
6. **Monitoring**: Set up production monitoring and alerting

### Container Deployment
```bash
# Build all services
docker-compose -f docker/docker-compose.prod.yml build

# Deploy all services
docker-compose -f docker/docker-compose.prod.yml up -d

# Deploy individual services
docker-compose -f docker/docker-compose.prod.yml up -d sales-service
docker-compose -f docker/docker-compose.prod.yml up -d accounts-service
# ... etc
```

## 🔧 Troubleshooting

### Common Issues

1. **Service Won't Start**
   - Check if MongoDB and Redis are running
   - Verify environment variables are set correctly
   - Check port availability

2. **Database Connection Issues**
   - Verify MongoDB URI is correct
   - Check network connectivity
   - Ensure database permissions

3. **Inter-Service Communication Issues**
   - Verify Kafka is running
   - Check service URLs in configuration
   - Ensure proper authentication

4. **WebSocket Connection Issues**
   - Check if Notifications service is running
   - Verify WebSocket URL
   - Check authentication tokens

### Logs and Debugging
- Each service logs to `logs/` directory
- Use `npm run logs` to view service logs
- Enable debug mode with `DEBUG=*` environment variable

## 📚 Additional Resources

- [Main README](./README.md) - Complete project documentation
- [API Documentation](./docs/api.md) - Detailed API specifications
- [Deployment Guide](./docs/deployment.md) - Production deployment instructions
- [Development Guide](./docs/development.md) - Development setup and guidelines

## 🤝 Contributing

When contributing to microservices:

1. **Service Independence**: Ensure changes don't break service independence
2. **API Versioning**: Follow API versioning guidelines
3. **Testing**: Write tests for each service
4. **Documentation**: Update service-specific documentation
5. **Monitoring**: Add appropriate monitoring and logging

## 📞 Support

For issues and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review service-specific documentation
- Contact the development team 