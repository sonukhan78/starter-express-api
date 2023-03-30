const express = require("express");
const Router = express.Router();
const app = express();
const { gettodo, posttodo, deletetodo } = require("../../controller/IntialeTaskcontroller/Todocontroller");
Router.use(express.json());
Router.get("/", gettodo);
Router.post("/", posttodo);
Router.delete("/:_id", deletetodo);

module.exports = Router;
