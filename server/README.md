# SleepFine Microservices Backend

A comprehensive, industry-standard microservices backend for SleepFine CRM built with Node.js, Express.js, MongoDB, Redis, and Socket.IO.

## 🏗️ **Architecture Overview**

This project follows a **microservices architecture** with clean code principles, implementing a complete business workflow for order management, payment processing, logistics, and notifications.

### **Core Architecture Principles**
- **Microservices Pattern**: Independent, scalable services
- **Clean Code**: Industry-standard coding practices
- **ES6+ Modules**: `type: "module"` with `import`/`export`
- **Functional + Class-based**: Functional entry points, class-based business logic
- **Security First**: Comprehensive security middleware
- **Real-time Communication**: Socket.IO for live updates
- **Caching Strategy**: Redis for performance optimization

## 📁 **Project Structure**

```
server/
├── api-gateway/                    # API Gateway & Request Routing
├── config/                         # Configuration Management
│   ├── env/                        # Environment-specific configs
│   ├── index.js                    # Centralized config loader
│   ├── db.js                       # Database & Redis connections
│   └── websocket.js                # Socket.IO configuration
├── shared/                         # Shared Components
│   ├── middlewares/                # Common middleware
│   ├── utils/                      # Utility functions
│   └── constants/                  # Application constants
├── services/                       # Microservices
│   ├── admin/                      # Admin Service (Port: 3005)
│   ├── sales/                      # Sales Service (Port: 3001)
│   ├── accounts/                   # Accounts Service (Port: 3002)
│   ├── logistics/                  # Logistics Service (Port: 3003)
│   └── notifications/              # Notifications Service (Port: 3004)
├── docker/                         # Docker Configuration
├── scripts/                        # Utility Scripts
└── package.json                    # Dependencies & scripts
```

## 🚀 **Services Overview**

### **1. Admin Service** (Port: 3005)
**System administration and management**
- Dashboard Analytics, User Management, System Settings
- Audit Logging, Performance Monitoring, Reporting

### **2. Sales Service** (Port: 3001)
**Order management and sales tracking**
- Order Management, Salesman Management, WhatsApp Integration
- Reporting, Customer Management

### **3. Accounts Service** (Port: 3002)
**Payment processing and financial management**
- Payment Verification, Invoice Generation, Financial Reporting
- Payment Tracking, Audit Trail

### **4. Logistics Service** (Port: 3003)
**Inventory and delivery management**
- Gatepass Management, Driver Management, Quality Control
- Delivery Tracking, Inventory Management

### **5. Notifications Service** (Port: 3004)
**Real-time notifications and WhatsApp integration**
- Real-time Notifications, WhatsApp Integration, Template System
- Role-based Delivery, Notification Analytics

## 📡 **API Endpoints**

### **Admin Service** (`http://localhost:3005`)
```
👑 Dashboard & Analytics
GET  /api/v1/admin/dashboard                   - Comprehensive dashboard
GET  /api/v1/admin/stats/*                     - Various statistics

👥 User Management
GET  /api/v1/admin/users                       - Get all users
PATCH /api/v1/admin/users/:userId              - Update user

⚙️ System Settings
GET  /api/v1/admin/settings                    - Get system settings
PATCH /api/v1/admin/settings/:settingKey       - Update setting

📋 Audit & Monitoring
GET  /api/v1/admin/audit-logs                  - Get audit logs
GET  /api/v1/admin/monitoring/metrics          - Performance metrics
```

### **Sales Service** (`http://localhost:3001`)
```
📋 Order Management
POST /api/v1/sales/orders                      - Create order
GET  /api/v1/sales/orders                      - Get orders
PATCH /api/v1/sales/orders/:orderId            - Update order

👨‍💼 Salesman Management
GET  /api/v1/sales/salesmen                    - Get salesmen
GET  /api/v1/sales/salesmen/:id/performance    - Performance metrics

📱 WhatsApp Integration
POST /api/v1/sales/whatsapp/send-order         - Send order to WhatsApp
```

