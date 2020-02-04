const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require('./category');

const menuSchema = new Schema({
  owner_id: mongoose.Types.ObjectId,
  title: String,
  categories: [ Category ]
});
module.exports = mongoose.model('Menu', menuSchema);
