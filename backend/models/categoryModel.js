const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const categorySchema = new Schema({
  name: String,
  image: String,
});

exports.Category = model('category', categorySchema);