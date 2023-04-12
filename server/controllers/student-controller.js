//TODO: legg til add student, postscore
const { getStudentsBySchool, getStudentsByClasses, createStudent } = require("../db/students")
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
    //const classes = { classes: ["2A", "3B"] } //TODO: endre sånn at man får inn de tilhørende klassene til lærer
    //console.log("klasser fått inn: ")
    //console.log(classes)
    if (userIsAdmin(user)) {
        const students = await getStudentsBySchool(school)
        console.log(students)
        res.send({ students: students })
    }
    else if (userIsBasic(user)) {
        console.log("User is teacher")
        const students = await getStudentsByClasses(user)
        return res.json({ students: students })
    }
    else {
        res.status(401).json({ message: "Ikke gyldig rolle" }) //riktig feilkode?
    }
}


const addStudent = async (req, res) => {
    const user = req.user
    //const id = req.body.uuid;
    const name = req.body.name;
    const school = req.body.school;
    const grade = req.body.grade;
    const testdate = ""; //Fjerne?
    const risk = "";

    const motion_test = [];
    const fixed_form_test = [];
    const random_form_test = [];

    const existingClass = await getClassByName(grade, school);
    console.log(existingClass)
    if (existingClass === null) {
        res.status(400).json({ message: "Finnes ingen klasse" })
    }
    if (userIsBasic(user)) {
        if (!user.classes.includes(grade) || user.school !== school) {
            res.status(400).json({ message: "Ikke mulig å legge til i en klasse som du ikke er ansvarlig for" })
        }
    }

    const newStudent = {
        //id: id,
        name: name,
        school: school,
        grade: grade,
        testdate: testdate,
        tests: { motion_test, fixed_form_test, random_form_test },
        risk: risk
    };

    createStudent(newStudent)
    response = { 'result': 'Success adding student' }
    handleSuccessOrErrorMessage(response, false, res);
}


module.exports = {
    getStudents,
    addStudent
}
