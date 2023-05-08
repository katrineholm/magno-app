/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const accountController = require("../controllers/account-controller")
const studentController = require("../controllers/student-controller")
const classController = require("../controllers/class-controller")
const { authenticated, userIsAdmin } = require("./../middlewares/autenticated")


router.post("/login", accountController.loginController)
router.post("/create-user", accountController.postCreateUser)
router.put("/change-to-admin", accountController.changeToAdmin)
router.get("/get-current-user", authenticated, accountController.getCurrentUser) //Har med authenticated som et middleware her
router.get("/get-students", authenticated, studentController.getStudents) //Har med authenticated som et middleware her
router.post("/add-student", authenticated, studentController.addStudent)
router.put("/update-student-information", authenticated, studentController.updateStudentInformation)
router.put("/assign-teacher-to-class", authenticated, userIsAdmin, classController.assignTeacherToClass)
router.put("/remove-teacher-from-class", authenticated, userIsAdmin, classController.removeTeacherFromClass)
router.post("/create-class", authenticated, userIsAdmin, classController.postCreateClass)
router.get("/get-classes", authenticated, classController.getClasses)
router.get('/getTeachers', authenticated, userIsAdmin, accountController.getTeachers)
router.get('/getTeachersByClass', authenticated, accountController.getTeachersByClassC)
router.post("/student/score", studentController.postScore)
module.exports = router;