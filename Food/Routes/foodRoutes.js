const express = require("express");

const Router = express.Router();

Router.get("/foods", (req, res) => {
  res.json({ msg: "get foods" });
});
Router.post("/foods", (req, res) => {
  res.json({ msg: "set foods" });
});
Router.delete("/foods/:id", (req, res) => {
  res.json({ msg: "delete foods" });
});
module.exports = Router;
