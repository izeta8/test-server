
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
    const potion = await potionsDatabase.getPotionById(potion_id);
    return potion;
  } catch (error) {
    throw error;
  }
}

const insertPotion = async (newPotion) => {
  try {
    const insertedPotion = await potionsDatabase.insertPotion(newPotion);
    return insertedPotion;
  } catch (error) {
    throw error;
  }
}

const deletePotion = async (potionId) => {
  try {
    const deletedPotion = await potionsDatabase.deletePotion(potionId);
    return deletedPotion;
  } catch (error) {
    throw error;
  }
}

const updatePotion = async (potionId, newPotion) => {
  try {
    const updatedPotion = await potionsDatabase.updatePotionById(potionId, newPotion);
    return updatedPotion;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPotions,
  getPotionById,
  insertPotion,
  deletePotion,
  updatePotion
}