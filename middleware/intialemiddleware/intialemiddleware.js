const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const users = require("../../module/IntialeTaskmodule/intialemodule");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
   
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      req.user = decoded.id;
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      res.send("Not authorize")
    }
  }
  if (!token) {
    res.status(401)
    res.send('not authorized token')
    
  }
});
module.exports = {
    protect,
};
