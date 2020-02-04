const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./item');

const orderSchema = new Schema({
  waiter: String,
  date: Date,
  table: Number,
  client: String,
  comment: String,
  items: Array,
  pay_method: String,
  status: String
});
module.exports = mongoose.model('Order', orderSchema);
