const bcrypt = require("bcrypt");
const profile = require("../module/profilemodule");

const asyncHandler = require("express-async-handler");
 

const profileget = asyncHandler(async (req, res) => {
  try {
    const data = await profile.find(req.params._id);
    if (!data.length) {
      res.status(400).json({ status: false });
    }
    res.status(200).json({ message: data });
    
  } catch (error) {
    res.status(404).json(error);
  }
});

const profilepost = asyncHandler(async (req, res) => {
    try {
      const { firstname,lastname,gender } = req.body;
      if (
        !firstname &&
        !lastname &&
        !gender
      ) {
        res.status(400).json({ error: "missing the fild" });
      }
      const data = await profile.create({
       firstname,
       lastname,
       gender
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json(error);
    }
  });
  const profiledelete = asyncHandler(async (req, res) => {
    let findid = await profile.findById(req.params._id);
    console.log("====",findid);
    if (!findid) {
      res.status(400);
      res.send("user not found");
    }
    const deleteresult = await profile.deleteMany({ _id: findid._id})
     res.status(200).json({ message: `delete data ${req.params._id}`});
     console.log("=====.",deleteresult)
  
  });

module.exports = {
  profileget,
  profilepost,
  profiledelete
};
