const router = require('express').Router();

const middleware = require('../middleware/middleware');
// const songModel = require('../models/songModel');

// Root router
router.get('/',(req,res)=>{
    try{
        // console.log(req.cookies);
        return res.send({
            status : 200,
            message : "This is Home page"
        });
    }catch(err){
        return res.send({
            status : 502,
            message : "Server Down"
        })
    }
});

// Authentication router for user
router.use('/auth',require('./user/auth'));


// Login user router
router.use('/user',middleware ,require('./user'));

router.use('/order', require('./order'))


router.use('/hospital',require('./hospital'));

router.use('/guest-house',require('./guestHouse'));



// Authentication router for Admin
router.use('/admin',require('./admin/admin'));


module.exports = router;