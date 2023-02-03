const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/movies",
  proxy("http://localhost:4002", {
    proxyReqPathResolver: function (req) {
      return req.baseUrl + req.url;
    },
  })
);
app.use(
  "/api/foods",
  proxy("http://localhost:4001", {
    proxyReqPathResolver: function (req) {
      return req.baseUrl + req.url;
    },
  })
);

app.listen(4000, () => {
  console.log("listening for movies routes on port 4000");
});
