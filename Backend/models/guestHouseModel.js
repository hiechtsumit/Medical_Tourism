const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
    },
    location : {
        type : String
    },
    about : {
        type : String,
        required : true
    },
    rating :{
        type : Object
    },
    amenities : {
        type : Object
    },
    rooms : {
        type : Array
    },
    price : {
        type : Object
    },
    images : {
        type : Array
    }

},{timestamps : true});

const guesthouseModel = mongoose.model('guesthouse',schema);

module.exports = guesthouseModel