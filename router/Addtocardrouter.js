const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getadd,postadd,deletetocard} = require("../controller/Addtocardcontroller")
const {protect}=require('../middleware/authmiddleware')


Router.get("/",protect,getadd);
Router.post("/",protect,postadd)

Router.delete("/:id",deletetocard)

module.exports = Router