const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
        required : true
    },
    guestHouse : {
        type : mongoose.Types.ObjectId,
        ref : 'guesthouse',
        required : true
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    checkIn : {
        type : String,
        required : true
    },
    checkOut : {
        type : String,
        required : true
    },
    room : {
        type : Object,
        required : true
    },
    noOfRooms : {
        type : Number,
        required : true
    },
    specialRequests : {
        type : String,
    },
    status : {
        type : String,
        default : ''
    }

},{timestamps : true});

const guestHouseRequestModel = mongoose.model('guestHouseRequest',schema);

module.exports = guestHouseRequestModel;