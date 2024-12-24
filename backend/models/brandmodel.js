const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const brandSchema = new Schema({
  name: String,
  image: String,
})

exports.Brand = model('Brand', brandSchema);