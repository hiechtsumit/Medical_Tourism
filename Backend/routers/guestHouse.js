const middleware = require('../middleware/middleware');

const router = require('express').Router();

router.get('/',require('../controllers/guestHouseController').allGuestHouse);

router.post('/each',require('../controllers/guestHouseController').each_guestHouse_details);

// for Auth user
router.post('/send-request',middleware, require('../controllers/User/requestFormController').guestHouseRequest)


module.exports = router;