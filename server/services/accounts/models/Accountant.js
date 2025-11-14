import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../../../config/index.js';

const accountantSchema = new mongoose.Schema({
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
    enum: ['accountant'],
    default: 'accountant'
  },
  permissions: [{
    type: String,
    enum: [
      'view_payments',
      'update_payments',
      'verify_payments',
      'view_accounts_reports',
      'create_accounts_reports',
      'view_financial_data',
      'update_financial_data',
      'view_audit_logs',
      'reconcile_accounts',
      'manage_tax_records',
      'view_invoice',
      'create_invoice',
      'update_invoice',
      'view_receipts',
      'create_receipts',
      'update_receipts'
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
  specialization: {
    type: String,
    enum: ['general', 'tax', 'audit', 'payroll', 'inventory', 'cost_accounting'],
    default: 'general'
  },
  certifications: [{
    name: {
      type: String,
      trim: true
    },
    issuingBody: {
      type: String,
      trim: true
    },
    issueDate: {
      type: Date
    },
    expiryDate: {
      type: Date
    },
    certificateNumber: {
      type: String,
      trim: true
    }
  }],
  assignedDepartments: [{
    type: String,
    enum: ['sales', 'logistics', 'manufacturing', 'hr', 'admin'],
    trim: true
  }],
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
accountantSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

accountantSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

accountantSchema.virtual('isCertified').get(function() {
  return this.certifications && this.certifications.length > 0;
});

// Indexes
accountantSchema.index({ email: 1 });
accountantSchema.index({ phone: 1 });
accountantSchema.index({ employeeId: 1 });
accountantSchema.index({ isActive: 1 });
accountantSchema.index({ status: 1 });
accountantSchema.index({ manager: 1 });
accountantSchema.index({ specialization: 1 });
accountantSchema.index({ assignedDepartments: 1 });

// Pre-save middleware
accountantSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

accountantSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.lastModifiedBy = this.lastModifiedBy || null;
  }
  next();
});

// Instance methods
accountantSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

accountantSchema.methods.incLoginAttempts = function() {
  if (this.lockUntil && this.lockUntil > Date.now()) {
    return;
  }

  const updates = { $inc: { loginAttempts: 1 } };
  
  if (this.loginAttempts + 1 >= config.security.maxLoginAttempts && !this.isLocked) {
    updates.$set = { lockUntil: Date.now() + config.security.lockTime };
  }
  
  return this.updateOne(updates);
};

accountantSchema.methods.resetLoginAttempts = function() {
  return this.updateOne({
    $set: { loginAttempts: 0, lockUntil: null }
  });
};

// Static methods
accountantSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

accountantSchema.statics.findByPhone = function(phone) {
  return this.findOne({ phone });
};

accountantSchema.statics.findActive = function() {
  return this.find({ isActive: true, status: 'active' });
};

accountantSchema.statics.findBySpecialization = function(specialization) {
  return this.find({ specialization, isActive: true });
};

accountantSchema.statics.findByDepartment = function(department) {
  return this.find({ assignedDepartments: department, isActive: true });
};

accountantSchema.statics.getStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: null,
        totalAccountants: { $sum: 1 },
        activeAccountants: {
          $sum: { $cond: [{ $and: [{ $eq: ['$isActive', true] }, { $eq: ['$status', 'active'] }] }, 1, 0] }
        },
        inactiveAccountants: {
          $sum: { $cond: [{ $or: [{ $eq: ['$isActive', false] }, { $ne: ['$status', 'active'] }] }, 1, 0] }
        }
      }
    }
  ]);
  
  return stats[0] || { totalAccountants: 0, activeAccountants: 0, inactiveAccountants: 0 };
};

const Accountant = mongoose.model('Accountant', accountantSchema);
export default Accountant; 