
const Potion = require("../models/potionModel");

const getPotions = async () => {
  try {
    const potions = await Potion.find();
    return potions;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPotions,
}