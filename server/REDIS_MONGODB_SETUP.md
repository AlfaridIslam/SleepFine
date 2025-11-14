# 🔴 Redis & MongoDB Setup Guide

## 1. 🔴 Redis Setup

### **Option A: Install Redis Locally (Recommended for Development)**

#### **Windows:**
```bash
# Download Redis for Windows from: https://github.com/microsoftarchive/redis/releases
# Or use WSL2 and install Redis in Ubuntu

# Using Chocolatey
choco install redis-64

# Start Redis
redis-server
```

#### **macOS:**
```bash
# Using Homebrew
brew install redis

# Start Redis
brew services start redis

# Or start manually
redis-server
```

#### **Linux (Ubuntu/Debian):**
```bash
# Install Redis
sudo apt update
sudo apt install redis-server

# Start Redis
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Check status
sudo systemctl status redis-server
```

### **Option B: Use Docker (Easiest)**
```bash
# Start Redis with Docker
docker run -d --name redis -p 6379:6379 redis:7.2-alpine

# Or use the existing docker-compose
npm run docker:up
```

### **Test Redis Connection:**
```bash
# Test Redis CLI
redis-cli ping
# Should return: PONG

# Test from Node.js
node -e "
const Redis = require('redis');
const client = Redis.createClient();
client.on('connect', () => console.log('Redis connected!'));
client.connect();
"
```

## 2. 🗄️ MongoDB Setup

### **Option A: Install MongoDB Locally**

#### **Windows:**
```bash
# Download MongoDB Community Server from: https://www.mongodb.com/try/download/community
# Install and start MongoDB service
```

#### **macOS:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

#### **Linux (Ubuntu/Debian):**
```bash
# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
```

### **Option B: Use Docker (Recommended)**
```bash
# Start MongoDB with Docker
docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password123 mongo:7.0

# Or use the existing docker-compose
npm run docker:up
```

### **Option C: Use MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Update the `.env` file

## 3. 📁 .env Files Setup

### **Current .env Files:**
```
config/env/
├── dev.env    # Development environment
└── prod.env   # Production environment
```

### **How to Use:**

#### **Method 1: Copy dev.env to root (Recommended)**
```bash
# Copy development environment file
cp config/env/dev.env .env

# Now you can run your services
npm run dev:all
```

#### **Method 2: Set NODE_ENV**
```bash
# Set environment and run
NODE_ENV=development npm run dev:all
```

### **Update MongoDB Connection:**

#### **For Local MongoDB:**
```bash
# In .env file
MONGODB_URI=mongodb://localhost:27017/sleepfine_dev
```

#### **For MongoDB Atlas:**
```bash
# In .env file
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sleepfine_dev
```

#### **For Docker MongoDB:**
```bash
# In .env file
MONGODB_URI=mongodb://admin:password123@localhost:27017/sleepfine_dev
```

## 4. 🚀 Quick Start Commands

### **Setup Everything:**
```bash
# 1. Copy environment file
cp config/env/dev.env .env

# 2. Install dependencies
npm install

# 3. Start Redis (if not using Docker)
redis-server

# 4. Start MongoDB (if not using Docker)
mongod

# 5. Start all services
npm run dev:all
```

### **Or Use Docker (Easiest):**
```bash
# 1. Copy environment file
cp config/env/dev.env .env

# 2. Install dependencies
npm install

# 3. Start everything with Docker
npm run docker:up
```

## 5. 🧪 Test Your Setup

### **Test Redis:**
```bash
# Test Redis connection
redis-cli ping
# Should return: PONG
```

### **Test MongoDB:**
```bash
# Test MongoDB connection
mongosh mongodb://localhost:27017/sleepfine_dev
# Should connect successfully
```

### **Test Services:**
```bash
# Test API Gateway
curl http://localhost:3000/health

# Test Sales service
curl http://localhost:3001/health

# Test all services
curl http://localhost:3000/health
curl http://localhost:3001/health
curl http://localhost:3002/health
curl http://localhost:3003/health
curl http://localhost:3004/health
curl http://localhost:3005/health
```

## 6. 🔧 Redis Caching Usage

### **Redis is already configured for:**
- ✅ **API Response Caching** - Cache frequently accessed data
- ✅ **Session Storage** - Store user sessions
- ✅ **Rate Limiting** - Track API usage
- ✅ **Real-time Data** - Store temporary data

### **Example Usage in Your Code:**
```javascript
import { cacheService } from '../config/db.js';

// Cache API response
const cachedData = await cacheService.get('api:orders:123');
if (cachedData) {
  return cachedData;
}

// If not cached, fetch from database
const data = await Order.findById('123');
await cacheService.set('api:orders:123', data, 3600); // Cache for 1 hour
return data;
```

## 7. 🐛 Troubleshooting

### **Redis Issues:**
```bash
# Check if Redis is running
redis-cli ping

# Start Redis if not running
redis-server

# Check Redis logs
redis-cli monitor
```

### **MongoDB Issues:**
```bash
# Check if MongoDB is running
mongosh --eval "db.adminCommand('ping')"

# Start MongoDB if not running
mongod

# Check MongoDB logs
tail -f /var/log/mongodb/mongod.log
```

### **Port Conflicts:**
```bash
# Check what's using port 6379 (Redis)
lsof -i :6379

# Check what's using port 27017 (MongoDB)
lsof -i :27017

# Kill process if needed
kill -9 <PID>
```

## 8. 📊 Environment Variables Summary

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/sleepfine_dev` |
| `REDIS_HOST` | Redis host | `localhost` |
| `REDIS_PORT` | Redis port | `6379` |
| `REDIS_PASSWORD` | Redis password | `` (empty) |
| `CACHE_TTL` | Cache time-to-live | `3600` (1 hour) |

## 🎯 **Recommendation**

**For Development:**
1. Use Docker (easiest): `npm run docker:up`
2. Or install Redis & MongoDB locally
3. Copy `config/env/dev.env` to `.env`
4. Run `npm run dev:all`

**For Production:**
1. Use MongoDB Atlas
2. Use Redis Cloud or AWS ElastiCache
3. Use `config/env/prod.env` 