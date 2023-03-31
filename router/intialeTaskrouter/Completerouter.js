const express = require("express");
const Router = express.Router();
const app = express();
const protect = require("../../middleware/intialemiddleware/Completemiddleware");
const {
  getcomplete,
  postcomplete,
  deletecomplete,
} = require("../../controller/intialeTaskcontroller/Completecontroller");
Router.use(express.json());
Router.get("/get", protect, getcomplete);
Router.post("/add", protect, postcomplete);
Router.delete("/:_id", protect, deletecomplete);

module.exports = Router;
