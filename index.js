// const express = require('express')
// const app = express()
// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })
// app.listen(process.env.PORT || 5000)

const express = require("express");
const prodect = require("./module/signupmodule");
const app = express();
const cors = require("cors");
app.use(express.json());
const Connectdb = require("./config/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const authmiddleware = require("./middleware/authmiddleware");
const path = require('path')
app.use("/uploads/Images", express.static(path.join("uploads", "Images")));
const fileUpload = require("./utils/fileUploads");
app.use(cors());
app.use("/api/wishlist", require("./router/wishlistrouter"));
app.use("/api/Addcard", require("./router/Addtocardrouter"));
app.use("/api/Address", require("./router/Addressrouter"));
app.use("/api/profile", require("./router/profilerouter"));
app.use("/api/signup", require("./router/signuprouter"));
app.use("/api/allapi", require("./router/datarouter"));
app.use("/api/userprofile",require("././router/profilerouter/Profilerouter2"))
app.get("/hii", (req, res) => {
  res.send("Hellow");
});
Connectdb();
app.listen(port, () => {
  console.log(`port is colled${port}`);
});

app.post(
  "/create",
  fileUpload("profile").array("photo",5),
  (req,res)=>{
    console.log("======nnnnn.body",req.body);
    console.log("=====>",req.files)
    res.json({message:"Images added..",Images:'http://localhost:6000/uploads/Images/profile/${req.files{0}.filename}'})
  }
)
