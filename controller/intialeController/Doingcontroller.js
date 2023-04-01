const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb');
const doing = require('../../module/IntialeTaskmodule/Doingmodules');
const asyncHandler = require('express-async-handler');


const getDoing = asyncHandler(async(req,res)=>{
let data = await doing.find({ user_id: req.user}) 

if(!data.length){
    res.status(200).json({ status:false, massage: "data is empty"})
}
console.log("====>", data);
res.status(200).json({ status:true, data})
})



const postDoing = asyncHandler(async(req, res) => {
    const {title , dis,} = req.body
    if (!title || !dis) {
        res.status(400).json({ message: "Add all filds" })
    }
    let data = await doing.create({ 
        title,
        dis,
        user_id:req.user,
        
    });
  
    console.log("====>", data); 
    res.status(200).json(data)
})



const deleteDoing = asyncHandler(async(req,res)=>{
    const data = await doing.findById(req.params._id);
    console.log("find id ===>",data);

    console.log("=======>",req.params._id);
   if(!data){
   res.ststus(400);
   res.json(" Nothing available ")
   }
    const deletedata = await doing.deleteMany({_id: data._id});
    console.log("=====delete data=====>",deletedata)
    res.status(200).json({massage:`delete data ${req.params._id}`}) 
})





module.exports = {
    getDoing,
    deleteDoing,
    postDoing
    
}