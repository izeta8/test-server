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


module.exports = {
  getPotions,
  getPotionsById
}