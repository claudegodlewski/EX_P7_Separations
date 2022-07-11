const express = require('express');
const postCtrl = require('../controllers/post');

const router = express.Router();

router.post('/messages', postCtrl.postMessage);

module.exports = router;