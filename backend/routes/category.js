const express  = require('express');
const router = express.Router();
const {Category} = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');
const upload = require('../file-upload');


// Get all categories
router.get('/', asyncHandler(async(req, res)=>{
  const categories = await Category.find();
  res.status(200).json({success: true, message: "categories fetched successfully", data: categories});
}))

// Create a new category
router.post('/', upload.single('image'), asyncHandler(async(req, res, next)=>{
  try{
    const {name} = req.body;
    const image = req.file ? req.file.filename : null;
    if(!name || !image){
      res.status(400).json({success: false, message: "name and image are required", data: []});
    }
    const category = new Category({name, image});
    await category.save();
    res.status(201).json({success: true, message: "category saved successfully", data: category});
  }catch(error){
    next(error);
  }
}))

// update a category
router.put('/:id', upload.single('image'), asyncHandler(async(req, res, next)=>{
  try{
    const {name} = req.body;
    const image = req.file ? req.file.filename : null;
    if(!name || !image){
      res.status(400).json({success: false, message: "name and image are required", data: []});
    }
    const category = await Category.findByIdAndUpdate(req.params.id, {name, image}, {new: true});
    res.status(200).json({success: true, message: "category updated successfully", data: category});
  }catch(error){
    next(error);
  }
}))


module.exports = router;

