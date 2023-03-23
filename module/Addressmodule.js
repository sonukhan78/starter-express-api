const mongoose = require("mongoose")
const AddressSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:[true,"please add title "]
    },
    LastName:{
        type:String,
        required:[true,"please add dis "]
    },
    phoneNumber:{
        type:String,
        required:[true,"please add the image"]

    },
    StreetAddress:{
        type:String,
        required:[true,"please add the prize"]
    },
    Locality:{
        type:String,
        required:[true,"please add the prize"]
    },
    city:{
        type:String,
        required:[true,"please add the prize"]
    },
    PostCode:{
        type:String,
        required:[true,"please add the prize"]
    },
    State:{
        type:String,
        required:[true,"please add the prize"]
    },
    Addresstype:{
        type:String,
        required:[true,"please add the prize"]
    },
    user_id:{
        type:String,
        required:[true,"please add user id"]
    },

})


module.exports= mongoose.model("Address",AddressSchema)