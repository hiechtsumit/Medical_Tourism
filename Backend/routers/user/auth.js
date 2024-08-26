const router = require('express').Router();


router.post('/register',require('../../controllers/User/authController').register);

router.post('/login',require('../../controllers/User/authController').login);


module.exports = router;