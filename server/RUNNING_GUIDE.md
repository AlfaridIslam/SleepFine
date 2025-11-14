# 🚀 How to Run Your SleepFine Backend

## 📁 **Current Architecture**

```
sleepfine-backend/
├── package.json                    # ✅ SHARED by all services
├── api-gateway/
│   └── gateway.js                  # 🏠 Main API Gateway (Port 3000)
├── services/
│   ├── sales/
│   │   └── index.js               # 🛒 Sales service (Port 3001)
│   ├── accounts/
│   │   └── index.js               # 💰 Accounts service (Port 3002)
│   ├── logistics/
│   │   └── index.js               # 📦 Logistics service (Port 3003)
│   ├── notifications/
│   │   └── index.js               # 🔔 Notifications service (Port 3004)
│   └── admin/
│       └── index.js               # 👨‍💼 Admin service (Port 3005)
```

## 🎯 **Key Points**

✅ **Single package.json** - All services share the same dependencies
✅ **Separate server files** - Each service has its own `index.js` with `app.listen()`
✅ **Different ports** - Each service runs on a unique port
✅ **Shared code** - All services use the same shared utilities, models, etc.

## 🚀 **How to Run**

### **Method 1: Run All Services Together (Recommended)**

```bash
# 1. Install dependencies (once)
npm install

# 2. Run all services concurrently
npm run dev:all
```

**This will start:**
- 🌐 API Gateway: http://localhost:3000
- 🛒 Sales: http://localhost:3001
- 💰 Accounts: http://localhost:3002
- 📦 Logistics: http://localhost:3003
- 🔔 Notifications: http://localhost:3004
- 👨‍💼 Admin: http://localhost:3005

### **Method 2: Run Individual Services**

```bash
# Run only API Gateway
npm run dev:gateway

# Run only Sales service
npm run dev:sales

# Run only Accounts service
npm run dev:accounts

# Run only Logistics service
npm run dev:logistics

# Run only Notifications service
npm run dev:notifications

# Run only Admin service
npm run dev:admin
```

### **Method 3: Run with Docker (All-in-one)**

```bash
# Start everything with Docker
npm run docker:up
```

## 🔍 **What Each Server File Does**

### **API Gateway (`api-gateway/gateway.js`)**
- **Port**: 3000
- **Purpose**: Main entry point, routes requests to other services
- **Features**: Authentication, rate limiting, monitoring, WebSocket

### **Sales Service (`services/sales/index.js`)**
- **Port**: 3001
- **Purpose**: Handle orders, salesmen, sales reports
- **Features**: Order management, salesman CRUD, sales analytics

### **Accounts Service (`services/accounts/index.js`)**
- **Port**: 3002
- **Purpose**: Handle payments, financial reports
- **Features**: Payment verification, financial analytics

### **Logistics Service (`services/logistics/index.js`)**
- **Port**: 3003
- **Purpose**: Handle manufacturing, gatepass, delivery
- **Features**: Gatepass creation, manufacturing status, delivery tracking

### **Notifications Service (`services/notifications/index.js`)**
- **Port**: 3004
- **Purpose**: Handle real-time notifications
- **Features**: WebSocket, email, SMS, WhatsApp notifications

### **Admin Service (`services/admin/index.js`)**
- **Port**: 3005
- **Purpose**: Handle system administration
- **Features**: User management, system reports, dashboard

## 🧪 **Test Your Services**

```bash
# Test API Gateway
curl http://localhost:3000/health

# Test Sales service
curl http://localhost:3001/health

# Test Accounts service
curl http://localhost:3002/health

# Test Logistics service
curl http://localhost:3003/health

# Test Notifications service
curl http://localhost:3004/health

# Test Admin service
curl http://localhost:3005/health
```

## 📊 **Service URLs**

| Service | Port | URL | Health Check |
|---------|------|-----|--------------|
| API Gateway | 3000 | http://localhost:3000 | `/health` |
| Sales | 3001 | http://localhost:3001 | `/health` |
| Accounts | 3002 | http://localhost:3002 | `/health` |
| Logistics | 3003 | http://localhost:3003 | `/health` |
| Notifications | 3004 | http://localhost:3004 | `/health` |
| Admin | 3005 | http://localhost:3005 | `/health` |

## 🔧 **Development Workflow**

1. **Start all services:**
   ```bash
   npm run dev:all
   ```

2. **Make changes to any service** (they auto-reload with nodemon)

3. **Test individual endpoints:**
   ```bash
   # Test Sales API
   curl http://localhost:3001/api/v1/sales/orders
   
   # Test Accounts API
   curl http://localhost:3002/api/v1/accounts/payments
   ```

4. **View logs** (each service logs separately)

## 🐳 **Docker Alternative**

If you prefer Docker:

```bash
# Start everything with Docker
npm run docker:up

# View logs
docker-compose -f docker/docker-compose.yml logs -f

# Stop everything
npm run docker:down
```

## ❓ **Common Questions**

**Q: Do I need to run all services?**
A: No, you can run individual services for development. But for full functionality, run all.

**Q: What if a port is already in use?**
A: Change the port in the service's `index.js` file or kill the process using that port.

**Q: How do I add new services?**
A: Create a new folder in `services/`, add an `index.js`, and add scripts to `package.json`.

**Q: Can I run services on different machines?**
A: Yes! Each service is independent. Just update the URLs in the API Gateway. 