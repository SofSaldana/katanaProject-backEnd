const express = require("express");
const router = express.Router();
const product = require("../usecases/products");

router.post("/", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const showAllProducts = await product.getProducts();
    res.status(200).json({
      message: "Products",
      payload: showAllProducts,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const showProduct = await product.getProductById(id);
    if (!showProduct) throw new Error("Product was not found");
    res.status(302).json({
      message: "Product found",
      payload: showProduct,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/category", async (req, res) => {
  try {
    const getProduct = await product.getProductCategory(req.body.category);
    if (getProduct.length === 0) throw new Error("Product not found");
    res.status(200).json({
      message: "Product by category",
      payload: getProduct,
    });
  } catch (error) {
    console.error(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const patchProduct = await product.updateProduct(id, update);
    if (!patchProduct) throw new Error("Product was not updated");
    res.status(202).json({
      message: "Updated",
      payload: patchProduct,
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProductbyId = await product.deleteProduct(id);
    if (!deleteProductbyId) throw new Error("Product was not deleted");
    res.status(202).json({
      message: "Deleted",
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
