
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRouter = process.env.CONNECTION_STRING;
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Routes
const potionRouter = require("./src/routes/potionRoutes");
app.use("/api/potions", potionRouter);


// Start 
(async() => {
  try {
    await mongoose.connect(mongodbRouter);
    console.log("Conexión a MongoDB correcta.");
    app.listen(PORT, () => {
      console.log(`Server listening to port ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error al iniciar servidor: ${error.message}`)
    }
  }
})();