### **Accounts Service** (`http://localhost:3002`)
```
💰 Payment Management
GET  /api/v1/accounts/payments                 - Get payments
PATCH /api/v1/accounts/payments/:id/verify     - Verify payment

🧾 Invoice Management
POST /api/v1/accounts/invoices                 - Create invoice
GET  /api/v1/accounts/invoices                 - Get invoices

📊 Financial Reporting
POST /api/v1/accounts/reports/generate         - Generate financial report
GET  /api/v1/accounts/dashboard                - Accounts dashboard
```

### **Logistics Service** (`http://localhost:3003`)
```
🎫 Gatepass Management
POST /api/v1/logistics/gatepasses              - Create gatepass
GET  /api/v1/logistics/gatepasses              - Get gatepasses
PATCH /api/v1/logistics/gatepasses/:id         - Update gatepass

🚚 Driver Management
GET  /api/v1/logistics/drivers                 - Get drivers
GET  /api/v1/logistics/drivers/available       - Available drivers
```

### **Notifications Service** (`http://localhost:3004`)
```
🔔 Notification Management
POST /api/v1/notifications/notifications       - Create notification
GET  /api/v1/notifications/notifications       - Get notifications
PATCH /api/v1/notifications/notifications/:id/read - Mark as read

📱 WhatsApp Integration
POST /api/v1/notifications/whatsapp/order      - Order notification
POST /api/v1/notifications/whatsapp/gatepass   - Gatepass notification
GET  /api/v1/notifications/notifications/:id/whatsapp-share - Share data
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v18+)
- MongoDB (v5.0+)
- Redis (v6.0+) - Optional for development

### **Installation**

1. **Clone and install**
```bash
git clone <repository-url>
cd server
npm install
```

2. **Configure environment**
```bash
# Configure your database and Redis connections
cp config/env/dev.env.example config/env/dev.env
```

3. **Seed database**
```bash
npm run seed
```

4. **Start services**
```bash
# All services
npm run dev:all

# Individual services
npm run dev:admin      # Port: 3005
npm run dev:sales      # Port: 3001
npm run dev:accounts   # Port: 3002
npm run dev:logistics  # Port: 3003
npm run dev:notifications # Port: 3004
```

## 🔐 **Authentication & Security**

### **User Roles**
- **super_admin** - Full system access
- **admin** - Administrative functions
- **salesman** - Sales operations
- **accounts** - Financial operations
- **logistics** - Logistics operations
- **driver** - Delivery operations

### **Security Features**
- JWT Authentication
- Role-Based Access Control
- Rate Limiting & Security Headers
- Input Validation & Data Sanitization
- Audit Logging & Request Tracking

## 🔄 **Business Workflow**

1. **Order Creation** → Salesman creates order → WhatsApp notification
2. **Manufacturing** → Logistics processes → Quality check → Gatepass
3. **Delivery** → Driver delivers → Payment collection
4. **Verification** → Accounts verifies → Invoice generation
5. **Notifications** → Real-time updates → Admin dashboard

## 🛡️ **Technology Stack**

- **Backend**: Node.js, Express.js, ES6+ Modules
- **Database**: MongoDB with Mongoose ODM
- **Cache**: Redis with fallback mock
- **Real-time**: Socket.IO
- **Security**: JWT, Helmet, Rate Limiting, Joi Validation
- **Logging**: Winston + Morgan
- **DevOps**: Docker, Docker Compose

## 📊 **Default Credentials** (Development)

```
Super Admin: admin@sleepfine.com / Admin@123
Salesman: salesman@sleepfine.com / Sales@123
Accountant: accountant@sleepfine.com / Account@123
Logistics: logistics@sleepfine.com / Logistics@123
```

## 🤝 **WhatsApp Integration**

Manual sharing to group: `https://chat.whatsapp.com/KGwplcCVgf9HbNboZ5L9iE`
- Order notifications from Sales
- Gatepass notifications from Logistics  
- Delivery confirmations from Drivers
- Pre-formatted messages with business context

---

**Built with ❤️ for SleepFine CRM**

*A complete, production-ready microservices backend with industry-standard practices, comprehensive security, and scalable architecture.*
