const express = require('express');
const router = express.Router();
const controller = require('../controllers/Controllers');

router.get('/', controller.getMessage);

module.exports = router;