/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const newAccountController = require("../controllers/new-account-controller")
const newStudentController = require("../controllers/new-student-controller")
const newClassController = require("../controllers/new-class-controller")
const { authenticated, userIsAdmin } = require("./../middlewares/autenticated")


router.post("/login", newAccountController.loginController)
router.post("/create-user", newAccountController.postCreateUser)
router.put("/change-to-admin", newAccountController.changeToAdmin)
router.get("/get-current-user", authenticated, newAccountController.getCurrentUser) //Har med authenticated som et middleware her
router.get("/get-students", authenticated, newStudentController.getStudents) //Har med authenticated som et middleware her
router.post("/add-student", authenticated, newStudentController.addStudent)
router.put("/assign-teacher-to-class", authenticated, userIsAdmin, newClassController.assignTeacherToClass)
router.put("/remove-teacher-from-class", authenticated, userIsAdmin, newClassController.removeTeacherFromClass)
router.post("/create-class", authenticated, userIsAdmin, newClassController.postCreateClass)
router.get("/get-classes", authenticated, newClassController.getClasses)


//router.post('/getTeachers', accountController.getTeachers)
module.exports = router;
