import mongoose from 'mongoose';

const financialReportSchema = new mongoose.Schema({
  reportId: {
    type: String,
    required: [true, 'Report ID is required'],
    unique: true,
    trim: true
  },
  reportType: {
    type: String,
    enum: [
      'profit_loss', 'balance_sheet', 'cash_flow', 'accounts_receivable', 
      'accounts_payable', 'sales_report', 'payment_report', 'tax_report',
      'expense_report', 'inventory_valuation', 'trial_balance', 'custom'
    ],
    required: [true, 'Report type is required']
  },
  reportName: {
    type: String,
    required: [true, 'Report name is required'],
    trim: true,
    maxlength: [200, 'Report name cannot exceed 200 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  reportPeriod: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'quarterly', 'yearly', 'custom'],
    required: [true, 'Report period is required']
  },
  dateRange: {
    startDate: {
      type: Date,
      required: [true, 'Start date is required']
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required']
    }
  },
  status: {
    type: String,
    enum: ['generating', 'completed', 'failed', 'archived'],
    default: 'generating'
  },
  data: {
    summary: {
      totalRevenue: { type: Number, default: 0 },
      totalExpenses: { type: Number, default: 0 },
      netProfit: { type: Number, default: 0 },
      grossMargin: { type: Number, default: 0 },
      netMargin: { type: Number, default: 0 }
    },
    salesData: {
      totalSales: { type: Number, default: 0 },
      totalOrders: { type: Number, default: 0 },
      averageOrderValue: { type: Number, default: 0 },
      topProducts: [{
        productName: String,
        quantity: Number,
        revenue: Number
      }],
      salesByRegion: [{
        region: String,
        sales: Number,
        orders: Number
      }],
      salesByPeriod: [{
        period: String,
        sales: Number,
        orders: Number
      }]
    },
    paymentData: {
      totalCollected: { type: Number, default: 0 },
      totalPending: { type: Number, default: 0 },
      collectionEfficiency: { type: Number, default: 0 },
      paymentMethods: [{
        method: String,
        amount: Number,
        count: Number,
        percentage: Number
      }],
      overdueAmount: { type: Number, default: 0 },
      averageCollectionPeriod: { type: Number, default: 0 }
    },
    expenseData: {
      totalExpenses: { type: Number, default: 0 },
      expenseCategories: [{
        category: String,
        amount: Number,
        percentage: Number
      }],
      monthlyExpenses: [{
        month: String,
        amount: Number
      }]
    },
    taxData: {
      totalTaxCollected: { type: Number, default: 0 },
      cgstCollected: { type: Number, default: 0 },
      sgstCollected: { type: Number, default: 0 },
      igstCollected: { type: Number, default: 0 },
      taxByMonth: [{
        month: String,
        cgst: Number,
        sgst: Number,
        igst: Number,
        total: Number
      }]
    },
    receivableData: {
      totalReceivables: { type: Number, default: 0 },
      currentReceivables: { type: Number, default: 0 },
      overdueReceivables: { type: Number, default: 0 },
      agingAnalysis: [{
        range: String, // '0-30 days', '31-60 days', etc.
        amount: Number,
        count: Number
      }],
      topDebtors: [{
        customerName: String,
        amount: Number,
        daysPastDue: Number
      }]
    },
    customData: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  filters: {
    departments: [String],
    regions: [String],
    products: [String],
    customers: [String],
    salesmen: [String],
    paymentMethods: [String],
    customFilters: {
      type: Map,
      of: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  formatting: {
    currency: {
      type: String,
      default: 'INR'
    },
    dateFormat: {
      type: String,
      default: 'DD/MM/YYYY'
    },
    numberFormat: {
      type: String,
      enum: ['indian', 'international'],
      default: 'indian'
    },
    showZeroValues: {
      type: Boolean,
      default: false
    },
    roundingPrecision: {
      type: Number,
      default: 2
    }
  },
  export: {
    formats: [{
      type: String,
      enum: ['pdf', 'excel', 'csv', 'json'],
      filePath: String,
      fileSize: Number,
      generatedAt: Date
    }],
    isExported: {
      type: Boolean,
      default: false
    },
    lastExportedAt: {
      type: Date,
      default: null
    }
  },
  sharing: {
    isShared: {
      type: Boolean,
      default: false
    },
    sharedWith: [{
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'sharing.sharedWith.userModel'
      },
      userModel: {
        type: String,
        enum: ['Admin', 'Accountant', 'Salesman']
      },
      permissions: [{
        type: String,
        enum: ['view', 'download', 'share']
      }],
      sharedAt: {
        type: Date,
        default: Date.now
      }
    }],
    publicLink: {
      type: String,
      default: null
    },
    linkExpiry: {
      type: Date,
      default: null
    }
  },
  automation: {
    isRecurring: {
      type: Boolean,
      default: false
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'quarterly'],
      default: null
    },
    nextGenerationDate: {
      type: Date,
      default: null
    },
    emailRecipients: [String],
    autoExport: {
      type: Boolean,
      default: false
    },
    exportFormats: [String]
  },
  metadata: {
    generationTime: {
      type: Number, // in milliseconds
      default: 0
    },
    dataPoints: {
      type: Number,
      default: 0
    },
    version: {
      type: Number,
      default: 1
    },
    tags: [String],
    category: {
      type: String,
      trim: true
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium'
    }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'createdByModel',
    required: [true, 'Creator is required']
  },
  createdByModel: {
    type: String,
    enum: ['Admin', 'Accountant'],
    required: [true, 'Creator model is required']
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'lastModifiedByModel',
    default: null
  },
  lastModifiedByModel: {
    type: String,
    enum: ['Admin', 'Accountant'],
    default: null
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtuals
financialReportSchema.virtual('isCompleted').get(function() {
  return this.status === 'completed';
});

financialReportSchema.virtual('isFailed').get(function() {
  return this.status === 'failed';
});

financialReportSchema.virtual('isArchived').get(function() {
  return this.status === 'archived';
});

financialReportSchema.virtual('periodDays').get(function() {
  return Math.ceil((this.dateRange.endDate - this.dateRange.startDate) / (1000 * 60 * 60 * 24));
});

financialReportSchema.virtual('profitMargin').get(function() {
  if (this.data.summary.totalRevenue === 0) return 0;
  return (this.data.summary.netProfit / this.data.summary.totalRevenue) * 100;
});

financialReportSchema.virtual('hasExports').get(function() {
  return this.export.formats && this.export.formats.length > 0;
});

// Indexes
financialReportSchema.index({ reportId: 1 });
financialReportSchema.index({ reportType: 1 });
financialReportSchema.index({ status: 1 });
financialReportSchema.index({ reportPeriod: 1 });
financialReportSchema.index({ 'dateRange.startDate': 1 });
financialReportSchema.index({ 'dateRange.endDate': 1 });
financialReportSchema.index({ createdBy: 1 });
financialReportSchema.index({ createdAt: -1 });
financialReportSchema.index({ 'automation.isRecurring': 1 });
financialReportSchema.index({ 'automation.nextGenerationDate': 1 });

// Pre-save middleware
financialReportSchema.pre('save', function(next) {
  // Auto-generate report ID if not provided
  if (!this.reportId) {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    this.reportId = `RPT${timestamp}${random}`;
  }

  // Calculate derived metrics
  this.calculateDerivedMetrics();
  
  next();
});

// Instance methods
financialReportSchema.methods.calculateDerivedMetrics = function() {
  // Calculate net profit
  this.data.summary.netProfit = this.data.summary.totalRevenue - this.data.summary.totalExpenses;
  
  // Calculate margins
  if (this.data.summary.totalRevenue > 0) {
    this.data.summary.grossMargin = (this.data.summary.totalRevenue - this.data.expenseData.totalExpenses) / this.data.summary.totalRevenue * 100;
    this.data.summary.netMargin = this.data.summary.netProfit / this.data.summary.totalRevenue * 100;
  }

  // Calculate collection efficiency
  if (this.data.paymentData.totalCollected + this.data.paymentData.totalPending > 0) {
    this.data.paymentData.collectionEfficiency = 
      this.data.paymentData.totalCollected / 
      (this.data.paymentData.totalCollected + this.data.paymentData.totalPending) * 100;
  }
};

financialReportSchema.methods.markAsCompleted = function() {
  this.status = 'completed';
  this.metadata.generationTime = Date.now() - this.createdAt.getTime();
  return this.save();
};

financialReportSchema.methods.markAsFailed = function(error) {
  this.status = 'failed';
  this.metadata.error = error;
  return this.save();
};

financialReportSchema.methods.addExport = function(format, filePath, fileSize) {
  this.export.formats.push({
    type: format,
    filePath,
    fileSize,
    generatedAt: new Date()
  });
  this.export.isExported = true;
  this.export.lastExportedAt = new Date();
  return this.save();
};

financialReportSchema.methods.shareWith = function(userId, userModel, permissions = ['view']) {
  this.sharing.sharedWith.push({
    userId,
    userModel,
    permissions,
    sharedAt: new Date()
  });
  this.sharing.isShared = true;
  return this.save();
};

financialReportSchema.methods.generatePublicLink = function(expiryDays = 7) {
  const linkId = Math.random().toString(36).substr(2, 16);
  this.sharing.publicLink = `report_${linkId}`;
  this.sharing.linkExpiry = new Date(Date.now() + (expiryDays * 24 * 60 * 60 * 1000));
  return this.save();
};

// Static methods
financialReportSchema.statics.findByReportId = function(reportId) {
  return this.findOne({ reportId });
};

financialReportSchema.statics.findByType = function(reportType) {
  return this.find({ reportType }).sort({ createdAt: -1 });
};

financialReportSchema.statics.findByStatus = function(status) {
  return this.find({ status }).sort({ createdAt: -1 });
};

financialReportSchema.statics.findByDateRange = function(startDate, endDate) {
  return this.find({
    'dateRange.startDate': { $gte: startDate },
    'dateRange.endDate': { $lte: endDate }
  });
};

financialReportSchema.statics.findRecurring = function() {
  return this.find({ 'automation.isRecurring': true });
};

financialReportSchema.statics.findPendingGeneration = function() {
  return this.find({
    'automation.isRecurring': true,
    'automation.nextGenerationDate': { $lte: new Date() }
  });
};

financialReportSchema.statics.getStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: null,
        totalReports: { $sum: 1 },
        completedReports: {
          $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] }
        },
        failedReports: {
          $sum: { $cond: [{ $eq: ['$status', 'failed'] }, 1, 0] }
        },
        recurringReports: {
          $sum: { $cond: [{ $eq: ['$automation.isRecurring', true] }, 1, 0] }
        },
        sharedReports: {
          $sum: { $cond: [{ $eq: ['$sharing.isShared', true] }, 1, 0] }
        }
      }
    }
  ]);
  
  return stats[0] || {
    totalReports: 0,
    completedReports: 0,
    failedReports: 0,
    recurringReports: 0,
    sharedReports: 0
  };
};

financialReportSchema.statics.getTypeStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: '$reportType',
        count: { $sum: 1 },
        completedCount: {
          $sum: { $cond: [{ $eq: ['$status', 'completed'] }, 1, 0] }
        }
      }
    },
    { $sort: { count: -1 } }
  ]);
  
  return stats;
};

const FinancialReport = mongoose.model('FinancialReport', financialReportSchema);
export default FinancialReport;
