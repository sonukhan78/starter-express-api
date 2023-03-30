const mongoose = require("mongoose");
const Intiale = new mongoose.Schema({
  tittle: {
    type: String,
  },

  dis: {
    type: String,
  },
 
 },
 { timestamps: true }

);
module.exports = mongoose.model("intialetask",Intiale);
