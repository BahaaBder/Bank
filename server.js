// Server setup
const express = require("express");
const app = express();
const api = require("./server/routes/api");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = 8080;
//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose setup
mongoose.connect("mongodb://localhost/transactionsDB", {
  useNewUrlParser: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.use("/", api);

app.listen(PORT, function () {
  console.log(`Running on port ${PORT}`);
});
