const mongoose = require("mongoose");
const profilesingup = new mongoose.Schema({
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
module.exports = mongoose.model("profile", profilesingup);
