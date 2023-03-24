const bcrypt = require("bcrypt");
const signup = require("../module/signupmodule");

const asyncHandler = require("express-async-handler");

const getsign = asyncHandler(async (req, res) => {
  try {
    const data = await signup.find(req.params._id);
    if (!data.length) {
      res.status(400).json({ status: false });
    }
    res.status(200).json({ message: data });
    
  } catch (error) {
    res.status(404).json(error);
  }
});

const postsign = asyncHandler(async (req, res) => {
  try {
    const { firstname, lastname, gender, email, password, Otp } = req.body;
    if (!firstname && !lastname && !gender && !email && !password && !Otp) {
      res.status(400).json({ error: "missing the fild" });
    }
    const data = await signup.create({
      firstname,
      lastname,
      gender,
      email,
      password,
      Otp,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

const deletesign = asyncHandler(async (req, res) => {
  let findid = await signup.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deleteresult = await signup.deleteMany({ _id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deleteresult);
});

module.exports = {
  getsign,
  postsign,
  deletesign,
};
