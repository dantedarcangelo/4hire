const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    condition: {
      type: String,
      enum: ['Excellent', 'Good', 'Fair', 'Poor', 'Needs Repair'],
      required: true
    }
  }],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['Reserved', 'CheckedOut', 'Overdue', 'Returned', 'Cancelled'],
    default: 'Reserved'
  },
  notes: {
    type: String,
    trim: true
  },
  contractSigned: {
    type: Boolean,
    default: false
  },
  returnCondition: {
    type: String,
    enum: ['All Items As Sent', 'Minor Issues', 'Major Issues', 'Missing Items']
  },
  returnNotes: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;