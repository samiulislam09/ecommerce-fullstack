const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
}, {timestamps: true});

exports.User = model('User', userSchema);