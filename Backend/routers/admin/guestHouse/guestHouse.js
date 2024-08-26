const doctorModel = require('../../../models/doctorModel');

const router = require('express').Router();


router.post('/',(req,res)=>{
    try {
        return res.send({
            status : 200,
            message : "Sucessfully"
        });
    } catch (error) {
        return res.send({
            status : 502,
            message : "Register error"
        });
    }
});



// add new Guest House 
router.post('/add',require('../../../controllers/Admin/AddController').add_guestHouse);



//////////////////////////////////////////////////////////////

// update gender for all doctor

/////////////////////////////////////////////////////////////

// router.post('/dr-update', async(req,res)=>{
//     try {
//         const allDR = await doctorModel.find();
//         for(let i of allDR){
//             await doctorModel.findByIdAndUpdate(i._id,{
//                 gender : 'Male'
//             })
//         }
//         return res.send({
//             status : 200,
//             message : "Sucessfully updated"
//         });
//     } catch (error) {
//         return res.send({
//             status : 502,
//             message : "Register error"
//         });
//     }
// })


router.post('/request',require('../../../controllers/Admin/guestHouse/guestHouseRequestController').allRequest);

router.post('/received-request',require('../../../controllers/Admin/guestHouse/guestHouseRequestController').received_Request);

router.post('/received-request/accept/:id',require('../../../controllers/Admin/guestHouse/guestHouseRequestController').accept_request);

router.post('/received-request/deny/:id',require('../../../controllers/Admin/guestHouse/guestHouseRequestController').deny_request);


router.post('/past-request',require('../../../controllers/Admin/guestHouse/guestHouseRequestController').past_request);



module.exports = router;