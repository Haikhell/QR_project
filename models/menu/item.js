const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    name: String,
    category: String,
    quantity: Number,
    price: [ Number ],
    description: String,
    variants: [ String ],
    comment: String,
    tags: [ String ],
    modificators: [
      {
        name: String,
        price: Number
      }
    ],
    available: { type: Boolean, default: true }
  },
  { collection: 'items' }
);
module.exports = mongoose.model('Item', itemSchema);
