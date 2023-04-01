const express = require("express");
const Router = express.Router();
const app = express();
const protect = require('../../middleware/intialemiddleware/Doingmiddleware');
const { getDoing, postDoing, deleteDoing } = require("../../controller/intialeController/Doingcontroller");



Router.use(express.json());
Router.get("/get",protect,getDoing);
Router.post("/add",protect,postDoing);
Router.delete("/:_id",protect, deleteDoing);

module.exports = Router;
