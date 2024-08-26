const { default: mongoose } = require("mongoose");


const schema = new mongoose.Schema({
    department : {
        type : mongoose.Types.ObjectId,
        ref: "department"
    },
    name : {
        type : String,
    },
    gender : {
        type : String,
    },
    about: {
        type : String,
    }
},{timestamps : true})


const doctorModel = mongoose.model('doctor',schema);


module.exports = doctorModel;