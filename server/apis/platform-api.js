/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account-controller');
const studentController = require('../controllers/student-controller');

router.post('/account', accountController.createAccount)
router.post('/login', accountController.loginAccount)
router.post('/logout', accountController.logoutAccount)
router.post('/authenticate', accountController.authenticate)
router.post('/addStudent', studentController.addStudent)
router.post('/students', studentController.getStudents)
router.post('/student/score', studentController.postScore)
module.exports = router;
