const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  order_id: {
    type: Schema.Types.ObjectId,
    unique: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
