const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  quantity:{
    type: Number,
    required: [true, 'Product quantity is required'],
  },
  price:{
    type: Number,
    required: [true, 'Product price is required'],
  },
  offerPrice:{
    type: Number,
    required: [true, 'Product offer price is required'],
  },
  productCategoryID: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  productSubCategoryID: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true
  },
  productBrandID: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  productVariantTypeId: {
    type: Schema.Types.ObjectId,
    ref: 'VariantType',
    required: true
  },
  productImages: {
    type: Array,
    required: [true, 'Product images is required'],
  },
  isActive: {
    type: Boolean,
    default: true
  }

})