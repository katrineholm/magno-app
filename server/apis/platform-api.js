/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account-controller');
const studentController = require('../controllers/student-controller');
const classController = require('../controllers/class-controller')
const newAccountController = require("../controllers/new-account-controller")
const newStudentController = require("../controllers/new-student-controller")
const newClassController = require("../controllers/new-class-controller")
const { authenticated, userIsAdmin } = require("./../middlewares/autenticated")


router.post("/new-login", newAccountController.loginController)
router.post("/new-create-user", newAccountController.postCreateUser)
router.put("/change-to-admin", newAccountController.changeToAdmin)
router.get("/new-get-current-user", authenticated, newAccountController.getCurrentUser) //Har med authenticated som et middleware her
router.get("/new-get-students", authenticated, newStudentController.getStudents) //Har med authenticated som et middleware her
router.post("/new-add-student", authenticated, newStudentController.addStudent)
router.put("/assign-teacher-to-class", authenticated, userIsAdmin, newClassController.assignTeacherToClass)
router.put("/remove-teacher-from-class", authenticated, userIsAdmin, newClassController.removeTeacherFromClass)
router.post("/new-create-class", authenticated, userIsAdmin, newClassController.postCreateClass)
router.get("/new-get-classes", authenticated, newClassController.getClasses)



//router.post('/account', accountController.createAccount)
//router.post('/login', accountController.loginAccount)
//router.post('/logout', accountController.logoutAccount)
//router.post('/authenticate', accountController.authenticate) // endre til getme eeller user. Eller kan egt fjernes når det nye er på plass
//router.post('/addStudent', studentController.addStudent)
router.post('/students', studentController.getStudents) // GET 
router.post('/student/score', studentController.postScore)
router.post('/classes', classController.getClasses) // GET
router.post('/addClass', classController.addClass)
router.post('/getTeachers', accountController.getTeachers)
module.exports = router;
