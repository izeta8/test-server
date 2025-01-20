
const potionsDatabase = require("../database/Potion")

const getPotions = async () => {
  try {
    const potions = await potionsDatabase.getPotions();
    return potions;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPotions
}