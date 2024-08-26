
const guestHouseRequestModel = require("../../models/requestModel/guestHouseRequestModel");


module.exports.allGuestHouseOrder = async (req,res)=>{
    try { 
        const {searchOrder,filter} = req.body
         let quary = {user : req.id}
        if(filter.status === '' || filter.status === 'accept' || filter.status === 'deny'){
            quary.status = filter.status
        }

        // if(searchOrder !== '' ){
        //     quary.name = searchOrder
        // }

        if(filter.date){
            const searchDate = new Date(filter.date); // Replace with your date
            const startOfDay = new Date(searchDate.setHours(0, 0, 0, 0));
            const endOfDay = new Date(searchDate.setHours(23, 59, 59, 999));
            quary.createdAt = { $gte: startOfDay, $lte: endOfDay }
        }

        // console.log(quary)

        let guestHouseOrder = await guestHouseRequestModel.find(quary).populate('user').populate('guestHouse').sort({createdAt : -1})

        return res.send({
            message : "Successfully",
            status : 200,
            guestHouseOrder
        })
    } catch (error) {
        return res.send({
            message : "Server Down",
            status : 502
        })
    }
}

module.exports.searchOrder = async(req,res)=>{
    try {
        console.log("req.body = ",req.params)
        const hospitals = await guestHouseRequestModel.find(
            {
                name: {$regex :  req.params.search,$options : 'i'} 
            }
        );
        return res.send({
            status : 200,
            hospitals,
            message : "Sucessfully"
        });
    } catch (error) {
        console.log(error)
        return res.send({
            status : 502,
            message : "Data not found"
        });
    }
}