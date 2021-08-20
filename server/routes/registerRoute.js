const router = require('express').Router();
const registration = require('../controller/registerController');
const authMiddleware = require('../middleware/authMiddleware')
const validate = require('../middleware/validateRequest');

router.post("/register", validate.register, registration.register);
router.post("/", validate.login, registration.login);
router.get("/logout/:user_id", authMiddleware.userAuth, registration.logout)

module.exports = router;