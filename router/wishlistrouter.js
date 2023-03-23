const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const { protect } = require('../middleware/authmiddleware');
const {post,get,deletewishlist} = require("../controller/wishlistcontroller");
 

Router.get("/",protect,get);
Router.post("/",protect,post);
Router.delete('/:id',protect,deletewishlist)


module.exports = Router