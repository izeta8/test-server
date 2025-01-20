
const express = require("express");
const router = express.Router();

const potionController = require("../controller/potrionController");

router.get("/", potionController.getPotions);
router.get("/:potion_id", potionController.getPotionsById);
router.post("/", potionController.insertPotion);
router.delete("/:potionId", potionController.deletePotion);

module.exports = router;