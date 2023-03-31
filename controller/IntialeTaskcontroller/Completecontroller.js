const jwt = require("jsonwebtoken");
const Complete = require("../../module/IntialeTaskmodule/Completemodule");
const asyncHandler = require("express-async-handler");

const getcomplete = async(req,res)=>{
  let data = await Complete.find({ user_id: req.user}) 
  
  if(!data.length){
      res.status(200).json({ status:false, massage: "Complete stage is empty"})
  }
  console.log("====>",data);
  res.status(200).json({ status:true,data})
  }

  const postcomplete = async(req, res) => {
    const {title , dis,} = req.body
    if (!title || !dis) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await Complete.create({ 
        title,
        dis,
        user_id:req.user
        
    });
    console.log("====>", data); 
    res.status(200).json(data)
  }

const deletecomplete = asyncHandler(async (req, res) => {
  let findid = await Complete.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deletetask = await Complete.deleteMany({ id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deletetask);
});

module.exports = {
  getcomplete,
  postcomplete,
  deletecomplete,
};
