const express = require('express');
const router = express.Router();
const {Product} = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const upload = require('../file-upload');

// Get all products
router.get('/', asyncHandler(async(req, res)=>{
  const products = await Product.find();
  res.status(200).json({success: true, message: "products fetched successfully", data: products});
}));

// Get a product by id
router.get('/:id', asyncHandler(async(req, res)=>{
  const product = await Product.findById(req.params.id);
  res.status(200).json({success: true, message: "product fetched successfully", data: product});
}));

// Create a new product
router.post('/', upload.single('image'), asyncHandler(async(req, res, next)=>{
  try{
    const {name, price, categoryId, subCategoryId, brandId} = req.body;
    const image = req.file ? req.file.filename : null;
    if(!name || !price || !categoryId || !subCategoryId || !brandId || !image){
      res.status(400).json({success: false, message: "name, price, categoryId, subCategoryId, brandId and image are required", data: []});
    }
    const product = new Product({name, price, categoryId, subCategoryId, brandId, image});
    await product.save();
    res.status(201).json({success: true, message: "product saved successfully", data: product});
  }catch(error){
    next(error);
  }
}));

// Update a product
router.put('/:id', upload.single('image'), asyncHandler(async(req, res, next)=>{
  try{
    const {name, price, categoryId, subCategoryId, brandId} = req.body;
    const image = req.file ? req.file.filename : null;
    if(!name || !price || !categoryId || !subCategoryId || !brandId || !image){
      res.status(400).json({success: false, message: "name, price, categoryId, subCategoryId, brandId and image are required", data: []});
    }
    const product = await Product.findByIdAndUpdate(req.params.id, {name, price, categoryId, subCategoryId, brandId, image}, {new: true});
    res.status(200).json({success: true, message: "product updated successfully", data: product});
  }catch(error){
    next(error);
  }
}));

// Delete a product
router.delete('/:id', asyncHandler(async(req, res)=>{
  const product = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({success: true, message: "product deleted successfully", data: product});
}));



module.exports = router;