const express = require('express');
const router = express.Router();
const {SubCategory} = require('../models/subCategoryModel');
const asyncHandler = require('express-async-handler');

// Create a new subCategory
router.post('/', asyncHandler(async(req, res)=>{
  const {name, id: id} = req.body;
  if(!name || !id){
    res.status(400).json({success: false, message: "name and id are required", data: []});
  }
  const subCategory = new SubCategory({name, id: id});
  await subCategory.save();
  res.status(201).json({success: true, message: "subCategory saved successfully", data: subCategory});
}))

// Get all subCategories
router.get('/', asyncHandler(async(req, res)=>{
  const subCategories = await SubCategory.find();
  res.status(200).json({success: true, message: "subCategories fetched successfully", data: subCategories});
}))

// Get a single subCategory
router.get('/:id', asyncHandler(async(req, res)=>{
  const subCategories = await SubCategory.find({id: req.params.id});
  res.status(200).json({success: true, message: "subCategories fetched successfully", data: subCategories});
}))

// Update a subCategory
router.put('/:id', asyncHandler(async(req, res)=>{
  const {name, id} = req.body;
  if(!name || !id){
    res.status(400).json({success: false, message: "name and id are required", data: []});
  }
  const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, {name, id}, {new: true});
  res.status(200).json({success: true, message: "subCategory updated successfully", data: subCategory});
}))

// Delete a subCategory
router.delete('/:id', asyncHandler(async(req, res)=>{
  const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
  res.status(200).json({success: true, message: "subCategory deleted successfully", data: subCategory});
}))
module.exports = router;





