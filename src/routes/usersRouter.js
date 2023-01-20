const express = require("express");
const router = express.Router();
const user = require("../usecases/users");

router.post("/create", async (req, res) => {
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

module.exports = router;