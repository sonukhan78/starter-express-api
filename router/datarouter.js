const express = require("express");

const router = express.Router();
const { Categories, FashionSareeCollections ,Swaiper} = require("../data");
router.use(express.json());

router.get("/", (req, res) => {
  res.json({ status: true, Categories });
});

router.get("/fsc", (req, res) => {
  res.json({ status: true, data: FashionSareeCollections });
});

router.get("/swaiper",(req,res)=>{
    res.json({status:true,data:Swaiper})
})
console.log("=====.");

module.exports = router;
