# SleepFine Backend Setup Guide

This guide covers the complete setup for your SleepFine microservices backend, addressing package management, Docker configuration, and database setup.

## 📦 Package Management

### Single Package.json Approach (Recommended)

We're using a **single `package.json`** at the root level for all services. This approach is recommended because:

✅ **Advantages:**
- Simpler dependency management
- Faster installation (`npm install` once)
- Easier version control
- Shared dependencies across services
- Unified testing and linting

❌ **Disadvantages:**
- Less microservice isolation
- Larger node_modules folder

### Installation

```bash
# Install all dependencies
npm install

# Install only production dependencies
npm ci --only=production
```

### Running Services

```bash
# Run individual services
npm run start:gateway    # API Gateway (Port 3000)
npm run start:sales      # Sales Service (Port 3001)
npm run start:accounts   # Accounts Service (Port 3002)
npm run start:logistics  # Logistics Service (Port 3003)
npm run start:notifications # Notifications Service (Port 3004)
npm run start:admin      # Admin Service (Port 3005)

# Run all services concurrently
npm run start:all

# Development mode (with auto-reload)
npm run dev:gateway
npm run dev:sales
npm run dev:accounts
npm run dev:logistics
npm run dev:notifications
npm run dev:admin

# Run all services in development mode
npm run dev:all
```

## 🐳 Docker Setup

### Development Setup (Recommended)

**Use Docker Desktop for local development:**

