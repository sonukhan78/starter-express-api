const express = require("express");
const Router = express.Router();
const app = express();
 
const protect=require("../../middleware/intialemiddleware/Todomiddleware")
const { getTodo, postTodo, deleteTodo } = require("../../controller/IntialeTaskcontroller/Todocontroller");
Router.use(express.json());
Router.get("/",protect,getTodo);
Router.post("/",protect,postTodo);
Router.delete("/:_id",protect, deleteTodo);

module.exports = Router;
