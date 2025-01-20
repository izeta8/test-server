
const Potion = require("../models/potionModel");

const getPotions = async () => {
  try {
    const potions = await Potion.find();
    return potions;
  } catch (error) {
    throw error;
  }
}

const getPotionById = async (potion_id) => {
  try {
    const potions = await Potion.find({id: potion_id});
    return potions;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPotions,
  getPotionById
}