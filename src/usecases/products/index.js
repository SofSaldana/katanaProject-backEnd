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

const getProductIdCart = async (productsIds) => {
  const findProductsByIdCart = await Product.find({
    _id: { $in: productsIds.id },
  });
  return findProductsByIdCart;
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
  getProductIdCart,
  getProductCategory,
  deleteProduct,
  updateProduct,
};
