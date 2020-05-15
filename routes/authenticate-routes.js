'user strict'

const express = require('express');
const router = express.Router();
const autheticateController = require('../controllers/authenticate-controller');

router.post('/', autheticateController.authenticate);

module.exports = router;