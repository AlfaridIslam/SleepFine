import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../../../config/index.js';

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [50, 'First name cannot exceed 50 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    maxlength: [50, 'Last name cannot exceed 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long'],
    select: false, // Don't include password in queries by default
  },
  role: {
    type: String,
    enum: ['admin', 'super_admin'],
    default: 'admin',
  },
  permissions: [{
    type: String,
    enum: [
      'manage_users',
      'manage_roles',
      'view_reports',
      'manage_system',
      'manage_inventory',
      'manage_orders',
      'manage_payments',
      'manage_deliveries',
      'view_logs',
      'manage_settings',
    ],
  }],
  address: {
    street: {
      type: String,
      required: [true, 'Street address is required'],
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    state: {
      type: String,
      required: [true, 'State is required'],
    },
    zipCode: {
      type: String,
      required: [true, 'ZIP code is required'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      default: 'India',
    },
  },
  profileImage: {
    type: String,
    default: null,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  isPhoneVerified: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  loginAttempts: {
    type: Number,
    default: 0,
  },
  lockUntil: {
    type: Date,
    default: null,
  },
  passwordChangedAt: {
    type: Date,
    default: Date.now,
  },
  passwordResetToken: {
    type: String,
    default: null,
  },
  passwordResetExpires: {
    type: Date,
    default: null,
  },
  emailVerificationToken: {
    type: String,
    default: null,
  },
  emailVerificationExpires: {
    type: Date,
    default: null,
  },
  twoFactorSecret: {
    type: String,
    default: null,
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false,
  },
  preferences: {
    theme: {
      type: String,
      enum: ['light', 'dark', 'auto'],
      default: 'auto',
    },
    language: {
      type: String,
      default: 'en',
    },
    notifications: {
      email: {
        type: Boolean,
        default: true,
      },
      sms: {
        type: Boolean,
        default: true,
      },
      push: {
        type: Boolean,
        default: true,
      },
    },
  },
  metadata: {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      default: null,
    },
    lastModifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      default: null,
    },
    ipAddress: {
      type: String,
      default: null,
    },
    userAgent: {
      type: String,
      default: null,
    },
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Virtual for full name
adminSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for isLocked
adminSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// Indexes
adminSchema.index({ email: 1 });
adminSchema.index({ phone: 1 });
adminSchema.index({ role: 1 });
adminSchema.index({ isActive: 1 });
adminSchema.index({ createdAt: -1 });

// Pre-save middleware to hash password
adminSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, config.security.bcryptRounds);
    
    // Update passwordChangedAt
    this.passwordChangedAt = Date.now() - 1000; // Subtract 1 second to ensure token is created after password change
    
    next();
  } catch (error) {
    next(error);
  }
});

// Pre-save middleware to update lastModifiedBy
adminSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.metadata.lastModifiedBy = this._id;
  }
  next();
});

// Instance method to check password
adminSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Instance method to check if password was changed after token was issued
adminSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

// Instance method to increment login attempts
adminSchema.methods.incLoginAttempts = function() {
  // If we have a previous lock that has expired, restart at 1
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.updateOne({
      $unset: { lockUntil: 1 },
      $set: { loginAttempts: 1 },
    });
  }
  
  const updates = { $inc: { loginAttempts: 1 } };
  
  // Lock account after 5 failed attempts
  if (this.loginAttempts + 1 >= 5 && !this.isLocked) {
    updates.$set = { lockUntil: Date.now() + 2 * 60 * 60 * 1000 }; // 2 hours
  }
  
  return this.updateOne(updates);
};

// Instance method to reset login attempts
adminSchema.methods.resetLoginAttempts = function() {
  return this.updateOne({
    $unset: { loginAttempts: 1, lockUntil: 1 },
  });
};

// Static method to find by email
adminSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

// Static method to find active admins
adminSchema.statics.findActive = function() {
  return this.find({ isActive: true });
};

// Static method to find by role
adminSchema.statics.findByRole = function(role) {
  return this.find({ role, isActive: true });
};

// Static method to get admin statistics
adminSchema.statics.getStats = function() {
  return this.aggregate([
    {
      $group: {
        _id: null,
        totalAdmins: { $sum: 1 },
        activeAdmins: {
          $sum: { $cond: ['$isActive', 1, 0] },
        },
        verifiedEmails: {
          $sum: { $cond: ['$isEmailVerified', 1, 0] },
        },
        verifiedPhones: {
          $sum: { $cond: ['$isPhoneVerified', 1, 0] },
        },
        twoFactorEnabled: {
          $sum: { $cond: ['$twoFactorEnabled', 1, 0] },
        },
      },
    },
  ]);
};

const Admin = mongoose.model('Admin', adminSchema);

export default Admin; 