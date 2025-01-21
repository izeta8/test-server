
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
    const potion = await Potion.findOne({id: potion_id});
    return potion;
  } catch (error) {
    throw error;
  }
}

const insertPotion = async (newPotion) => {
  try {
    const potionToInsert = new Potion(newPotion);
    const createdPotion = await potionToInsert.save();
    return createdPotion;
  } catch (error) {
    throw error;
  }
}

const deletePotion = async (potionId) => {
  try {
    const deletedPotion = await Potion.findOneAndDelete({ id: potionId });

    if (!deletedPotion) {
      console.log(`Potion with id '${potionId}' not found`);
      return null;
    }
    return deletedPotion;
  } catch (error) {
    throw error;
  }
};

const updatePotionById = async (potionId, newPotion) => {

  try {

    const updatedPotion = await Potion.findOneAndUpdate(
      { id: potionId },     // Filter (find player with this field)
      { $set: newPotion },  // '$use' is to merge only the specified fields
      { new: true }         // Return the updated document
    );

    if (!updatedPotion) {
      console.log(`Potion with id ${potionId} not found.`);
      return null; 
    }

    return updatedPotion;

  } catch (error) {
    throw error;
  }
};


module.exports = {
  getPotions,
  getPotionById,
  insertPotion,
  deletePotion,
  updatePotionById
}