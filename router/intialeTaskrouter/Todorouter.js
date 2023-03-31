const express = require("express");
const Router = express.Router();
const app = express();
 
const protect=require("../../middleware/intialemiddleware/Todomiddleware")
const { getTodo, postTodo, deleteTodo } = require("../../controller/intialeTaskcontroller/Todocontroller");
Router.use(express.json());
Router.get("/get",protect,getTodo);
Router.post("/add",protect,postTodo);
Router.delete("/:_id",protect, deleteTodo);

module.exports = Router;
