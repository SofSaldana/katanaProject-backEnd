const { verifyToken } = require("../lib/jwt");

const autHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization;
  try {
    const verify = verifyToken(token);
    if (verify) {
      next();
    } else {
      res.status(401).json({ ok: false, message: "Token Invalido" });
    }
  } catch (error) {
    const { message } = error;
    res.status(401).json({ ok: false, message });
  }
};

const isAdmin = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization;
  try {
    const verify = verifyToken(token);
    if (verify && verify.isAdmin === true) {
      next();
    } else {
      res.status(403).json({
        ok: false,
        message: "No estás autorizado para ver este contenido",
      });
    }
  } catch (error) {
    const { message } = error;
    res.status(401).json({ ok: false, message });
  }
};

module.exports = { autHandler, isAdmin };
