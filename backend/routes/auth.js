const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {User} = require('../models/userModel');
const { model } = require('mongoose');


// login
router.post('/login', asyncHandler(async(req, res)=>{
  const {email, password} = req.body;
  if(!email || !password){
    res.status(400).json({success: false, message: "email and password are required", data: []});
    return;
  }
  // check if user exists
  const user = await User.findOne({email});
  if(!user){
    res.status(404).json({success: false, message: "user not found", data: []});
    return;
  };
  // check if password is correct
  if(user.password !== password.toString()){
    res.status(400).json({success: false, message: "password is incorrect", data: []});
    return;
  };
  res.status(200).json({success: true, message: "login successful", data: user});
}));


module.exports = router;