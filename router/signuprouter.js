const express=require('express');
const app=express();
const Router = express.Router();
const { getsign, postsign, deletesign } = require('../controller/signupcontroller');
const { protect } = require('../middleware/authmiddleware');
Router.use(express.json())
Router.get("/",protect,getsign);
Router.post("/",protect,postsign);
Router.delete("/:_id",protect,deletesign) 


module.exports = Router;