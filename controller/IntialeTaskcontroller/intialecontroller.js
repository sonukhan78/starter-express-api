const jwt = require("jsonwebtoken");
const Intiale = require("../../module/IntialeTaskmodule/intialemodule");
const asyncHandler = require("express-async-handler");

const getintiale = asyncHandler(async (req, res) => {
  const data = await Intiale.find(req.params._id);
  if (!data.length) {
    res.status(400).json({ status: false });
  }
  res.status(200).json({ message: data });

  // res.status(404).json(error);
});

const postintiale = asyncHandler(async (req, res) => {
  const { tittle, dis } = req.body;
  if (!tittle && !dis) {
    res.status(400).json({ error: "missing the fild" });
  }
  const data = await Intiale.create({
    tittle,
    dis,
  });

  // res.status(201).json({
  //   tittle: data.tittle,
  //   dis: data.dis,
  //  // token: generateToken(data._id),
  // });
  res.status(200).json(data);
});
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });
// };

const deleteintiale = asyncHandler(async (req, res) => {
  let findid = await Intiale.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
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
