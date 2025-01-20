  const mongoose = require("mongoose");
  const { Schema } = mongoose;

  const potionSchema = new Schema({
    id: String,
    name: String,
    type: String,
    rarity: String,
    effects: {
      primary: {
        attribute: String,
        value: Number,
        duration: {
          unit: String,
          amount: Number,
        },
      },
      secondary: [
        {
          attribute: String,
          value: Number,
          duration: {
            unit: String,
            amount: Number,
          },
        },
      ],
    },
    ingredients: [
      {
        name: String,
        quantity: Number,
        origin: {
          location: String,
          region: String,
        },
      },
    ],
    crafting: {
      station: String,
      required_level: Number,
      time: {
        unit: String,
        amount: Number,
      },
    },
    usage: {
      instructions: [String],
      restrictions: {
        levelRequirement: Number,
        classRestrictions: [String],
        warnings: [String],
      },
    },
    meta: {
      created_by: String,
      lore: String,
      availability: {
        in_shops: Boolean,
        quest_reward: Boolean,
        drop_rate: {
          boss: String,
          chance: String,
        },
      },
    },
    image: String
  });

  module.exports = mongoose.model("Potion", potionSchema);
