const express = require("express");
const router = express.Router();
const user = require("../usecases/users");
const { autHandler } = require("../middlewares/autHandler");
const { createToken } = require("../lib/jwt");

router.get("/authgoogle", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

router.get("/sign-up", (req, res) => {
  res.oidc.login({
    authorizationParams: {
      prompt: "login",
      screen_hint: "signup",
    },
  });
});

router.get("/", autHandler, async (req, res) => {
  const id = req.token.sub;
  const { email, userName } = await getById(id);
  res.json({ ok: true, payload: { email, userName } });
});

router.post("/", async (req, res) => {
  try {
    const newUser = await user.newUser(req.body);
    if (!newUser) throw new Error("User was not created");
    res.status(201).json({
      message: "New user created",
      payload: newUser,
    });
  } catch (error) {
    console.error(error);
  }
});

router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  try {
    const auth = await user.authenticate(email, password);
    if (auth.authPassed) {
      const token = createToken(email, auth.userAdmin);
      res.status(200).json({ ok: true, token });
    }
  } catch (error) {
    const { message } = error;
    res.status(401).json({ ok: false, message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const patchUser = await user.updateUser(id, update);
    if (!patchUser) throw new Error("User was not updated");
    res.status(202).json({
      message: "Updated",
      payload: patchUser,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const showUser = await user.getUser(id);
    if (!showUser) throw new Error("User was not found");
    res.status(200).json({
      message: "User found",
      payload: showUser,
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const eraseUser = await user.deleteUser(id);
    if (!eraseUser) throw new Error("User was not deleted");
    res.status(202).json({
      message: "User deleted",
      payload: eraseUser.id,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
