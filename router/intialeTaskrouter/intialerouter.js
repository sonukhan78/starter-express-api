const express = require("express");
const Router = express.Router();
const app = express();
const {getintiale,postintiale,deleteintiale,} = require("../../controller/IntialeTaskcontroller/intialecontroller");
Router.use(express.json());
Router.get("/", getintiale);
Router.post("/", postintiale);
Router.delete("/:_id", deleteintiale);

module.exports = Router;
