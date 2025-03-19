const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['PA', 'Lighting', 'Microphones', 'Cables', 'Stands', 'Other']
  },
  barcode: {
    type: String,
    required: true,
    unique: true
  },
  dailyPrice: {
    type: Number,
    required: true,
    min: 0
  },
  weeklyPrice: {
    type: Number,
    required: true,
    min: 0
  },
  condition: {
    type: String,
    enum: ['Excellent', 'Good', 'Fair', 'Poor', 'Needs Repair'],
    default: 'Good'
  },
  notes: {
    type: String,
    trim: true
  },
  available: {
    type: Boolean,
    default: true
  },
  lastChecked: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;