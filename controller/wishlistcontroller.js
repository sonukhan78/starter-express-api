const wishlist = require("../module/wishlistmodule");

const get = async (req, res) => {
  try {
    const data = await wishlist.find({});
    if (!data) {
      res.status(404).json("data is missing");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
};

const post = async (req, res) => {
  try {
    const { title, image, dis, prize } = req.body;
    if (!title || !image || !dis || !prize) {
      res.status(400).json({ error: "missing the fild" });
    }
    const data = await wishlist.create({
      title,
      dis,
      image,
      prize,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deletewishlist = async (req, res) => {
  let findid = await wishlist.findById(req.params.id);
  if (!findid) {
    res.status(400);
    res.send("user not found");
  }
  const deleteresult = await wishlist.deleteMany({ _id: findid._id });
  res.status(200).json({ message: `delete data ${req.params._id}` });
  console.log("=====.", deleteresult);
};

module.exports = { get, post, deletewishlist };
