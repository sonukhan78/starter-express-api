const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb');
const com = require('../../model/intialeModel/CompleteModel');
const asyncHandler = require('express-async-handler');


const getComplete = asyncHandler(async(req,res)=>{
let data = await com.find({ user_id: req.user}) 

if(!data.length){
    res.status(200).json({ status:false, massage: "data is empty"})
}
console.log("====>", data);
res.status(200).json({ status:true, data})
})



const postComplete = asyncHandler(async(req, res) => {
    const {title , dis,} = req.body
    if (!title || !dis) {
        res.status(400).json({ message: "Add all filds" })
    }
    let data = await com.create({ 
        title,
        dis,
        user_id:req.user,
        
    });
  
    console.log("====>", data); 
    res.status(200).json(data)
})



const deleteComplete = asyncHandler(async(req,res)=>{
    const data = await com.findById(req.params._id);
    console.log("find id ===>",data);

    console.log("=======>",req.params._id);
   if(!data){
   res.ststus(400);
   res.json(" Nothing available ")
   }
    const deletedata = await com.deleteMany({_id: data._id});
    console.log("=====delete data=====>",deletedata)
    res.status(200).json({massage:`delete data ${req.params._id}`}) 
})





module.exports = {
    getComplete,
    deleteComplete,
    postComplete
    
}