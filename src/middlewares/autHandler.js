const { verifyToken } = require("../lib/jwt");

const autHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization.split(" ")[1];
  try {
    req.params.token = verifyToken(token);
    next();
  } catch (error) {
    const { message } = error;
    res.status(401).json({ ok: false, message });
  }
};

module.exports = { autHandler };
