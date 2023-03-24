const mongoose = require("mongoose");
const Profiledata = new mongoose.Schema({
  firstname: {
    type: String,
  },

  lastname: {
    type: String,
  },

  gender: {
    type: String,
  },

});
module.exports = mongoose.model("profile", Profiledata);
