const express = require("express");
const { categoriesdata ,FashionSareeCollectionsdata} = require("../data");
const app = express();
app.get("/", categoriesdata);
app.get("/FSC",FashionSareeCollectionsdata)

app.listen(5000);
