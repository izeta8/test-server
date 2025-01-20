const potionsService = require("../service/potionService");

const getPotions = async (req, res) => {
  try {
    const potions = await potionsService.getPotions();
    res.status(200).send({status: "OK", data: potions});
  } catch (error) {
    res.status(500).send({status: "FAILED", error: error?.message})
  }
}

const getPotionsById = async (req, res) => {
  try {
    const {params: {potion_id}} = req;

    if (!potion_id) {
      res.status(404).send({status: "FAILED", error: "Parameter ':potion_id' not specified"})
    }

    const potion = await potionsService.getPotionById(potion_id);
    
    if (potion.length === 0) {
      res.status(404).send({status: "FAILED", error: `Can't find potion with id: ${potion_id}`})
    }
    
    res.status(200).send({status: "OK", data: potion[0]});
    
  } catch (error) {
    res.status(500).send({status: "FAILED", error: error?.message})
  }
}

const insertPotion = async (req, res) => {
  try {
    const {body} = req;

    const newPotion = {
      id: body.id, 
      name: body.name, 
      type: body.type, 
      rarity: body.rarity, 
      ingredients: body.ingredients, 
      usage: body.usage, 
      meta: body.meta, 
      crafting: body.crafting, 
      effects: body.effects,
      image: body.image
    }

    if (!body.id || !body.name || !body.type || !body.rarity || !body.ingredients || !body.usage || !body.meta || !body.crafting || !body.effects) {
      res.status(404).send({status: "FAILED", error: "Some data from the potion hasnt been specified."})
    }

    const insertedPotion = await potionsService.insertPotion(newPotion);
    
    if (!insertedPotion) {
      res.status(404).send({status: "FAILED", error: `Could not insert potion`})
    }
    
    res.status(200).send({status: "OK", data: insertedPotion});
    
  } catch (error) {
    res.status(500).send({status: "FAILED", error: error?.message})
  }
}

module.exports = {
  getPotions,
  getPotionsById,
  insertPotion
}