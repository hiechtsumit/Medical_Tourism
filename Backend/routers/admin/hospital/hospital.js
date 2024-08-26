
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



// add new hospital details
router.post('/add',require('../../../controllers/Admin/AddController').add_hospital);




module.exports = router;