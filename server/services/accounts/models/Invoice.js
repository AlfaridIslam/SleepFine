import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: [true, 'Invoice number is required'],
    unique: true,
    trim: true
  },
  orderId: {
    type: String,
    required: [true, 'Order ID is required'],
    trim: true
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: [true, 'Order reference is required']
  },
  invoiceType: {
    type: String,
    enum: ['proforma', 'tax_invoice', 'commercial', 'credit_note', 'debit_note'],
    default: 'tax_invoice'
  },
  status: {
    type: String,
    enum: ['draft', 'sent', 'viewed', 'paid', 'overdue', 'cancelled'],
    default: 'draft'
  },
  customer: {
    name: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      zipCode: { type: String, trim: true },
      country: { type: String, default: 'India', trim: true }
    },
    gstin: {
      type: String,
      trim: true
    },
    panNumber: {
      type: String,
      trim: true
    }
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    name: {
      type: String,
      required: [true, 'Item name is required'],
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    hsn: {
      type: String,
      trim: true
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1']
    },
    unit: {
      type: String,
      enum: ['piece', 'kg', 'meter', 'liter', 'box', 'set'],
      default: 'piece'
    },
    rate: {
      type: Number,
      required: [true, 'Rate is required'],
      min: [0, 'Rate cannot be negative']
    },
    discount: {
      type: Number,
      default: 0,
      min: [0, 'Discount cannot be negative']
    },
    discountType: {
      type: String,
      enum: ['percentage', 'amount'],
      default: 'percentage'
    },
    taxableAmount: {
      type: Number,
      default: 0
    },
    cgstRate: {
      type: Number,
      default: 0
    },
    sgstRate: {
      type: Number,
      default: 0
    },
    igstRate: {
      type: Number,
      default: 0
    },
    cgstAmount: {
      type: Number,
      default: 0
    },
    sgstAmount: {
      type: Number,
      default: 0
    },
    igstAmount: {
      type: Number,
      default: 0
    },
    totalAmount: {
      type: Number,
      default: 0
    }
  }],
  financialDetails: {
    subtotal: {
      type: Number,
      default: 0
    },
    totalDiscount: {
      type: Number,
      default: 0
    },
    taxableAmount: {
      type: Number,
      default: 0
    },
    totalCgst: {
      type: Number,
      default: 0
    },
    totalSgst: {
      type: Number,
      default: 0
    },
    totalIgst: {
      type: Number,
      default: 0
    },
    totalTax: {
      type: Number,
      default: 0
    },
    roundOff: {
      type: Number,
      default: 0
    },
    grandTotal: {
      type: Number,
      required: [true, 'Grand total is required'],
      min: [0, 'Grand total cannot be negative']
    },
    advancePaid: {
      type: Number,
      default: 0
    },
    balanceAmount: {
      type: Number,
      default: 0
    }
  },
  paymentTerms: {
    dueDate: {
      type: Date,
      required: [true, 'Due date is required']
    },
    paymentMethod: [{
      type: String,
      enum: ['cash', 'online', 'card', 'upi', 'bank_transfer', 'cheque']
    }],
    lateFee: {
      type: Number,
      default: 0
    },
    bankDetails: {
      accountName: { type: String, trim: true },
      accountNumber: { type: String, trim: true },
      bankName: { type: String, trim: true },
      ifscCode: { type: String, trim: true },
      branchName: { type: String, trim: true }
    }
  },
  notes: {
    publicNotes: {
      type: String,
      trim: true
    },
    privateNotes: {
      type: String,
      trim: true
    },
    termsAndConditions: {
      type: String,
      trim: true
    }
  },
  attachments: [{
    fileName: { type: String, trim: true },
    filePath: { type: String, trim: true },
    fileSize: { type: Number },
    mimeType: { type: String, trim: true },
    uploadedAt: { type: Date, default: Date.now }
  }],
  tracking: {
    sentAt: {
      type: Date,
      default: null
    },
    viewedAt: {
      type: Date,
      default: null
    },
    viewCount: {
      type: Number,
      default: 0
    },
    lastViewedAt: {
      type: Date,
      default: null
    },
    remindersSent: {
      type: Number,
      default: 0
    },
    lastReminderAt: {
      type: Date,
      default: null
    }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'createdByModel',
    required: [true, 'Creator is required']
  },
  createdByModel: {
    type: String,
    enum: ['Admin', 'Accountant', 'Salesman'],
    required: [true, 'Creator model is required']
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'lastModifiedByModel',
    default: null
  },
  lastModifiedByModel: {
    type: String,
    enum: ['Admin', 'Accountant', 'Salesman'],
    default: null
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtuals
invoiceSchema.virtual('isOverdue').get(function() {
  return this.paymentTerms.dueDate < new Date() && this.status !== 'paid' && this.status !== 'cancelled';
});

invoiceSchema.virtual('daysPastDue').get(function() {
  if (!this.isOverdue) return 0;
  return Math.floor((Date.now() - this.paymentTerms.dueDate) / (1000 * 60 * 60 * 24));
});

invoiceSchema.virtual('isPaid').get(function() {
  return this.status === 'paid';
});

invoiceSchema.virtual('isPartiallyPaid').get(function() {
  return this.financialDetails.advancePaid > 0 && this.financialDetails.balanceAmount > 0;
});

invoiceSchema.virtual('paymentProgress').get(function() {
  if (this.financialDetails.grandTotal === 0) return 0;
  return (this.financialDetails.advancePaid / this.financialDetails.grandTotal) * 100;
});

// Indexes
invoiceSchema.index({ invoiceNumber: 1 });
invoiceSchema.index({ orderId: 1 });
invoiceSchema.index({ order: 1 });
invoiceSchema.index({ status: 1 });
invoiceSchema.index({ invoiceType: 1 });
invoiceSchema.index({ 'customer.email': 1 });
invoiceSchema.index({ 'customer.phone': 1 });
invoiceSchema.index({ 'paymentTerms.dueDate': 1 });
invoiceSchema.index({ createdBy: 1 });
invoiceSchema.index({ createdAt: -1 });

// Pre-save middleware
invoiceSchema.pre('save', function(next) {
  // Auto-generate invoice number if not provided
  if (!this.invoiceNumber) {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    this.invoiceNumber = `INV${timestamp}${random}`;
  }

  // Calculate financial details
  this.calculateTotals();
  
  next();
});

// Instance methods
invoiceSchema.methods.calculateTotals = function() {
  let subtotal = 0;
  let totalDiscount = 0;
  let totalCgst = 0;
  let totalSgst = 0;
  let totalIgst = 0;

  this.items.forEach(item => {
    const itemTotal = item.quantity * item.rate;
    const discountAmount = item.discountType === 'percentage' 
      ? (itemTotal * item.discount / 100)
      : item.discount;
    
    item.taxableAmount = itemTotal - discountAmount;
    item.cgstAmount = (item.taxableAmount * item.cgstRate) / 100;
    item.sgstAmount = (item.taxableAmount * item.sgstRate) / 100;
    item.igstAmount = (item.taxableAmount * item.igstRate) / 100;
    item.totalAmount = item.taxableAmount + item.cgstAmount + item.sgstAmount + item.igstAmount;

    subtotal += itemTotal;
    totalDiscount += discountAmount;
    totalCgst += item.cgstAmount;
    totalSgst += item.sgstAmount;
    totalIgst += item.igstAmount;
  });

  this.financialDetails.subtotal = subtotal;
  this.financialDetails.totalDiscount = totalDiscount;
  this.financialDetails.taxableAmount = subtotal - totalDiscount;
  this.financialDetails.totalCgst = totalCgst;
  this.financialDetails.totalSgst = totalSgst;
  this.financialDetails.totalIgst = totalIgst;
  this.financialDetails.totalTax = totalCgst + totalSgst + totalIgst;
  
  const beforeRoundOff = this.financialDetails.taxableAmount + this.financialDetails.totalTax;
  this.financialDetails.grandTotal = Math.round(beforeRoundOff);
  this.financialDetails.roundOff = this.financialDetails.grandTotal - beforeRoundOff;
  this.financialDetails.balanceAmount = this.financialDetails.grandTotal - this.financialDetails.advancePaid;
};

invoiceSchema.methods.markAsPaid = function(paymentAmount, paymentDate = new Date()) {
  this.financialDetails.advancePaid += paymentAmount;
  this.financialDetails.balanceAmount = this.financialDetails.grandTotal - this.financialDetails.advancePaid;
  
  if (this.financialDetails.balanceAmount <= 0) {
    this.status = 'paid';
  }
  
  return this.save();
};

invoiceSchema.methods.addReminder = function() {
  this.tracking.remindersSent += 1;
  this.tracking.lastReminderAt = new Date();
  return this.save();
};

invoiceSchema.methods.markAsViewed = function() {
  this.tracking.viewCount += 1;
  this.tracking.lastViewedAt = new Date();
  if (!this.tracking.viewedAt) {
    this.tracking.viewedAt = new Date();
    if (this.status === 'sent') {
      this.status = 'viewed';
    }
  }
  return this.save();
};

// Static methods
invoiceSchema.statics.findByInvoiceNumber = function(invoiceNumber) {
  return this.findOne({ invoiceNumber });
};

invoiceSchema.statics.findByOrderId = function(orderId) {
  return this.find({ orderId }).sort({ createdAt: -1 });
};

invoiceSchema.statics.findOverdue = function() {
  return this.find({
    'paymentTerms.dueDate': { $lt: new Date() },
    status: { $nin: ['paid', 'cancelled'] }
  });
};

invoiceSchema.statics.findByStatus = function(status) {
  return this.find({ status }).sort({ createdAt: -1 });
};

invoiceSchema.statics.findByDateRange = function(startDate, endDate) {
  return this.find({
    createdAt: {
      $gte: startDate,
      $lte: endDate
    }
  });
};

invoiceSchema.statics.getStats = async function() {
  const stats = await this.aggregate([
    {
      $group: {
        _id: null,
        totalInvoices: { $sum: 1 },
        totalAmount: { $sum: '$financialDetails.grandTotal' },
        paidAmount: { $sum: '$financialDetails.advancePaid' },
        pendingAmount: { $sum: '$financialDetails.balanceAmount' },
        draftInvoices: {
          $sum: { $cond: [{ $eq: ['$status', 'draft'] }, 1, 0] }
        },
        sentInvoices: {
          $sum: { $cond: [{ $eq: ['$status', 'sent'] }, 1, 0] }
        },
        paidInvoices: {
          $sum: { $cond: [{ $eq: ['$status', 'paid'] }, 1, 0] }
        },
        overdueInvoices: {
          $sum: { 
            $cond: [
              { 
                $and: [
                  { $lt: ['$paymentTerms.dueDate', new Date()] },
                  { $nin: ['$status', ['paid', 'cancelled']] }
                ]
              }, 
              1, 
              0
            ] 
          }
        }
      }
    }
  ]);
  
  return stats[0] || {
    totalInvoices: 0,
    totalAmount: 0,
    paidAmount: 0,
    pendingAmount: 0,
    draftInvoices: 0,
    sentInvoices: 0,
    paidInvoices: 0,
    overdueInvoices: 0
  };
};

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;
