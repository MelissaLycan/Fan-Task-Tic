const Users = require("./Users");
const Item = require("./Items");
const Order = require("./Order");
const Category = require("./Category");

Item.belongsTo(Users, {
  foreignKey: "item_id",
});

Order.hasMany(Item, {
  foreignKey: "order_id",
});

Users.hasMany(Order, {
  foreignKey: "order_id",
});

Order.hasOne(Users, {
  foreignKey: "order_id",
});

module.exports = { Users, Item, Order, Category };
