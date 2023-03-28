const pro = require("../../module/profilemodule/Profilemodule2");
const asyncHandler = require("express-async-handler");

const getpro = asyncHandler(async (req, res) => {
  try {
    const data = await pro.find(req.params._id);
    if (!data.length) {
      res.status(400).json({ status: false });
    }
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(404).json(error);
  }
});

const postpro = asyncHandler(async (req, res) => {
  try {
    const { firstname, number, gender, email } = req.body;
    if (!firstname && !number && !gender && !email) {
      res.status(400).json({ error: "missing the fild" });
    }
    const data = await pro.create({
      firstname,
      number,
      gender,
      email,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

const deletepro = asyncHandler(async (req, res) => {
  let findid = await pro.findById(req.params.id);
  console.log("====",findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deleteresult = await pro.deleteMany({ _id: findid._id})
   res.status(200).json({ message: `delete data ${req.params._id}`});
   console.log("=====.",deleteresult)

});

module.exports = { getpro, postpro, deletepro };
