const { Schema, model, Model } = require("mongoose");

const priceSchema = new Model({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    primaryKey: true,
    autoIncrement: true,
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
  inventory_id: {
    type: Number,
    references: {
      model: "inventory",
      key: "id",
    },
  },
});

const Pricing = model("Pricing", priceSchema);
module.exports = Pricing;
