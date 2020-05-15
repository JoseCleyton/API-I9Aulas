'user strict'
const express = require('express');
const router = express.Router();
const authenticateService = require('../services/authenticate-service');
const teacherController = require('../controllers/teacher-controller');

router.post('/addMaterial', authenticateService.isTeacher, teacherController.addMaterial);
router.post('/addWork', authenticateService.isTeacher, teacherController.addWork);
router.post('/addScores', authenticateService.isTeacher, teacherController.addScores);

module.exports = router;