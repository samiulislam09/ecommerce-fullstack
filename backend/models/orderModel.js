const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  paymentId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  }
}, {timestamps: true});

const Order = model('Order', OrderSchema);