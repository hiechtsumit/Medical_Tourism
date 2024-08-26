const { default: mongoose } = require("mongoose");


const schema = new mongoose.Schema({
    hospital : {
        type : mongoose.Types.ObjectId,
        ref: "hospital"
    },
    name : {
        type : String,
    },
    about: {
        type : String,
    },
    thumbnil : {
        type : String,
    },
    doctors : [
        {
            type : mongoose.Types.ObjectId,
            ref : 'doctor'
            
        }
    ]
},{timestamps : true})


const departmentModel = mongoose.model('department',schema);


module.exports = departmentModel;