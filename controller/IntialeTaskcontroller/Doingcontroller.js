const jwt = require("jsonwebtoken");
const Doing = require("../../module/IntialeTaskmodule/Doingmodule");
const asyncHandler = require("express-async-handler");

const getDoing = async (req, res) => {
    try {
      const data = await  Doing.find({});
      if (!data) {
        res.status(404).json("data is missing");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json(error);
    }
  };
  
const postDoing = asyncHandler(async (req, res) => {
  const { tittle, dis } = req.body;
  if (!tittle && !dis) {
    res.status(400).json({ error: "missing the fild" });
  }
  const data = await Doing.create({
    tittle,
    dis,
  });
  res.status(200).json(data);
});
 
const deleteDoing = asyncHandler(async (req, res) => {
  let findid = await Doing.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deletetask = await Doing.deleteMany({ _id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deletetask);
});

module.exports = {
  getDoing,
  postDoing,
  deleteDoing,
};
