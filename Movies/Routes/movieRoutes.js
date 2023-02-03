const express = require("express");

const Router = express.Router();

Router.get("/movies", (req, res) => {
  res.json({ msg: "get movies" });
});

module.exports = Router;
