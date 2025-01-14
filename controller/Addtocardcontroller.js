const Addtocard = require("../module/Addtocardmodule");
const asyncHandler = require("express-async-handler");

const getadd = asyncHandler(async (req, res) => {
  try {
    const data = await Addtocard.find({ user_id: req.user });
    if (!data.length) {
      res.status(404).json({ status: false, message: "cart is empty" });
    }
    res.status(200).json({ status: true, message: data });
  } catch (error) {
    res.status(404).json(error);
  }
});

const postadd = asyncHandler(async (req, res) => {
  try {
    const { title, image, price, rating, dis, size, color, quantity } =
      req.body;
    if (
      !title &&
      !image &&
      !price &&
      !rating &&
      !dis &&
      !color &&
      !size &&
      !quantity
    ) {
      res.status(400).json({ error: "missing the fild" });
    }
    const data = await Addtocard.create({
      title,
      price,
      dis,
      rating,
      image,
      color,
      size,
      quantity,
      user_id: req.user,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

const deletetocard = asyncHandler(async (req, res) => {
  let findid = await Addtocard.findById(req.params._id);
  console.log("====", findid);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deleteresult = await Addtocard.deleteMany({ _id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deleteresult);
});

module.exports = { getadd, postadd, deletetocard };
