const express = require("express");
const app = express();
const router = require("./src/routes/indexRouter");
const config = require("./src/lib/config");
const db = require("./src/lib/db");
const { auth } = require("express-openid-connect");

app.use(express.json());
app.use(auth(config.auth0));
router(app);

app.listen(config.app.port, async () => {
  console.log(`Esuchando peticiones HTTP en el puerto ${config.app.port}`);

  try {
    await db.connect();
    console.log("DB is connected");
  } catch (err) {
    console.error("Connection refused:", err);
  }
});
