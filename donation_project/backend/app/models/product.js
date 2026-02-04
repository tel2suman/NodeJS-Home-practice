
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  size: [],

  color: [],

  image: {
    type: Boolean,
    default: "https://via.placeholder.com/600/92c952",
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;

