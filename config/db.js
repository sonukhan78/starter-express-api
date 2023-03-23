const mongoose = require('mongoose');
const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://sonukhan72964:clihL51fbK12O04H@cluster1.fu23rvb.mongodb.net/test")
        
    }
    catch (error) {
        console.log("==error==", error);
        process.exit(1);
    }
}

module.exports = ConnectDB;