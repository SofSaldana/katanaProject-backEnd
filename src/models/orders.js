const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: "products" }],
  buyer: [{ type: Schema.Types.ObjectId, ref: "users" }],
});

module.exports = mongoose.model("orders", schema);
