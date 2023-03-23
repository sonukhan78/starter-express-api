const express = require("express");
const { categoriesdata } = require("../data");
const app = express();
app.get("/", categoriesdata);
app.listen(5000);
