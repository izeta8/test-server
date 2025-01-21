
const express = require("express");
const router = express.Router();

const potionController = require("../controller/potrionController");
const potionsMiddleware = require("../middlewares/verifyData");
const jwtMiddleware = require("../middlewares/jwtMiddleware");

router.get("/", jwtMiddleware.authenticateToken, potionController.getPotions);
router.get("/:potion_id", potionController.getPotionsById);
router.post("/", potionsMiddleware.verify, potionController.insertPotion);
router.delete("/:potionId", potionController.deletePotion);
router.patch("/:potionId", potionController.updatePotion);

module.exports = router;