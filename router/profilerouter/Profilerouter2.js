const express= require('express');
const { getpro, postpro, deletepro } = require('../../controller/profilecontroller/Profilecontroller2');
const app = express()
const Router = express.Router()
Router.use(express.json())



Router.get("/",getpro);
Router.post("/",postpro)

Router.delete("/:id",deletepro)

module.exports = Router