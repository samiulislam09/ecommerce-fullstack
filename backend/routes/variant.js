const express = require('express');
const { VariantType } = require('../models/variant');
const router = express.Router();
const asyncHandler = require('express-async-handler');


// Get all variant types
router.get('/', asyncHandler(async(req, res)=>{
  const variantTypes = await VariantType.find();
  res.status(200).json({success: true, message: "variant types fetched successfully", data: variantTypes});
}))

// Get a variant type by id
router.get('/:id', asyncHandler(async(req, res)=>{
  const variantType = await VariantType.findById(req.params.id); 
  res.status(200).json({success: true, message: "variant type fetched successfully", data: variantType});
}));

// Create a new variant type
router.post('/', asyncHandler(async(req, res)=>{
  try{
    const {name} = req.body;
    if(!name){
      res.status(400).json({success: false, message: "name is required", data: []});
    }
    const variantType = new VariantType({name});
    await variantType.save();
    res.status(201).json({success: true, message: "variant type saved successfully", data: variantType});
  }catch(error){
    next(error);
  }
}));

// Update a variant type
router.put('/:id', asyncHandler(async(req, res)=>{
  try{
    const {name} = req.body;
    if(!name){
      res.status(400).json({success: false, message: "name is required", data: []});
    }
    const variantType = await VariantType.findByIdAndUpdate(req.params.id, {name}, {new: true});
    res.status(200).json({success: true, message: "variant type updated successfully", data: variantType});
  }catch(error){
    next(error);
  }
}));

// Delete a variant type
router.delete('/:id', asyncHandler(async(req, res)=>{
  const variantType = await VariantType.findByIdAndDelete(req.params.id);
  res.status(200).json({success: true, message: "variant type deleted successfully", data: variantType});
}));

module.exports = router;

