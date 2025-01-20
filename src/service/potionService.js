
const potionsDatabase = require("../database/Potion")

const getPotions = async () => {
  try {
    const potions = await potionsDatabase.getPotions();
    return potions;
  } catch (error) {
    throw error;
  }
}

const getPotionById = async (potion_id) => {
  try {
    const potions = await potionsDatabase.getPotionById(potion_id);
    return potions;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPotions,
  getPotionById
}