const express = require("express");
const router = express.Router();
const product = require("../usecases/products");

router.post("/create", async (req, res) => {
  try {
    const newProduct = await product.newProduct(req.body);
    if (!newProduct) throw new Error("Product was not created");
    res.status(201).json({
      message: "New product created",
      payload: newProduct,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/get", async (req, res) => {
  try {
    const showAllProducts = await product.getProducts();
    res.status(302).json({
      message: "Products",
      payload: showAllProducts,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/get/category", async (req, res) => {
  try {
    const getProduct = await product.getProductCategory(req.body.category);
    if (getProduct.length === 0) throw new Error("Product not found");
    res.status(302).json({
      message: "Product by category",
      payload: getProduct,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
