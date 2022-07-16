const Users = require("./Users");
const Pricing = require("./Pricing");
const Inventory = require("./Inventory");
const Order = require("./Order");
const Category = require("./Category");

// Inventory.hasOne(Pricing, {
//   foreignKey: "inventory_id",
// });

// Pricing.belongsTo(Inventory, {
//   foreignKey: "inventory_id",
// });

// Inventory.belongsTo(Users, {
//   foreignKey: "inventory_id",
// });

// Order.hasMany(Inventory, {
//   foreignKey: "order_id",
// });

// Users.hasMany(Order, {
//   foreignKey: "order_id",
// });

// Order.hasOne(Users, {
//   foreignKey: "order_id",
// });

module.exports = { Users, Pricing, Inventory, Order, Category };
