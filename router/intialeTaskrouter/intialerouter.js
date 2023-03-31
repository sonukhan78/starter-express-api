const express = require("express");
 
const Router = express.Router();
const app = express();
const protect = require('../../middleware/intialemiddleware/intialemiddleware')
const { getintiale, postintiale, deleteintiale } = require("../../controller/intialeTaskcontroller/intialecontroller");
Router.use(express.json());


Router.get("/get",protect,getintiale);
Router.post("/add",protect, postintiale);
Router.delete("/:_id",protect, deleteintiale);

module.exports = Router;
