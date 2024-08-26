const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    locationTxt : {
        type : String,
    },
    locationUrl : {
        type : String
    },
    about : {
        type : String,
        required : true
    },
    departments : [
        {
            type : mongoose.Types.ObjectId,
            ref : 'department'
        }
    ],
    images : [],

},{timestamps : true});

const hospitalModel = mongoose.model('hospital',schema);

module.exports = hospitalModel