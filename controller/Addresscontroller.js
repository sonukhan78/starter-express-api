const Address = require("../module/Addressmodule");
const asyncHandler = require("express-async-handler");

const getadd = asyncHandler(async (req, res) => {
  try {
    const data = await Address.find({ user_id: req.user });
    if (!data.length) {
      res.status(404).json({ status: false, message: "address is empty" });
    }
    res.status(200).json({ status: true, message: data });
  } catch (error) {
    res.status(404).json(error);
  }
});

const postadd = asyncHandler(async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      phoneNumber,
      StreetAddress,
      Locality,
      city,
      PostCode,
      State,
      Addresstype,
    } = req.body;
    if (
      !FirstName &&
      !LastName &&
      !phoneNumber &&
      !StreetAddress &&
      !Locality &&
      !city &&
      !PostCode &&
      !State &&
      !Addresstype
    ) {
      res.status(400).json({ error: "missing the fild" });
    }
    const data = await Address.create({
      FirstName,
      LastName,
      phoneNumber,
      StreetAddress,
      Locality,
      city,
      PostCode,
      State,
      Addresstype,
      user_id: req.user,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

const deleteadd = asyncHandler(async (req, res) => {
  let findid = await Address.findById(req.params._id);
  console.log("====",findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deleteresult = await Address.deleteMany({ _id: findid._id})
   res.status(200).json({ message: `delete data ${req.params._id}`});
   console.log("=====.",deleteresult)

});

module.exports = {
  getadd,
  postadd,
  deleteadd,
};
