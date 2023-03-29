/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account-controller');
const studentController = require('../controllers/student-controller');
const classController = require('../controllers/class-controller')

router.post('/account', accountController.createAccount)
router.post('/login', accountController.loginAccount)
router.post('/logout', accountController.logoutAccount)
router.post('/authenticate', accountController.authenticate)
router.post('/addStudent', studentController.addStudent)
router.post('/students', studentController.getStudents)
router.post('/student/score', studentController.postScore)
router.post('/classes', classController.getClasses)
router.post('/addClass', classController.addClass)
router.post('/getTeachers', accountController.getTeachers)
module.exports = router;
