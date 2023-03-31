const express = require("express");
 
const Router = express.Router();
const app = express();
const { getintiale, postintiale, deleteintiale } = require("../../controller/IntialeTaskcontroller/Intialecontroller");
const  protect  = require("../../middleware/intialemiddleware/intialemiddleware");
Router.use(express.json());
Router.get("/get",protect,getintiale);
Router.post("/add",protect, postintiale);
Router.delete("/:_id",protect, deleteintiale);

module.exports = Router;
