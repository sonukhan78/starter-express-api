const express = require("express");
const Router = express.Router();
Router.use(express.json());
const app = express();
const protect = require('../../middleware/intialemiddleware/intialemiddleware')
const { getintiale, postintiale, deleteintiale } = require("../../controller/intialeTaskcontroller/intialecontroller");
Router.get("/get",protect,getintiale);
Router.post("/add",protect, postintiale);
Router.delete("/:_id",protect, deleteintiale);

module.exports = Router;
