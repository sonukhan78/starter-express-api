const express = require("express");
const Router = express.Router();
const app = express();

const protect = require("../../middleware/intialemiddleware/Todomiddleware");
const { gettodo, posttodo, deletetodo } = require("../../controller/intialeController/Todocontroller");
Router.use(express.json());
Router.get("/get", protect, gettodo);
Router.post("/add", protect, posttodo);
Router.delete("/:_id", protect, deletetodo);

module.exports = Router;
