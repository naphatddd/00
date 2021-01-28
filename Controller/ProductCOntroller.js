const Product = require("../models/product");

exports.index = async (req, res, next) => {
  const product = await Product.find();
  res.status(200).json(product);
};

exports.insert = async (req, res, next) => {
  const { name, price, category, desc, image } = req.body;
  const product = new Product({
    name: name,
    price: price,
    category: category,
    desc: desc,
    image: image,
  });
  await product.save();
  res.status(200).json(product);
};
