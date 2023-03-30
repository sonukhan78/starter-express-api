const mongoose = require("mongoose");
const Intiale = new mongoose.Schema({
  tittle: {
    type: String,
  },

  dis: {
    type: String,
  },
  use_id:{
    type:String
  }
 },
 { timestamps: true }

);
module.exports = mongoose.model("intialetask",Intiale);
