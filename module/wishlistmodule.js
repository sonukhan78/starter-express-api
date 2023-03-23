const mongoose = require("mongoose")
const wishlistschema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please add title "]
    },
    dis:{
        type:String,
        required:[true,"please add dis "]
    },
    image:{
        type:String,
        required:[true,"please add the image"]

    },
    prize:{
        type:String,
        required:[true,"please add the prize"]
    },

})


module.exports= mongoose.model("wishlist",wishlistschema)