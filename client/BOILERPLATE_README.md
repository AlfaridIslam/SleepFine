# SleepFine Full-Stack Boilerplate

This document outlines the enhanced boilerplate structure for transforming the SleepFine frontend into a full-stack application with role-based access control and comprehensive business management features.

## 🏗️ Project Structure

```
client/src/
├── assets/                    # Static assets (icons, images, fonts)
├── components/                # Reusable UI components
│   ├── common/               # Shared components (Button, LoadingSpinner, etc.)
│   ├── admin/                # Admin-specific components
│   ├── salesman/             # Salesman-specific components
│   ├── accountant/           # Accountant-specific components
│   ├── logistics/            # Logistics-specific components
│   └── vendor/               # Vendor-specific components
├── modules/                   # Feature-based modules
│   ├── auth/                 # Authentication module
│   │   ├── AuthContext.jsx   # Authentication context and state management
│   │   └── LoginForm.jsx     # Login form component
│   ├── orders/               # Order management module
│   ├── invoices/             # Invoice management module
│   ├── gatepass/             # Gate pass management module
│   ├── products/             # Product management module
│   └── dashboard/            # Dashboard modules
│       ├── admin/            # Admin dashboard components
│       ├── salesman/         # Salesman dashboard components
│       ├── accountant/       # Accountant dashboard components
│       └── logistics/        # Logistics dashboard components
├── routes/                    # Routing configuration
│   ├── PrivateRoute.jsx      # Protected route component
│   └── AdminRoutes.jsx       # Admin-specific routes
├── services/                  # API service layer
│   └── api.js               # Axios configuration and API services
├── context/                   # React contexts
│   └── providers/            # Context providers
├── hooks/                     # Custom React hooks
├── utils/                     # Utility functions
├── validators/                # Form validation schemas
├── types/                     # TypeScript-like type definitions
├── constants/                 # Application constants
└── redux/                     # State management (if using Redux)
```

## 🔐 Authentication & Authorization

### User Roles
- **Admin**: Full system access
- **Salesman**: Order management, customer management
- **Accountant**: Financial management, invoice handling
- **Logistics**: Inventory management, shipping
- **Vendor**: Product viewing, order tracking

### Permission System
Each role has specific permissions:
- `dashboard:read` - Access to dashboard
- `users:read/write/delete` - User management
- `products:read/write/delete` - Product management
- `orders:read/write/delete` - Order management
- `invoices:read/write/delete` - Invoice management
- `gatepass:read/write/delete` - Gate pass management

## 🚀 Getting Started

### 1. Environment Setup
Create a `.env` file in the client directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### 2. Authentication Flow
The authentication system uses JWT tokens with automatic refresh:

```javascript
import { useAuth } from './modules/auth/AuthContext';

const MyComponent = () => {
  const { user, isAuthenticated, login, logout, hasPermission } = useAuth();
  
  // Check permissions
  if (hasPermission('users:read')) {
    // Show user management features
  }
};
```

### 3. Protected Routes
Use the `PrivateRoute` component for role-based access:

```javascript
import PrivateRoute from './routes/PrivateRoute';

<PrivateRoute 
  requiredRoles={['admin']} 
  requiredPermissions={['users:read']}
>
  <AdminUsers />
</PrivateRoute>
```

## 📡 API Services

The API layer is organized by feature:

```javascript
import { 
  authService, 
  userService, 
  productService, 
  orderService,
  invoiceService,
  gatepassService,
  dashboardService 
} from './services/api';

// Example usage
const users = await userService.getUsers();
const products = await productService.getProducts();
```

### API Features
- Automatic token management
- Request/response interceptors
- Error handling
- Token refresh on 401 errors
- Request timeout handling

## 🎨 UI Components

### Common Components
- `Button`: Reusable button with variants (primary, secondary, success, danger, etc.)
- `LoadingSpinner`: Loading indicator with customizable size and color
- Form components (to be implemented)
- Modal components (to be implemented)
- Table components (to be implemented)

### Usage Example
```javascript
import Button from './components/common/Button';
import LoadingSpinner from './components/common/LoadingSpinner';

<Button variant="primary" loading={isLoading} onClick={handleClick}>
  Submit
</Button>

<LoadingSpinner size="lg" text="Loading data..." />
```

