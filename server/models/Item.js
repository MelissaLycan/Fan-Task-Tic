const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image_file: {
    type: String,
    required: true,
  },
  current_stock: {
    type: Number,
    required: false,
    defaultValue: 0,
  },
  cost: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  sales_price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  order_link: {
    type: String,
    required: false,
  },
});

const Item = model("Item", itemSchema);
module.exports = Item;
