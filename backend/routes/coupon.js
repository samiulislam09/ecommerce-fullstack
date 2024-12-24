const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Coupon } = require('../models/couponModel');

// create a coupon
router.post('/', asyncHandler(async(req, res)=>{
  const {code, categoryId, discount, expiryDate, isActive} = req.body;
  if(!code || !categoryId || !discount || !expiryDate || !isActive){
    res.status(400).json({success: false, message: "code, categoryId, discount, expiryDate and isActive are required", data: []});
  }
  const coupon = new Coupon({code, categoryId, discount, expiryDate, isActive});
  await coupon.save();
  res.status(201).json({success: true, message: "coupon saved successfully", data: coupon});
}
))

// Get all coupons
router.get('/', asyncHandler(async(req, res)=>{
  const coupons = await Coupon.find();
  res.status(200).json({success: true, message: "coupons fetched successfully", data: coupons});
}))

// Update a coupon
router.put('/:id', asyncHandler(async(req, res)=>{
  const {code, categoryId, discount, expiryDate, isActive} = req.body;
  if(!code || !categoryId || !discount || !expiryDate || !isActive){
    res.status(400).json({success: false, message: "code, categoryId, discount, expiryDate and isActive are required", data: []});
  }
  const coupon = await Coupon.findByIdAndUpdate(req.params.id, {code, categoryId, discount, expiryDate, isActive}, {new: true});
  res.status(200).json({success: true, message: "coupon updated successfully", data: coupon});
}))

// Get a single coupon by categoryId
router.get('/:id', asyncHandler(async(req, res)=>{
  const coupon = await Coupon.findOne({categoryId: req.params.id});
  res.status(200).json({success: true, message: "coupon fetched successfully", data: coupon});
}))

module.exports = router;