const express = require("express");
const app = express();
const Router = express.Router();
const {
  getintiale,
  postintiale,
  deleteintiale,
} = require("../../controller/IntialeTaskcontroller/intialecontroller");

const {
  protect,
} = require("../../middleware/intialemiddleware/intialemiddleware");
Router.use(express.json());
Router.get("/", getintiale);
Router.post("/", postintiale);
Router.delete("/:_id", deleteintiale);

module.exports = Router;
