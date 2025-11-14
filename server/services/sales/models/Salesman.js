import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../../../config/index.js';

const salesmanSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true,
    trim: true,
    match: [/^[0-9]{10,15}$/, 'Please enter a valid phone number']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false
  },
  employeeId: {
    type: String,
    required: [true, 'Employee ID is required'],
    unique: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['salesman'],
    default: 'salesman'
  },
  permissions: [{
    type: String,
    enum: [
      'create_order',
      'view_order',
      'update_order',
      'delete_order',
      'view_own_orders',
      'view_sales_reports',
      'view_own_performance',
      'create_customer',
      'view_customer',
      'update_customer',
      'view_products',
      'view_pricing',
      'send_notifications'
    ]
  }],
  address: {
    street: {
      type: String,
      required: [true, 'Street address is required'],
      trim: true
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true
    },
    zipCode: {
      type: String,
      required: [true, 'ZIP code is required'],
      trim: true
    },
    country: {
      type: String,
      default: 'India',
      trim: true
    }
  },
  profileImage: {
    type: String,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  phoneVerified: {
    type: Boolean,
    default: false
  },
  loginAttempts: {
    type: Number,
    default: 0
  },
  lockUntil: {
    type: Date,
    default: null
  },
  lastLogin: {
    type: Date,
    default: null
  },
  lastLoginIp: {
    type: String,
    default: null
  },
  salesTarget: {
    monthly: {
      type: Number,
      default: 0
    },
    yearly: {
      type: Number,
      default: 0
    }
  },
  commission: {
    percentage: {
      type: Number,
      default: 0,
      min: [0, 'Commission percentage cannot be negative'],
      max: [100, 'Commission percentage cannot exceed 100']
    },
    type: {
      type: String,
      enum: ['percentage', 'fixed'],
      default: 'percentage'
    }
  },
  assignedTerritory: {
    type: String,
    trim: true
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    default: null
  },
  joiningDate: {
    type: Date,
    default: Date.now
  },
  terminationDate: {
    type: Date,
    default: null
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended', 'terminated'],
    default: 'active'
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    default: null
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtuals
salesmanSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

salesmanSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

salesmanSchema.virtual('totalSales').get(function() {
  // This would be calculated from orders
  return 0;
});

// Indexes
salesmanSchema.index({ email: 1 });
salesmanSchema.index({ phone: 1 });
salesmanSchema.index({ employeeId: 1 });
salesmanSchema.index({ isActive: 1 });
salesmanSchema.index({ status: 1 });
salesmanSchema.index({ manager: 1 });
salesmanSchema.index({ assignedTerritory: 1 });

// Pre-save middleware
salesmanSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

salesmanSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.lastModifiedBy = this.lastModifiedBy || null;
  }
  next();
});

// Instance methods
salesmanSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

salesmanSchema.methods.incLoginAttempts = function() {
  if (this.lockUntil && this.lockUntil > Date.now()) {
    return;
  }

  const updates = { $inc: { loginAttempts: 1 } };
  
  if (this.loginAttempts + 1 >= config.security.maxLoginAttempts && !this.isLocked) {
    updates.$set = { lockUntil: Date.now() + config.security.lockTime };
  }
  
  return this.updateOne(updates);
};

salesmanSchema.methods.resetLoginAttempts = function() {
  return this.updateOne({
    $set: { loginAttempts: 0, lockUntil: null }
  });
};

// Static methods
salesmanSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

salesmanSchema.statics.findByPhone = function(phone) {
  return this.findOne({ phone });
};

salesmanSchema.statics.findActive = function() {
  return this.find({ isActive: true, status: 'active' });
};

salesmanSchema.statics.findByTerritory = function(territory) {
  return this.find({ assignedTerritory: territory, isActive: true });
};

salesmanSchema.statics.getStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: null,
        totalSalesmen: { $sum: 1 },
        activeSalesmen: {
          $sum: { $cond: [{ $and: [{ $eq: ['$isActive', true] }, { $eq: ['$status', 'active'] }] }, 1, 0] }
        },
        inactiveSalesmen: {
          $sum: { $cond: [{ $or: [{ $eq: ['$isActive', false] }, { $ne: ['$status', 'active'] }] }, 1, 0] }
        }
      }
    }
  ]);
  
  return stats[0] || { totalSalesmen: 0, activeSalesmen: 0, inactiveSalesmen: 0 };
};

const Salesman = mongoose.model('Salesman', salesmanSchema);
export default Salesman; 