const jwt = require("jsonwebtoken");
const Todo = require("../../module/intialeTaskmodule/Todomodule");
const asyncHandler = require("express-async-handler");

const getTodo = async(req,res)=>{
  let data = await Todo.find({ user_id: req.user}) 
  
  if(!data.length){
      res.status(200).json({ status:false, massage: "Todo stage is empty"})
  }
  console.log("====>",data);
  res.status(200).json({ status:true,data})
  }

  const postTodo = async(req, res) => {
    const {title , dis,} = req.body
    if (!title || !dis) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await Todo.create({ 
        title,
        dis,
        user_id:req.user
        
    });
    console.log("====>", data); 
    res.status(200).json(data)
  }

const deleteTodo = asyncHandler(async (req, res) => {
  let findid = await Todo.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deletetask = await Todo.deleteMany({ id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deletetask);
});

module.exports = {
  getTodo,
  postTodo,
  deleteTodo,
};
