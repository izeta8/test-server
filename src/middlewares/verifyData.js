

const verify = async (req, res, next) => {

  const { body } = req;

  if (!body.id || !body.name || !body.type || !body.rarity || !body.ingredients || !body.usage || !body.meta || !body.crafting || !body.effects) {
    res.status(404).send({status: "FAILED", error: "Some data from the potion hasnt been specified."})
    return;
  }

  next(); 

}

module.exports = { verify };