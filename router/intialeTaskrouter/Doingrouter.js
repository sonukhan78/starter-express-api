const express = require("express");
const Router = express.Router();
const app = express();
const { getDoing, postDoing, deleteDoing } = require("../../controller/IntialeTaskcontroller/Doingcontroller");
Router.use(express.json());
Router.get("/", getDoing);
Router.post("/", postDoing);
Router.delete("/:_id", deleteDoing);

module.exports = Router;
