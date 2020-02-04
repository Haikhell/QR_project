const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  cookies: {}
});
module.exports = mongoose.model('Client', clientSchema);
