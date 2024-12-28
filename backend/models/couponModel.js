const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const couponSchema = new Schema({
  code: String,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  discount: Number,
  expiryDate: Date,
  isActive: Boolean,
}, { timestamps: true });

exports.Coupon = model('coupon', couponSchema);