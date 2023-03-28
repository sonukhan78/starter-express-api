const mongoose = require("mongoose");
const profile = new mongoose.Schema({
  firstname: {
    type: String,
  },

  number: {
    type: String,
  },

  gender: {
    type: String,
  },
  email:{
    type:String,
  },
  Imageurl:{
    type:String,
  }
   

});
module.exports = mongoose.model("userprofile", profile)