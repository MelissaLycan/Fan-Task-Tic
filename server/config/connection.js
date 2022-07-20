const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fan-task-tic",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});
conn.on("disconnected", function () {
  console.log("database is disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
