const mongoose = require("mongoose");
const todo = new mongoose.Schema({
  tittle: {
    type: String,
  },

  dis: {
    type: String,
  },
 
 },

 { timestamps: true }
);
module.exports = mongoose.model("Todotask",todo);