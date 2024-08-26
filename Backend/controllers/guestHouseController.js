const guesthouseModel = require("../models/guestHouseModel");

module.exports.allGuestHouse = async(req,res)=>{
    try {
        const guesthouses = await guesthouseModel.find().limit(20);
        // console.log(guesthouse)
        return res.send({
            status : 200,
            guesthouses,
            message : "Sucessfully"
        });
    } catch (error) {
        return res.send({
            status : 502,
            message : "Data not found"
        });
    }
}


module.exports.each_guestHouse_details = async(req,res)=>{
    try {
        const guestHouse = await guesthouseModel.findById({_id : req.body.id})
        // console.log(guestHouse)
        return res.send({
            status : 200,
            guestHouse,
            message : "Sucessfully"
        });
    } catch (error) {
        return res.send({
            status : 502,
            message : "Data not found"
        });
    }
}