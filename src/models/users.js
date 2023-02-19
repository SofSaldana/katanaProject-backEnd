const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  _id: ObjectId, 
  userName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true, minlength: 8 },
  shoppingHistory: { type: Array },
});

module.exports = mongoose.model("users", schema);
