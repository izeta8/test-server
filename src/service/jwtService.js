
require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateAccessToken = (email) => {
  return jwt.sign({data: email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"});
}

const generateRefreshToken = (email) => {
  return jwt.sign({data: email}, process.env.REFRESH_TOKEN_SECRET);
}

module.exports = {
  generateAccessToken,
  generateRefreshToken
}