const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/fan-task-tic",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//
// const uri =
//   "mongodb+srv://MelissaLycan:Ai%24linn1%21@fandb.gt5rf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// var conn = mongoose.connection;
// conn.on("connected", function () {
//   console.log("database is connected successfully");
// });
// conn.on("disconnected", function () {
//   console.log("database is disconnected successfully");
// });
// conn.on("error", console.error.bind(console, "connection error:"));

module.exports = connection;
