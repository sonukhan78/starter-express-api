const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const user = require("../module/Addressmodule");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
   
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded.id;
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorize");
    }
  }
  if (!token) {
    res.status(401).json({
      massage: "Not authorized,no token",
    });
  }
});
module.exports = {
  protect,
};
