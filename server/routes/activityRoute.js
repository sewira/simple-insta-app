const router = require('express').Router();
const userActivity = require('../controller/userActivity');
const upload = require('../middleware/multer');
const authorization = require('../middleware/authMiddleware');

router.post('/upload/:user_id', upload.single('image'), authorization.userAuth, userActivity.upload);
router.get('/posts/:user_id', authorization.userAuth, userActivity.getAllPost);
// router.delete('/delete', authorization.userAuth, userActivity.delete);

module.exports = router;

