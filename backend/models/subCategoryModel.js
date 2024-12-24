const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const subCategorySchema = new Schema({
  name: String,
  id: String,
});


exports.SubCategory = model('subCatagory', subCategorySchema);