1. **Install Docker Desktop:**
   - Download from [Docker Desktop](https://www.docker.com/products/docker-desktop/)
   - Install and start Docker Desktop
   - Ensure Docker is running

2. **Build and run all services:**
   ```bash
   # Build all services
   npm run docker:build
   
   # Start all services
   npm run docker:up
   
   # Stop all services
   npm run docker:down
   
   # View logs
   docker-compose -f docker/docker-compose.yml logs -f
   ```

3. **Individual service management:**
   ```bash
   # Start specific service
   docker-compose -f docker/docker-compose.yml up sales
   
   # Rebuild specific service
   docker-compose -f docker/docker-compose.yml build sales
   
   # View service logs
   docker-compose -f docker/docker-compose.yml logs sales
   ```

### Production Setup

**Use Docker Hub for production:**

1. **Build production images:**
   ```bash
   # Build all production images
   npm run docker:build:all
   
   # Tag images for Docker Hub
   docker tag sleepfine-api-gateway your-dockerhub-username/sleepfine-api-gateway:latest
   docker tag sleepfine-sales your-dockerhub-username/sleepfine-sales:latest
   docker tag sleepfine-accounts your-dockerhub-username/sleepfine-accounts:latest
   docker tag sleepfine-logistics your-dockerhub-username/sleepfine-logistics:latest
   docker tag sleepfine-notifications your-dockerhub-username/sleepfine-notifications:latest
   docker tag sleepfine-admin your-dockerhub-username/sleepfine-admin:latest
   ```

2. **Push to Docker Hub:**
   ```bash
   docker push your-dockerhub-username/sleepfine-api-gateway:latest
   docker push your-dockerhub-username/sleepfine-sales:latest
   docker push your-dockerhub-username/sleepfine-accounts:latest
   docker push your-dockerhub-username/sleepfine-logistics:latest
   docker push your-dockerhub-username/sleepfine-notifications:latest
   docker push your-dockerhub-username/sleepfine-admin:latest
   ```

### Docker Compose vs Individual Dockerfiles

**Current Setup:**
- ✅ **Docker Compose** for development (easier orchestration)
- ✅ **Individual Dockerfiles** for each service (production-ready)
- ✅ **Multi-stage builds** for optimization

**Benefits:**
- Development: Easy local setup with `docker-compose up`
- Production: Independent service deployment
- Security: Non-root users, security scanning
- Optimization: Multi-stage builds reduce image size

## 🗄️ MongoDB Setup

### Development (Recommended)

**Use local MongoDB via Docker Compose:**

✅ **Advantages:**
- Faster development
- No network latency
- Offline development
- Easy data reset
- No costs

```bash
# MongoDB is already configured in docker-compose.yml
# Runs on localhost:27017
# Database: sleepfine_dev
# Username: admin
# Password: password123
```

### Production (Recommended)

**Use MongoDB Atlas:**

1. **Create Atlas Cluster:**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free cluster (M0 tier)
   - Configure network access (IP whitelist)
   - Create database user

2. **Update Environment Variables:**
   ```bash
   # In config/env/prod.env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sleepfine_prod
   ```

3. **Benefits:**
   - Managed service (backups, monitoring)
   - Global distribution
   - Automatic scaling
   - Security features
   - Professional support

## 🚀 Quick Start Guide

### Option 1: Local Development (No Docker)

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp config/env/dev.env .env

# 3. Start MongoDB locally (if not using Docker)
# Install MongoDB Community Edition

# 4. Start Redis locally (if not using Docker)
# Install Redis

# 5. Start services
npm run dev:all
```

### Option 2: Docker Development (Recommended)

```bash
# 1. Install Docker Desktop

# 2. Clone repository
git clone <your-repo>
cd sleepfine-backend

# 3. Install dependencies
npm install

# 4. Start all services
npm run docker:up

# 5. Access services
# API Gateway: http://localhost:3000
# Sales: http://localhost:3001
# Accounts: http://localhost:3002
# Logistics: http://localhost:3003
# Notifications: http://localhost:3004
# Admin: http://localhost:3005
# MongoDB: localhost:27017
# Redis: localhost:6379
# Kafka: localhost:9092
# Grafana: http://localhost:3000
# Prometheus: http://localhost:9090
# Jenkins: http://localhost:8081
```

## 🔧 Service Ports

| Service | Port | Health Check |
|---------|------|--------------|
| API Gateway | 3000 | `/health` |
| Sales | 3001 | `/health` |
| Accounts | 3002 | `/health` |
| Logistics | 3003 | `/health` |
| Notifications | 3004 | `/health` |
| Admin | 3005 | `/health` |
| MongoDB | 27017 | - |
| Redis | 6379 | - |
| Kafka | 9092 | - |
| Grafana | 3000 | - |
| Prometheus | 9090 | - |
| Jenkins | 8081 | - |

## 📊 Monitoring & Tools

### Development Tools
- **Grafana**: http://localhost:3000 (admin/admin)
- **Prometheus**: http://localhost:9090
- **Kafka UI**: http://localhost:8080
- **Jenkins**: http://localhost:8081
- **SonarQube**: http://localhost:9000

### Health Checks
```bash
# Check all services
curl http://localhost:3000/health  # API Gateway
curl http://localhost:3001/health  # Sales
curl http://localhost:3002/health  # Accounts
curl http://localhost:3003/health  # Logistics
curl http://localhost:3004/health  # Notifications
curl http://localhost:3005/health  # Admin
```

## 🔒 Security Considerations

### Development
- Use `.env` files (already in `.gitignore`)
- Local MongoDB with basic auth
- Docker containers with non-root users
- Rate limiting enabled

### Production
- Use MongoDB Atlas with proper authentication
- Implement proper JWT secrets
- Use HTTPS everywhere
- Enable all security middleware
- Regular security audits

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Find process using port
   lsof -i :3000
   
   # Kill process
   kill -9 <PID>
   ```

2. **Docker build fails:**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild
   npm run docker:build
   ```

3. **MongoDB connection fails:**
   ```bash
   # Check if MongoDB is running
   docker-compose -f docker/docker-compose.yml ps mongodb
   
   # Check logs
   docker-compose -f docker/docker-compose.yml logs mongodb
   ```

4. **Services not starting:**
   ```bash
   # Check all logs
   docker-compose -f docker/docker-compose.yml logs
   
   # Check specific service
   docker-compose -f docker/docker-compose.yml logs api-gateway
   ```

## 📝 Next Steps

1. **Implement Business Logic**: Fill in the placeholder controllers and services
2. **Add Tests**: Write unit and integration tests
3. **Set up CI/CD**: Configure Jenkins pipelines
4. **Production Deployment**: Set up AWS infrastructure
5. **Monitoring**: Configure alerts and dashboards

## 🤝 Support

For issues and questions:
- Check the logs: `docker-compose -f docker/docker-compose.yml logs`
- Review the `MICROSERVICES_README.md` for detailed architecture
- Check the main `README.md` for general information 