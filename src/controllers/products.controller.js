import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  const {name, category, price, imgUrl} = req.body;
  const newProduct = new Product({name, category, price, imgUrl});
  const productSaved = await newProduct.save();
  res.status(201).send(productSaved);
};

export const getProducts = async (req, res) => {
  const findedProducts = await Product.find();
  res.json(findedProducts);
};

export const getProductById = async (req, res) => {
  const findedProduct = await Product.findById(req.params.pid);
  res.json(findedProduct);
};

export const updateProductById = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.pid,
    req.body,
    {new: true}
  );
  res.status(200).json(updatedProduct);
};

export const deleteProductById = async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.pid);
  res.status(204).json();
};
