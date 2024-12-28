const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const VariantTypeSchema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {timestamps: true});

exports.VariantType = model('VariantType', VariantTypeSchema);