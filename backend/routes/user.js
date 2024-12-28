const express = require('express');
const router = express.Router();
const {User} = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// Get all users
router.get('/', asyncHandler(async(req, res)=>{
  const users = await User.find();
  res.status(200).json({success: true, message: "users fetched successfully", data: users});
}));

// Get a user by id
router.get('/:id', asyncHandler(async(req, res)=>{
  const user = await User.findById(req.params.id);
  res.status(200).json({success: true, message: "user fetched successfully", data: user});
}));

// Create a new user
router.post('/', asyncHandler(async(req, res)=>{
  try{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
      res.status(400).json({success: false, message: "name, email and password are required", data: []});
    }
    const user = new User({name, email, password});
    await user.save();
    res.status(201).json({success: true, message: "user saved successfully", data: user});
  }catch(error){
    next(error);
  }
}));

// Update a user
router.put('/:id', asyncHandler(async(req, res)=>{
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json({success: true, message: "user updated successfully", data: user});
}));

// Delete a user
router.delete('/:id', asyncHandler(async(req, res)=>{
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({success: true, message: "user deleted successfully", data: []});
}));

module.exports = router;