
let potionGetMock = {
  "_id": {
    "$oid": "678e5efe61c122fc6db765b6"
  },
  "id": "potion_001",
  "name": "Elixir of Eternal Flame",
  "type": "consumable",
  "rarity": "legendary",
  "effects": {
    "primary": {
      "attribute": "fireResistance",
      "value": 80,
      "duration": {
        "unit": "minutes",
        "amount": 15
      }
    },
    "secondary": [
      {
        "attribute": "healthRegeneration",
        "value": 10,
        "duration": {
          "unit": "seconds",
          "amount": 300
        }
      },
      {
        "attribute": "staminaBoost",
        "value": 25,
        "duration": {
          "unit": "minutes",
          "amount": 5
        }
      }
    ]
  },
  "ingredients": [
    {
      "name": "Phoenix Feather",
      "quantity": 1,
      "origin": {
        "location": "Volcanic Crater",
        "region": "Everburning Peaks"
      }
    },
    {
      "name": "Molten Ember",
      "quantity": 3,
      "origin": {
        "location": "Infernal Forge",
        "region": "Depths of Agnarok"
      }
    },
    {
      "name": "Flameflower Extract",
      "quantity": 2,
      "origin": {
        "location": "Ashen Fields",
        "region": "Blazing Steppes"
      }
    }
  ],
  "crafting": {
    "station": "Alchemist's Crucible",
    "required_level": 25,
    "time": {
      "unit": "minutes",
      "amount": 45
    }
  },
  "usage": {
    "instructions": [
      "Shake well before use.",
      "Drink entirely to activate the effects.",
      "Avoid exposure to water for 10 minutes after consumption."
    ],
    "restrictions": {
      "levelRequirement": 15,
      "classRestrictions": [
        "Fire Mage",
        "Pyromancer",
        "Elemental Shaman"
      ],
      "warnings": [
        "Do not mix with Ice-based potions.",
        "May cause temporary overheating symptoms."
      ]
    }
  },
  "meta": {
    "created_by": "Grand Alchemist Tharion",
    "lore": "Crafted from the essence of eternal flames, this potion grants unmatched resistance and power to those who dare consume it.",
    "availability": {
      "in_shops": false,
      "quest_reward": true,
      "drop_rate": {
        "boss": "Infernal Dragon",
        "chance": "5%"
      }
    }
  },
  "image": "image_1.webp"
};


module.exports = {
  potionGetMock
}