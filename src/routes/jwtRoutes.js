


const express = require("express");
const router = express.Router();

const jwtController = require("../controller/jwtController");

// router.post("/access-token", jwtController.generateAccessToken);
router.post("/generate-tokens", )
router.post("/refresh-token", jwtController.generateAccessToken);

module.exports = router;