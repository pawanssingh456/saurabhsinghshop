require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

// const userRoutes = require("./routes/user");
// const luckyRoutes = require("./routes/lucky");

// const database = require("./config/database");

const app = express();
const port = process.env.PORT;

// /* Initialization */
// database.initialize((error) => {
//   if (error) {
//     console.error("Error connecting to Sharp Interiors Database");
//     console.error(error);
//     process.exit(1);
//   }
//   console.log("Connected to Sharp Interiors Database");
// });

app.listen(port, () =>
  console.log(`Saurabh Singh Shops is listening on port ${port}`)
);

// /* Wiring */
app.use(bodyParser.json());

// app.use("/lucky", luckyRoutes);
app.get("/", (req, res) => {
  res.send("This is a sample express app");
});
