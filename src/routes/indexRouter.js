const productsRouter = require("./productsRouter");
const usersRouter = require("./usersRouter");
const paymentRouter = require("./paymentsCheckout");

const router = (app) => {
  app.use("/products", productsRouter);
  app.use("/users", usersRouter);
  app.use("/payment", paymentRouter);
};

module.exports = router;
