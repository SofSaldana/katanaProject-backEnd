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

module.exports = router;
