const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  products: { type: Array },
  total: { type: Number },
  userId: { type: Schema.ObjectId },
  createdAt: { type: String },
  status: { type: String, default: "Pending" },
  trackingNumber: { type: String },
  shipmentMethod: { type: String },
  shipmentDate: { type: String },
});

module.exports = mongoose.model("UserOrders", schema);
