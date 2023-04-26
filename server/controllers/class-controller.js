const { UserDefinedFunction } = require("@azure/cosmos");
const { getClassesBySchool, getClassesByList, getClassByName, addTeacherToClass, createClass, deleteTeacherFromClass } = require("../db/class");
const { userIsAdmin, userIsBasic } = require("../utils/role")
const { getUserByEmail, getUserById, addClassToUser, removeClassFromUser } = require("../db/user");

function handleSuccessOrErrorMessage(response, err, res) {
    if (!err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    } else {
        res.status(400).send(result);
    }
}

const getClasses = async (req, res) => {
    const user = req.user;
    const school = user.school;
    if (userIsAdmin(user)) {
        const classes = await getClassesBySchool(school)
        res.send({ classes: classes })
    }
    else if (userIsBasic(user)) {
        const classes = await getClassesByList(user)
        res.send({ classes: classes })
    }
    else {
        res.status(400).json({ message: "Brukeren har ingen gyldig rolle" })
    }

}

const postCreateClass = async (req, res) => {
    const name = req.body.name;
    const school = req.body.school;
    const teacherId = req.body.teacherId;


    const existingClass = await getClassByName(name, school) //Sjekker om klassen ligger i databasen fra før. Kan kun lage en klasse. 

    if (existingClass !== null) {
        return res.status(400).json({ message: "Kunne ikke opprette klasse" })
    }
    let newClass;

    if (teacherId === "") {
        newClass = {
            name: name,
            school: school,
            teacher: [],
        };

        createClass(newClass);
        response = { 'result': 'Success creating class' }
        handleSuccessOrErrorMessage(response, false, res);

    } else {
        const existingTeacher = await getUserById(teacherId)
        if (existingTeacher == null) {
            return res.status(400).json({ message: "Læreren finnes ikke" })
        }
        newClass = {
            name: name,
            school: school,
            teacher: [teacherId],
        };
        createClass(newClass);
        addClassToUser(existingTeacher, name)
        response = { 'result': 'Success creating class' }
        handleSuccessOrErrorMessage(response, false, res);
    }

}

const assignTeacherToClass = async (req, res) => {
    console.log("starter nå")

    const teacher_mail = req.body.email
    const class_name = req.body.classname
    const teacher = await getUserByEmail(teacher_mail)
    const grade = await getClassByName(class_name, teacher.school)

    if (teacher.classes.includes(class_name)) {
        //Hvis læreren allerede er ansvarlig for klassen
        return res.status(400).json({ message: "Læreren er allerede ansvarlig for klassen" })
    }
    if (grade.teacher.includes(teacher.id)) {
        //Hvis læreren allerede er ansvarlig for klassen
        return res.status(400).json({ message: "Læreren er allerede ansvarlig for klassen" })
    }
    addClassToUser(teacher, class_name)
    addTeacherToClass(grade, teacher.id)
    response = { 'result': 'Success assigning teacher to class' }
    res.send(response)
}

const removeTeacherFromClass = async (req, res) => { //put
    //Dersom bruker er verifisert og bruker er admin så skal denne kjøre

    const teacher_id = req.body.teacherId
    const class_name = req.body.className
    const teacher = await getUserById(teacher_id)
    const class_object = await getClassByName(class_name, teacher.school)
 
    if (!teacher.classes.includes(class_name)) {
        //Hvis læreren ikke er ansvarlig for klassen
        return res.status(400).json({ message: "Læreren er ikke ansvarlig for klassen" })
    }
    if (!class_object.teacher.includes(teacher_id)) {
        //Hvis læreren ikke er ansvarlig for klassen
        return res.status(400).json({ message: "Læreren er ikke ansvarlig for klassen" })
    }

    removeClassFromUser(teacher, class_name)
    deleteTeacherFromClass(teacher.id, class_object)
    response = { 'result': 'Success removing teacher from class' }
    res.send(response)
}

module.exports = {
    getClasses,
    assignTeacherToClass,
    removeTeacherFromClass,
    postCreateClass
}
