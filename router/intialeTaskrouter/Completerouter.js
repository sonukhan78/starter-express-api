const express = require("express");
const Router = express.Router();
const app = express();
const protect = require("../../middleware/intialemiddleware/Completemiddleware");
const { getComplete, postComplete, deleteComplete } = require("../../controller/intialeController/Completecontroller");
Router.use(express.json());
Router.get("/get", protect, getComplete);
Router.post("/add", protect, postComplete);
Router.delete("/:_id", protect, deleteComplete);

module.exports = Router;
