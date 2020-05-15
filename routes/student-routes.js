'user strict'

const express = require('express');
const router = express.Router();
const authenticateService= require('../services/authenticate-service')
const studentController = require('../controllers/student-controller')

router.get('/materials/:idClass', authenticateService.authorize, studentController.get);
router.get('/scores/:idDeliverWork',authenticateService.authorize, studentController.getDeliverWorksById);
router.get('/deliverWorks', authenticateService.authorize, studentController.getDeliverWorks)
router.post('/answerWork', authenticateService.authorize, studentController.answerWork);

module.exports = router;