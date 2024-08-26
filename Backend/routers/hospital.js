const router = require('express').Router();
const middleware = require('../middleware/middleware');

router.get('/',require('../controllers/hospitalController').allHospital);

router.post('/each',require('../controllers/hospitalController').each_hospital_details);

router.post('/each/department',require('../controllers/hospitalController').each_hospital_department_details);

router.post('/search',require('../controllers/hospitalController').searchHospital);


// for Auth user
router.post('/send-request', middleware, require('../controllers/User/requestFormController').departmentBookingRequest)


module.exports = router;