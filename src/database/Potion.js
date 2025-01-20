
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

// const updatePlayerByEmail = async (emailFilter, newPlayerData) => {

//   try {

//     // Find the player by field and update with newPlayer data
//     const updatedPlayer = await Player.findOneAndUpdate(
//       { email: emailFilter },     // Filter (find player with this field)
//       { $set: newPlayerData },  // '$use' is to merge only the specified fields in newPlayer
//       { new: true }         // Return the updated document
//     );

//     // If no player is found, you might want to handle it
//     if (!updatedPlayer) {
//       console.log(`Player with email ${emailFilter} not found.`);
//       return null; // Return null if no player is found
//     }

//     return updatedPlayer;

//   } catch (error) {
//     console.log(`Error updating player with field ${emailFilter}:`, error);
//     throw error;
//   }
// };


module.exports = {
  getPotions,
  getPotionById,
  insertPotion,
  deletePotion
}