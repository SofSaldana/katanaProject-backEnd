const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        ref: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        title: { type: String, required: true },
        description: { type: String, required: true },
        picture_url: { type: String, required: true },
        quantity: { type: Number, required: true },
        currency: { type: String },
        totalPrice: { type: Number, required: true },
      },
    ],
    isPaid: { type: Boolean, required: true, default: false },
    paymentMethod: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", schema);
