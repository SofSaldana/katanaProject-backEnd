const productsRouter = require("./productsRouter");
const usersRouter = require("./usersRouter");
const paymentRouter = require("./paymentsCheckout");
const userOrdersRouter = require("./userOrdersRouter");

const router = (app) => {
  app.use("/products", productsRouter);
  app.use("/users", usersRouter);
  app.use("/payment", paymentRouter);
  app.use("/user-order", userOrdersRouter);
};

module.exports = router;
