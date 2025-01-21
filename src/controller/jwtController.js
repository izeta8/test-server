const jwtService = require("../service/jwtService")


const generateAccessToken = (req, res) => {

  try {

    const {email} = req.body;

    if (!email) {
      res.status(400).send({status: "FAILED", error: "Email data is missing"});
      return;
    }

    const accessToken = jwtService.generateAccessToken(email);

    if (!accessToken) {
      res.status(400).send({status: "FAILED", error: "There has been an error generating the access token"});
      return;
    }
    
    res.status(200).send({status: "OK", data: accessToken});

  } catch (error) {
    res.status(500).send({status: "FAILED", error: error.message})
  }

}

const generateRefreshToken = (req, res) => {

  try {

    const {email} = req.body;

    if (!email) {
      res.status(400).send({status: "FAILED", error: "Email data is missing"});
      return;
    }

    const refreshToken = jwtService.generateRefreshToken(email);

    if (!refreshToken) {
      res.status(400).send({status: "FAILED", error: "There has been an error generating the refresh token"});
      return;
    }
    
    res.status(200).send({status: "OK", data: refreshToken});

  } catch (error) {
    res.status(500).send({status: "FAILED", error: error.message})
  }

}

module.exports = {
  generateAccessToken,
  generateRefreshToken
}