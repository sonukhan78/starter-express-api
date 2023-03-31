const jwt = require("jsonwebtoken");
const Doing = require("../../module/intialeTaskmodule/Doingmodule");
const asyncHandler = require("express-async-handler");

const getDoing = async(req,res)=>{
  let data = await Doing.find({ user_id: req.user}) 
  
  if(!data.length){
      res.status(200).json({ status:false, massage: "Doing stage is empty"})
  }
  console.log("====>",data);
  res.status(200).json({ status:true,data})
  }

  const postDoing = async(req, res) => {
    const {title , dis,} = req.body
    if (!title || !dis) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await Doing.create({ 
        title,
        dis,
        user_id:req.user
        
    });
    console.log("====>", data); 
    res.status(200).json(data)
  }

const deleteDoing = asyncHandler(async (req, res) => {
  let findid = await Doing.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deletetask = await Doing.deleteMany({ id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deletetask);
});

module.exports = {
  getDoing,
  postDoing,
  deleteDoing,
};
