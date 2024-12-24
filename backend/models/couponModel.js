const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const couponSchema = new Schema({
  code: String,
  categoryId: String,
  discount: Number,
  expiryDate: Date,
  isActive: Boolean,
})

exports.Coupon = model('coupon', couponSchema);