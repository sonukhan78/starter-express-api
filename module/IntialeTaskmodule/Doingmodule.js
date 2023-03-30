const mongoose = require("mongoose");
const Doing = new mongoose.Schema({
  tittle: {
    type: String,
  },

  dis: {
    type: String,
  },
 
 },

 { timestamps: true }
);
module.exports = mongoose.model("Doingtask",Doing);