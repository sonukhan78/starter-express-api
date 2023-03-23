const express = require("express");
const {protect}  = require("../middleware/authmiddleware");
const Router = express.Router();
const {getadd,postadd,deleteadd,} = require("../controller/Addresscontroller");
Router.use(express.json());
Router.get("/", protect, getadd);
Router.post("/", protect, postadd);
Router.delete("/:_id",protect,deleteadd);

module.exports = Router;
