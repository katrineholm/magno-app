//TODO: legg til add student, postscore
const { getStudentsBySchool, getStudentsByClasses, createStudent, getStudentById, updateInformation } = require("../db/students")
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
    //Må legge til other tests også


    const existingClass = await getClassByName(grade, school);
    if (existingClass === null) {
        res.status(400).json({ message: "Finnes ingen klasse" })
    }
    if (userIsBasic(user)) {
        if (!user.classes.includes(grade) || user.school !== school) {
            res.status(400).json({ message: "Ikke mulig å legge til i en klasse som du ikke er ansvarlig for" })
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
    updateStudentInformation
}
