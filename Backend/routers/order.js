const middleware = require('../middleware/middleware');

const router = require('express').Router();

router.post('/',(req,res)=>{
    try {
        return res.send({
            status : 200,
            message : "Successfully"
        });
    } catch (error) {
        return res.send({
            status : 502,
            message : "Server Down"
        })
    }
})


router.post('/guest-house', middleware, require('../controllers/User/orderController').allGuestHouseOrder);

router.post('/guest-house/:data', middleware, require('../controllers/User/orderController').searchOrder);




// router.post('/search', middleware, require('../controllers/User/orderController').searchOrder);

module.exports = router;