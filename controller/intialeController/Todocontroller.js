const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb');
const todo = require('../../model/intialeModel/TodoModel');
const asyncHandler = require('express-async-handler');


const gettodo = asyncHandler(async(req,res)=>{
let data = await todo.find({ user_id: req.user}) 

if(!data.length){
    res.status(200).json({ status:false, massage: "todo is empty"})
}
console.log("====>", data);
res.status(200).json({ status:true, data})
})



const posttodo = asyncHandler(async(req, res) => {
    const {title , dis,} = req.body
    if (!title || !dis) {
        res.status(400).json({ message: "Something is messing" })
    }
    let data = await todo.create({ 
        title,
        dis,
        user_id:req.user,
        
    });
  
    console.log("====>", data); 
    res.status(200).json(data)
})



const deletetodo = asyncHandler(async(req,res)=>{
    const data = await todo.findById(req.params._id);
    console.log("find id ===>",data);

    console.log("=======>",req.params._id);
   if(!data){
   res.ststus(400);
   res.json(" Nothing available ")
   }
    const deletedata = await todo.deleteMany({_id: data._id});
    console.log("=====delete data=====>",deletedata)
    res.status(200).json({massage:`delete data ${req.params._id}`}) 
})





module.exports = {
    gettodo,
    deletetodo,
    posttodo
    
}