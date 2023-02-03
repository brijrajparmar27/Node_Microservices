const express = require("express");
const cors = require("cors");
const foodRouter = require("./Routes/foodRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", foodRouter);

app.listen("4001", () => {
  console.log("listening for food routes on port 4001");
});
