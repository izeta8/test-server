const potionsService = require("../service/potionService");

const getPotions = async (req, res) => {

  try {
    const potions = await potionsService.getPotions();
    res.status(200).send({status: "OK", data: potions});
  } catch (error) {
    if (error instanceof Error){
      res.status(500).send({"status": "FAILED", error: error?.message})
    }
  }

}

module.exports = {
  getPotions
}