const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./item');

const categorySchema = new Schema({
  name: String,
  items: [ { type: mongoose.Types.ObjectId, ref: 'Item' } ]
});
module.exports = mongoose.model('Category', categorySchema);
