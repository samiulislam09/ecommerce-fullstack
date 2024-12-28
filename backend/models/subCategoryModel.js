const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const subCategorySchema = new Schema({
  name: String,
  id: String,
}, {timestamps: true});


exports.SubCategory = model('subCatagory', subCategorySchema);