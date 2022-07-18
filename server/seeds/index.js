const db = require("../config/connection");
const { Users } = require("../models");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
  try {
    await Users.deleteMany({});
    await Users.create(userSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
