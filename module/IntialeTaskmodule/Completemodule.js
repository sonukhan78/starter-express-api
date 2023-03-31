const mongoose = require("mongoose");
const Complete = new mongoose.Schema(
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
module.exports = mongoose.model("Completetask", Complete);
