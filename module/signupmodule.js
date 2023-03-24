const mongoose = require("mongoose");
const sign = new mongoose.Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  gender: {
    type: String,
  },
  email:{
    type:String,
  },
  password:{
    type:String,
  },
  Otp:{
    type:Number,
  }

});
module.exports = mongoose.model("signup", sign);
