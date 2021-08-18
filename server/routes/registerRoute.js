const router = require('express').Router();
const registration = require('../controller/registerController');

router.post("/register", registration.register);
router.post("/login", );

module.exports = router;