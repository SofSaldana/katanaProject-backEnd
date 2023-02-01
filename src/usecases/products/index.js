const Product = require("../../models/products");

const newProduct = async (productData) => {
  const product = new Product(productData);
  const saveProduct = await product.save();
  return {
    id: saveProduct.id,
    name: saveProduct.name,
  };
};

const getProducts = async () => {
  const allProducts = await Product.find({});
  return allProducts;
};

const getProductCategory = async (category) => {
  const findProductsByCategory = await Product.find({ category });
  return findProductsByCategory;
};

module.exports = {
  newProduct,
  getProducts,
  getProductCategory,
};
