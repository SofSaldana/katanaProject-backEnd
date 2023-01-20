const cartRouter = require("./cartRouter");
const ordersRouter = require("./ordersRouter");
const productsRouter = require("./productsRouter");
const userAdministratorRouter = require("./userAdministratorRouter");

const router = (app) => {
  app.use("/cart", cartRouter);
  app.use("/orders", ordersRouter);
  app.use("/products", productsRouter);
  app.use("/user", userAdministratorRouter);
};

module.exports = router;
