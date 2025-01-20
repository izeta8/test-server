
const express = require("express");
const router = express.Router();

const potionController = require("../controller/potrionController");

router.get("/", potionController.getPotions);

module.exports = router;