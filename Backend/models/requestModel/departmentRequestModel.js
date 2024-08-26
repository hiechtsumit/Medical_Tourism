const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
        required : true
    },
    department : {
        type : mongoose.Types.ObjectId,
        ref : 'department'
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
    },
    country : {
        type : String,
    },
    bookingDate : {
        type : String,
    },
    message : {
        type : String,
    }
},{timestamps : true});

const departmentRequestModel = mongoose.model('hospitalDepartmentRequest',schema);

module.exports = departmentRequestModel;
