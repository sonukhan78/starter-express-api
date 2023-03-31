const jwt = require("jsonwebtoken");
const Intiale = require("../../module/IntialeTaskmodule/intialemodule");
const asyncHandler = require("express-async-handler");

const getintiale = async(req,res)=>{
  let data = await Intiale.find({ user_id: req.user}) 
  
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
    let data = await Intiale.create({ 
        title,
        dis,
        user_id:req.user,
        
    });
    console.log("====>", data); 
    res.status(200).json(data)
  }
 
const deleteintiale = asyncHandler(async (req, res) => {
  let findid = await Intiale.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
    console.log("======");
  }
  const deletetask = await Intiale.deleteMany({ _id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deletetask);
});

module.exports = {
  getintiale,
  postintiale,
  deleteintiale,
};
 

  

 



 