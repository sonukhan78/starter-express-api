const express=require('express');
const app=express();
const Router = express.Router()
const {profileget,profilepost,profiledelete} = require("../controller/profilecontroller");
const { protect } = require('../middleware/authmiddleware');
Router.use(express.json())
Router.get("/",protect,profileget);
Router.post("/",protect,profilepost);
Router.delete("/:_id",protect,profiledelete) 


module.exports = Router;