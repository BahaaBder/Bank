const { ThumbDownAltTwoTone } = require("@material-ui/icons");
const express = require("express");
const router = express.Router();

const Transaction = require("../models/Transaction");
router.get("/transactions", function (req, res) {
  Transaction.find({}, function (err, expenses) {
    res.send(expenses);
  });
});
router.post("/transaction", function (req, res) {
  const transaction = new Transaction(req.body);
  transaction.save(function (err, newTransaction) {
    res.status(201).send(newTransaction);
  });
});

router.delete("/transaction/:id", async function (req, res) {
  console.log(req.params.id);
  await Transaction.deleteOne({ _id: req.params.id });
  Transaction.find({}, function (err, expenses) {
    res.send(expenses);
  });
});

module.exports = router;
