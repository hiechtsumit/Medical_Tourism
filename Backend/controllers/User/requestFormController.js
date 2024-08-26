const userModel = require("../../models/userModel");
const departmentRequestModel = require("../../models/requestModel/departmentRequestModel")
const guestHouseRequestModel = require("../../models/requestModel/guestHouseRequestModel");


/** ========================================= */
/********** Hospital Booking Request **********/
/** ========================================= */


module.exports.departmentBookingRequest = async(req,res)=>{
    try {
        const {department, name, phone, country, bookingDate, message} = req.body
        console.log("Body = ",req.body)
        
        const new_request = new departmentRequestModel({
            user :req.id,
            department, name, phone, country, bookingDate, message
        })
        const request = await new_request.save();
        await userModel.findByIdAndUpdate(req.id,{
            $push : {
                departmentBookingOrder : request._id
            }
        })
        return res.send({
            status : 200,
            message : "Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.send({
            status : 502,
            message : "Server Error"
        })
    }
}




/** ============================================ */
/********** Guest House Booking Request **********/
/** ============================================ */

module.exports.guestHouseRequest = async(req,res)=>{
    try {
        // console.log("Body = ",req.body)
        const {name, phone, email, checkIn, checkOut, room, noOfRooms, specialRequests} = req.body.formData;
        // const new_from = req.body.formData 
        const new_request = new guestHouseRequestModel({
            user :req.id,
            guestHouse : req.body.guestHouse_id,
            name, phone,email,checkIn,checkOut,room,noOfRooms,specialRequests
        })
        const request = await new_request.save();
        await userModel.findByIdAndUpdate(req.id,{
            $push : {
                guestHouseOrder : request._id
            }
        })
        return res.send({
            status : 200,
            message : "Successfully"
        })
    } catch (error) {
        console.log(error)
        return res.send({
            status : 502,
            message : "Server Error"
        })
    }
}