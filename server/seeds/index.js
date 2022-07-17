const db = require("../config/connection");
const { Users } = require("../models");
const userSeeds = require("./userSeeds.json");
// const { Inventory } = require("../models");
// const invSeeds = require("./invSeeds.json");

db.once("open", async () => {
  try {
    await Users.deleteMany({});
    // await Inventory.create(invSeeds);
    await Users.create(userSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
