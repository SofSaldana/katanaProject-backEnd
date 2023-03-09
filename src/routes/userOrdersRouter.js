const express = require("express");
const router = express.Router();
const userOrder = require("../usecases/userOrders");

router.post("/", async (req, res) => {
  try {
    const newOrder = await userOrder.newOrder(req.body);
    if (!newOrder) throw new Error("Order was not created");
    res.status(201).json({
      message: "New order created",
      payload: newOrder,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const showAllOrders = await userOrder.getOrders();
    res.status(200).json({
      message: "Orders",
      payload: showAllOrders,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
