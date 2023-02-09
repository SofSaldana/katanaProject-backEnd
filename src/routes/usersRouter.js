const express = require("express");
const router = express.Router();
const user = require("../usecases/users");

router.post("/post", async (req, res) => {
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

router.patch("/patch/:id", async (req, res) => {
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

router.get("/get", async (req, res) => {
  try {
    const showAllUsers = await user.getAllUsers();
    res.status(200).json({
      message: "Users",
      payload: showAllUsers,
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const showUser = await user.getUser(id);
    if (!showUser) throw new Error("User was not found");
    res.status(302).json({
      message: "User found",
      payload: showUser,
    });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
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
