const express= require('express');

const router = express.Router();
const {Categoriesdata, FashionSareeCollectionsdata} = require('../data')
router.use(express.json())

router.get("/",(req,res)=>{
    res.json({status:true,Categoriesdata})
})
    
router.get('/FSC',(req,res)=>{
    res.json({status:true,data:FashionSareeCollectionsdata})
}) 
 console.log("=====.")

module.exports = router;
