const mysql = require("mysql");
const db = mysql.createConnection({
  /*THE VALUES BELOW ARE NOT THE ONES I HAVE TO USE*/
  host: "localhost",
  user: "username",
  password: "password",
  port: "port",
  database: "fan-task-tic",
});

module.exports = db;
