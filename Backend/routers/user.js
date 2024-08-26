const middleware = require('../middleware/middleware');

const router = require('express').Router();


router.post('/',middleware,require('../controllers/User/userController').user)



module.exports = router;