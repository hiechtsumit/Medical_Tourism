
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



// Hospital Route
router.use('/hospital',require('./hospital/hospital'));

// guest House Route
router.use('/guest-house',require('./guestHouse/guestHouse'));




module.exports = router;