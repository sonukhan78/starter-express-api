const mongoose = require("mongoose");
const intiale = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    dis: {
      type: String,
    },
    user_id: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("intialetask", intiale);
