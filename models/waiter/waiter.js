const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waiterSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  login: String,
  password: String
});
module.exports = mongoose.model('Waiter', waiterSchema);
