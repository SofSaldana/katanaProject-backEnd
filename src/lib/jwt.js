const jwt = require("jsonwebtoken");
const { app } = require("./config");

const createToken = (email, isAdmin) => {
  const payload = { email, isAdmin };
  return jwt.sign(payload, app.secret, { expiresIn: "1h" });
};

const verifyToken = (token) => jwt.verify(token, app.secret);

module.exports = { createToken, verifyToken };
