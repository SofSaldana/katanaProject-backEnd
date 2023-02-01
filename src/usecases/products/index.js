const Product = require("../../models/products");

const newProduct = async (productData) => {
  const product = new Product(productData);
  const saveProduct = await product.save();
  return {
    id: saveProduct.id,
    name: saveProduct.name,
  };
};

module.exports = {
  newProduct,
};
