const jwt = require("jsonwebtoken");
const todo = require("../../module/IntialeTaskmodule/Todomodule");
const asyncHandler = require("express-async-handler");

const gettodo = async (req, res) => {
    try {
      const data = await  todo.find({});
      if (!data) {
        res.status(404).json("data is missing");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json(error);
    }
  };
  
const posttodo = asyncHandler(async (req, res) => {
  const { tittle, dis } = req.body;
  if (!tittle && !dis) {
    res.status(400).json({ error: "missing the fild" });
  }
  const data = await todo.create({
    tittle,
    dis,
  });
  res.status(200).json(data);
});
 
const deletetodo = asyncHandler(async (req, res) => {
  let findid = await todo.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deletetask = await todo.deleteMany({ _id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deletetask);
});

module.exports = {
  gettodo,
  posttodo,
  deletetodo,
};
