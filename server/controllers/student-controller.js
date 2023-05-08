//TODO: legg til add student, postscore
const { getStudent, getStudentsBySchool, getStudentsByClasses, createStudent, getStudentById, updateInformation, updateScore } = require("../db/students")
const { userIsAdmin, userIsBasic } = require("../utils/role")
const { getClassByName } = require("../db/class");

function handleSuccessOrErrorMessage(response, err, res) {
    if (!err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    } else {
        res.status(400).send(result);
    }
}

const postScore = async (req, res) => {
    const id = req.body.id;
    const test_type = req.body.test_type;
    const test_score = req.body.test_score;
    const student = await getStudentById(id);

    const updatedStudentWithScore = await updateScore(student, test_type, test_score);

    res.send({ status: "ok" })
}

const getStudents = async (req, res) => {
    const user = req.user
    const school = user.school

    if (userIsAdmin(user)) {
        const students = await getStudentsBySchool(school)
        res.send({ students: students })
    }
    else if (userIsBasic(user)) {
        const students = await getStudentsByClasses(user)
        return res.json({ students: students })
    }
    else {
        res.status(401).json({ message: "Ikke gyldig rolle" }) //riktig feilkode?
    }
}

const updateStudentInformation = async (req, res) => {
    const studentId = req.body.studentId
    const newInformation = req.body.information
    const student = await getStudentById(studentId)
    const updatedItem = await updateInformation(student, newInformation)
    response = { 'result': 'Success updating student information', 'updatedItem': updatedItem }
    console.log(response)
    res.send(response)
}




const addStudent = async (req, res) => {
    const user = req.user
    const name = req.body.name;
    const school = req.body.school;
    const grade = req.body.grade;
    const testdate = ""; //Fjerne?
    const risk = "";

    //tests
    const motion_test = [];
    const fixed_form_test = [];
    const random_form_test = [];

    //information
    const dyslexia_in_family = ""
    const vision_examination = ""
    const hearing_examination = ""
    const comment = ""

    const existingStudent = await getStudent(name, grade, school)
    if (existingStudent !== null) {
        return res.status(400).json({ message: "Student already exists" })
    }
    const existingClass = await getClassByName(grade, school);
    if (existingClass === null) {
        res.status(400).json({ message: "The class does not exixts" })
    }
    if (userIsBasic(user)) {
        if (!user.classes.includes(grade) || user.school !== school) {
            res.status(400).json({ message: "Not possible to add a student to a class that you're not respoinsible for" })
        }
    }

    const newStudent = {
        name: name,
        school: school,
        grade: grade,
        testdate: testdate,
        tests: { motion_test, fixed_form_test, random_form_test },
        information: { dyslexia_in_family, vision_examination, hearing_examination, comment },
        risk: risk
    };

    createStudent(newStudent)
    response = { 'result': 'Success adding student' }
    handleSuccessOrErrorMessage(response, false, res);
}


module.exports = {
    getStudents,
    addStudent,
    updateStudentInformation,
    postScore
}
