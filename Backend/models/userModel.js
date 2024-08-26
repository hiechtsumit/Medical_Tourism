const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    phone : {
        type : String,
        unique : true,
        required : true
    },
    address : {
        type : String,
    },
    gender : {
        type : String,
        // required : true
    },
    password : {
        type : String,
        required : true
    },
    departmentBookingOrder : [
        {
            type : mongoose.Types.ObjectId,
            ref : 'hospitalDepartmentRequest'
        }
    ],
    guestHouseOrder : [
        {
            type : mongoose.Types.ObjectId,
            ref : 'guestHouseRequest'
        }
    ],
},{timestamps : true});

const userModel = mongoose.model('user',schema);

module.exports = userModel