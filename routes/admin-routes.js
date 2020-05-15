'use strict'

const express = require('express');
const router = express.Router();
const authenticateService = require('../services/authenticate-service');
const userController = require('../controllers/user-controller');
const adminController = require('../controllers/admin-controller');


router.post('/newUser', authenticateService.isAdmin, userController.newUser);
router.post('/newStudent', authenticateService.isAdmin, adminController.newStudent);
router.post('/createClass', authenticateService.isAdmin, adminController.createClass);
router.post('/addStudentToClass', authenticateService.isAdmin, adminController.addStudentToClass);
router.get('/users', authenticateService.isAdmin, adminController.getUser);
router.get('/students', authenticateService.isAdmin, adminController.getStudents);
router.get('/quantityStudents', authenticateService.isAdmin, adminController.getQuantityStudents);
router.get('/teachers', authenticateService.isAdmin, adminController.getTeachers);
router.post('/teachers', authenticateService.isAdmin, adminController.addTeacher);
router.get('/classes', authenticateService.isAdmin, adminController.getClasses);
router.put('/classes', authenticateService.isAdmin, adminController.updateClass);
router.put('/student', authenticateService.isAdmin, adminController.updateStudent);
module.exports = router;