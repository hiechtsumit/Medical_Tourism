const guesthouseRequestModel = require("../../../models/requestModel/guestHouseRequestModel")


module.exports.allRequest = async(req,res)=>{
    try {

        // console.log("hello world")
        const receivedRequest = await guesthouseRequestModel.find({
            status : ""
        })

        return res.send({
            status : 200,
            message : "Successfully",
            receivedRequestCount : receivedRequest.length,
        })
    } catch (error) {
        return res.send({
            status : 502,
            message : "Server Down"
        })
    }
}



module.exports.received_Request = async(req,res)=>{
    try {

        const receivedRequest = await guesthouseRequestModel.find({
            status : ""
        }).populate('guestHouse').populate('user').sort({createdAt : 1});
        // Group objects by the 'user' property
        const groupedData = receivedRequest.reduce((acc, item) => {
            if (!acc[item.user]) {
                acc[item.user] = [];
            }
            acc[item.user].push(item);
            return acc;
        }, {});
    
        // Convert grouped objects to the desired format
        const result = Object.values(groupedData).map(group => ({
            request: group
        }));

        // console.log(result)
        return res.send({
            status : 200,
            message : "Successfully",
            receivedRequest : result
        })

    } catch (error) {
        return res.send({
            status : 502,
            message : "Server Down"
        })
    }
}


module.exports.accept_request = async(req,res)=>{
    try {

        // console.log("hello world",req.params)
        await guesthouseRequestModel.findByIdAndUpdate(req.params.id,{
            status : "accept"
        })
        return res.send({
            status : 200,
            message : "Successfully",
        })
    } catch (error) {
        return res.send({
            status : 502,
            message : "Server Down"
        })
    }
}


module.exports.deny_request = async(req,res)=>{
    try {

        // console.log("hello world")
        await guesthouseRequestModel.findByIdAndUpdate(req.params.id,{
            status : "deny"
        })
        return res.send({
            status : 200,
            message : "Successfully",
        })
    } catch (error) {
        return res.send({
            status : 502,
            message : "Server Down"
        })
    }
}


module.exports.past_request = async(req,res)=>{
    try {

        // console.log("hello world*********");
        const pastRequest = await guesthouseRequestModel.find({
            status : { $in: ['accept', 'deny'] }
        }).populate('guestHouse').populate('user').sort({createdAt : 1});
        
        return res.send({
            status : 200,
            message : "Successfully",
            pastRequest
        })
    } catch (error) {
        return res.send({
            status : 502,
            message : "Server Down"
        })
    }
}


