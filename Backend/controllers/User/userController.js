

const userModel = require('../../models/userModel');
const { patch } = require('../../routers');
const { verify_jwt_token } = require('../../utils/jwt');



//** user details */
module.exports.user = async(req,res)=>{
    try{
        const {token} = req.body;
        let U = await verify_jwt_token(token);
        const user = await userModel.findById({_id : U.userId});
        // .populate({
        //     path : 'guestHouseOrder',
        //     populate : {
        //         path : 'guestHouse'
        //     }
        // });
        // console.log(user);
        if(!user){
            return res.send({
                message : "User not found",
                status : 404
            })
        }
        return res.send({
            user,
            status : 200
        })
    }catch(err){
        // console.log(err);
        return res.send({
            message : "Technical Error",
            status : 502
        })
    }
}
