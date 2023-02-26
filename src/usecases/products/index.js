const Product = require("../../models/products");

const newProduct = async (productData) => {
  const product = new Product(productData);
  const saveProduct = await product.save();
  return {
    id: saveProduct.id,
    name: saveProduct.name,
  };
};

const getProductById = async (id) => await Product.findById(id).exec();

const getProducts = async () => {
  const allProducts = await Product.find({});
  return allProducts;
};

const getProductCategory = async (category) => {
  const findProductsByCategory = await Product.find({ category });
  return findProductsByCategory;
};

const updateProduct = async (id, update) => {
  const patchProduct = await Product.findByIdAndUpdate(id, update, {
    new: true,
  }).exec();
  return patchProduct;
};

const deleteProduct = async (id) => await Product.findByIdAndDelete(id).exec();

module.exports = {
  newProduct,
  getProducts,
  getProductCategory,
  deleteProduct,
  updateProduct,
  getProductById,
};
