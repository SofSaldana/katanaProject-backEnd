const productsRouter = require("./productsRouter");
const usersRouter = require("./usersRouter");

const router = (app) => {
  app.use("/products", productsRouter);
  app.use("/users", usersRouter);
};

module.exports = router;
