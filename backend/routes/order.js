const express = require('express');
const router = express.Router();
const {Order} = require('../models/orderModel');
const asyncHandler = require('express-async-handler');

// Get all orders
router.get('/', asyncHandler(async(req, res)=>{
  const orders = await Order.find();
  res.status(200).json({success: true, message: "orders fetched successfully", data: orders});
}))

// Get an order by id
router.get('/:id', asyncHandler(async(req, res)=>{
  const order = await Order.findById(req.params.id);
  res.status(200).json({success: true, message: "order fetched successfully", data: order});
}))

// Create a new order
router.post('/', asyncHandler(async(req, res)=>{
  try{
    const {userId, productId, quantity} = req.body;
    if(!userId || !productId || !quantity){
      res.status(400).json({success: false, message: "userId, productId and quantity are required", data: []});
    }
    const order = new Order({userId, productId, quantity});
    await order.save();
    res.status(201).json({success: true, message: "order saved successfully", data: order});
  }catch(error){
    next(error);
  }
}));

// Update an order
router.put('/:id', asyncHandler(async(req, res)=>{
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json({success: true, message: "order updated successfully", data: order});
}));

// Delete an order
router.delete('/:id', asyncHandler(async(req, res)=>{
  await Order.findByIdAndDelete(req.params.id);
  res.status(200).json({success: true, message: "order deleted successfully", data: []});
}));

module.exports = router;
