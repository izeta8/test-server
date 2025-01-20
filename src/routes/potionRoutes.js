
const express = require("express");
const router = express.Router();

const potionController = require("../controller/potrionController");
const middleware = require("../middlewares/verifyData");

router.get("/", potionController.getPotions);
router.get("/:potion_id", potionController.getPotionsById);
router.post("/", middleware.verify, potionController.insertPotion);
router.delete("/:potionId", potionController.deletePotion);
router.patch("/:potionId", potionController.updatePotion);

module.exports = router;