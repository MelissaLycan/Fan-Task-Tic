const db = require("../config/connection");
const { User, BandInfo, Item } = require("../models");
const userSeeds = require("./userSeeds.json");
const bandSeeds = require("./bandSeeds.json");
const itemSeeds = require("./itemSeeds.json");
const memberSeeds = require("./memberSeeds.json");
const Members = require("../models/Members");

function getObj(item, index, input) {
  input[index] = item._id;
}

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await BandInfo.deleteMany({});
    await Item.deleteMany({});
    await Members.deleteMany({});
    await Members.create(memberSeeds);
    await Item.create(itemSeeds);
    const allItems = await Item.find({});
    await BandInfo.create(bandSeeds);
    await User.create(userSeeds);
    const allBands = await BandInfo.find({});

    allItems.forEach(getObj);

    await BandInfo.findOneAndUpdate(
      { bandName: "nordicdaughter" },
      { $push: { inventory: allItems } },
      { returnNewDocument: true }
    );
    console.log(allItems);
    allBands.forEach(getObj);
    await User.findOneAndUpdate(
      { username: "MelissaLycan" },
      { $push: { bandMember: allBands } },
      { returnNewDocument: true }
    );
    console.log(allBands);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
