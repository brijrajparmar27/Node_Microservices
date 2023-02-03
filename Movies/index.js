const express = require("express");
const cors = require("cors");
const movieRouter = require("./Routes/movieRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", movieRouter);

app.listen("4002", () => {
  console.log("listening for movies routes on port 4002");
});
