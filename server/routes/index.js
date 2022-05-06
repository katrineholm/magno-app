/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const studentController = require('../controllers/studentController');

router.post('/account', accountController.createAccount)
router.post('/login', accountController.loginAccount)
router.post('/logout', accountController.logoutAccount)
router.post('/authenticate', accountController.authenticate)
router.post('/addStudent', studentController.addStudent)
router.post('/students', studentController.getStudents)
module.exports = router;
