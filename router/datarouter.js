const express = require("express");

const router = express.Router();
const { Categories, FashionSareeCollections } = require("../data");
router.use(express.json());

router.get("/", (req, res) => {
  res.json({ status: true, Categories });
});

router.get("/FSC", (req, res) => {
  res.json({ status: true, data: FashionSareeCollections });
});
console.log("=====.");

module.exports = router;
