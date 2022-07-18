const Users = require("./Users");
const Item = require("./Items");
const Order = require("./Order");
const Category = require("./Category");

<<<<<<< HEAD
// Item.belongsTo(Users, {
//   foreignKey: "item_id",
// });

// Order.hasMany(Item, {
//   foreignKey: "order_id",
// });

// Users.hasMany(Order, {
//   foreignKey: "order_id",
// });

// Order.hasOne(Users, {
//   foreignKey: "order_id",
// });

=======
>>>>>>> 7b1fc8113a299347cc96d4028c28d5fdf85a7d1d
module.exports = { Users, Item, Order, Category };
