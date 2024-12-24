const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const subCategorySchema = new Schema({
  name: String,
  catId: String,
});

exports.SubCategory = model('category', subCategorySchema);