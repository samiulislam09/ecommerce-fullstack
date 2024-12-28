const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const brandSchema = new Schema({
  name: String,
  subCategoryId: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true
  },
  
}, { timestamps: true });

exports.Brand = model('Brand', brandSchema);