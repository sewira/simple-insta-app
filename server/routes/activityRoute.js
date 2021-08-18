const router = require('express').Router();
const userActivity = require('../controller/userActivity');
const upload = require('../middleware/multer');

router.post('/upload/:user_id', upload.single('image'), userActivity.upload);
router.post('/posts/:user_id', userActivity.getAllPost);
router.delete('/delete', userActivity.delete);

module.exports = router;

