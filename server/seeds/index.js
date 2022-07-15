const seedInventory = require("./inventory_seeds");
const seedUsers = require("./users_seeds");
const seedPricing = require("./pricing_seeds");
const db = require("../config/connection");
const { Profile } = require("../models");
const profileSeeds = require("./profileSeeds.json");

db.once("open", async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

const { Inventory, Users, Pricing } = require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedInventory();
  console.log("\n----- Inventory SEEDED -----\n");
  await seedPricing();
  console.log("\n----- Pricing SEEDED -----\n");
  await seedUsers();
  console.log("\n----- Users SEEDED -----\n");
  process.exit(0);
};
seedAll();
