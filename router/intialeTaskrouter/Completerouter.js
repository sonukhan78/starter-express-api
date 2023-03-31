const express = require("express");
const Router = express.Router();
const app = express();
const protect=require("../../middleware/intialemiddleware/Completemiddleware")
const { getcomplete, postcomplete, deletecomplete } = require("../../controller/IntialeTaskcontroller/Completecontroller");
Router.use(express.json());
Router.get("/",protect,getcomplete);
Router.post("/",protect,postcomplete);
Router.delete("/:_id",protect, deletecomplete);

module.exports = Router;