## 🛠️ Utility Functions

### Available Utilities
- `dateUtils`: Date formatting, relative time, validation
- `validationUtils`: Form validation, email/phone validation
- `stringUtils`: String manipulation, slug generation
- `numberUtils`: Currency formatting, percentage calculation
- `arrayUtils`: Array manipulation, grouping, sorting
- `objectUtils`: Object cloning, picking, omitting
- `storageUtils`: LocalStorage management

### Usage Example
```javascript
import { dateUtils, numberUtils, validationUtils } from './utils';

const formattedDate = dateUtils.formatDate(new Date());
const currency = numberUtils.formatCurrency(1234.56);
const isValidEmail = validationUtils.isValidEmail('user@example.com');
```

## 📊 Dashboard Modules

### Admin Dashboard
- Overview statistics
- User management
- System settings
- Reports and analytics

### Salesman Dashboard
- Order management
- Customer management
- Sales tracking
- Commission tracking

### Accountant Dashboard
- Financial reports
- Invoice management
- Payment tracking
- Tax calculations

### Logistics Dashboard
- Inventory management
- Shipping tracking
- Warehouse management
- Delivery scheduling

## 🔄 State Management

### Context API
Currently using React Context API for:
- Authentication state
- User permissions
- Theme preferences (to be implemented)
- Language preferences (to be implemented)

### Future Considerations
- Consider Zustand for complex state management
- Redux Toolkit for larger applications
- React Query for server state management

## 🧪 Testing Strategy

### Unit Testing
- Component testing with React Testing Library
- Utility function testing
- API service testing

### Integration Testing
- Authentication flow testing
- Route protection testing
- API integration testing

## 📱 Responsive Design

All components are built with Tailwind CSS and are mobile-responsive:
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interfaces
- Progressive enhancement

## 🔧 Development Workflow

### Code Organization
1. **Feature-based modules**: Each business feature has its own module
2. **Role-based components**: Components specific to user roles
3. **Shared utilities**: Common functions and helpers
4. **Type definitions**: Clear data structure documentation

### Best Practices
- Use arrow functional components
- Implement proper error boundaries
- Follow consistent naming conventions
- Use TypeScript-like documentation
- Implement proper loading states
- Handle edge cases gracefully

## 🚀 Performance Optimizations

### Implemented
- Code splitting with React.lazy()
- Suspense boundaries for loading states
- Memoization of expensive calculations
- Optimized re-renders with React.memo()

### Planned
- Virtual scrolling for large lists
- Image lazy loading
- Service worker for caching
- Bundle analysis and optimization

## 🔒 Security Considerations

### Frontend Security
- Input validation and sanitization
- XSS prevention
- CSRF protection
- Secure token storage

### API Security
- JWT token authentication
- Role-based access control
- Request rate limiting
- Input validation

## 📈 Monitoring & Analytics

### Error Tracking
- Error boundaries for component errors
- API error logging
- User action tracking

### Performance Monitoring
- Bundle size monitoring
- Load time tracking
- User interaction metrics

## 🎯 Next Steps

### Phase 1: Core Features
- [ ] Complete authentication flow
- [ ] Implement all dashboard modules
- [ ] Add form validation
- [ ] Create data tables

### Phase 2: Advanced Features
- [ ] Real-time notifications
- [ ] File upload functionality
- [ ] Export/import features
- [ ] Advanced reporting

### Phase 3: Optimization
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Internationalization
- [ ] Progressive Web App features

## 🤝 Contributing

### Development Guidelines
1. Follow the established folder structure
2. Use arrow functional components
3. Implement proper error handling
4. Add comprehensive documentation
5. Write unit tests for new features
6. Follow the naming conventions

### Code Review Checklist
- [ ] Component follows arrow function pattern
- [ ] Proper error handling implemented
- [ ] Loading states included
- [ ] Responsive design verified
- [ ] Accessibility considerations
- [ ] Performance impact assessed

## 📞 Support

For questions or issues:
1. Check the existing documentation
2. Review the code examples
3. Create an issue with detailed description
4. Provide reproduction steps

---

**Note**: This boilerplate is designed to be scalable and maintainable. All components are built with reusability and performance in mind. The structure supports both small teams and large enterprise applications. 