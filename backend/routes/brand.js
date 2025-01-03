const express  = require('express');
const router = express.Router();
const {Brand} = require('../models/brandmodel');
const asyncHandler = require('express-async-handler');
const upload = require('../file-upload');

//Get all brands
router.get('/', asyncHandler(async(req, res)=>{
  const brands = await Brand.find();
  res.status(200).json({success: true, message: "brands fetched successfully", data: brands});
}))

// get a brand by id
router.get('/:id', asyncHandler(async(req, res)=>{
  const brand = await Brand.findById(req.params.id);
  res.status(200).json({success: true, message: "brand fetched successfully", data: brand});
}))

// create a new brand
router.post('/', asyncHandler(async(req, res, next)=>{
  try{
      const {name, subCategoryId} = req.body;
      if(!name || !subCategoryId){
        return res.status(400).json({success: false, message: "name and subCategoryId are required", data: []});
      }
      const brand = new Brand({name, subCategoryId});
      await brand.save();
      res.status(201).json({success: true, message: "brand saved successfully", data: brand});
    }catch(error){
      next(error);
    }
}))

// update a brand
router.put('/:id', upload.single('image'), asyncHandler(async(req, res)=>{
  try{
    const {name} = req.body;
    const image = req.file ? req.file.filename : null;
    if(!name || !image){
      res.status(400).json({success: false, message: "name and image are required", data: []});
    }
    const brand = await Brand.findByIdAndUpdate(req.params.id, {name, image}, {new: true});
    res.status(200).json({success: true, message: "category updated successfully", data: brand});
  }catch(error){
    next(error);
  }
}))

// delete a brand
router.delete('/:id', asyncHandler(async(req, res)=>{
  const brand = await Brand.findByIdAndDelete(req.params.id);
  res.status(200).json({success: true, message: "brand deleted successfully", data: brand});
}))

module.exports = router;