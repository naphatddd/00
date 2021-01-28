const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    name: String,

    desc: String,

    image: String,

    category: String,

    price: Number,
  },
  {
    collation: "product",
  }
);

const product = mongoose.model("Product", schema);

module.exports = product;
