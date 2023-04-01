const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb');
const inti = require('../../module/intialeTaskmodule/intialemodule');
const asyncHandler = require('express-async-handler');


const getintiale = async(req,res)=>{
let data = await inti.find({ user_id: req.user}) 

if(!data.length){
    res.status(200).json({ status:false, massage: "intiale stage is empty"})
}
console.log("====>", data);
res.status(200).json({ status:true, data})
}



const postintiale = async(req, res) => {
    const {title , dis,} = req.body
    if (!title || !dis) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await inti.create({ 
        title,
        dis,
        user_id:req.user,
        
    });
  
    console.log("====>", data); 
    res.status(200).json(data)
}



const deleteintiale =async(req,res)=>{
    const data = await inti.findById(req.params._id);
    console.log("find id ===>",data);

    console.log("=======>",req.params._id);
   if(!data){
   res.ststus(400);
   res.json("user not found ")
   }
    const deleteResult = await inti.deleteMany({_id: data._id});
    console.log("=====delete data=====>",deleteResult)
    res.status(200).json({massage:`delete data ${req.params._id}`}) 
}





module.exports = {
    getintiale,
    deleteintiale,
    postintiale
    
}