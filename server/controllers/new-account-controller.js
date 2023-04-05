//TODO: lag logout controller, og getTeachers(?)

const { hashPassword } = require("./../utils/password")
const { generateToken } = require('./../utils/token')

const { createUser, getUserByEmail, addClassToUser, removeClassFromUser } = require("../db/user");
const { getClassById, addTeacherToClass, deleteTeacherFromClass } = require("../db/class");

function handleSuccessOrErrorMessage(response, err, res) {
    if (!err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    } else {
        res.status(400).send(result);
    }
}

/**
 * 
 * Denne trenger ikke authentiserings middleware siden den gjøre faktisk authentisering :rocket:
 * @param {express request} req 
 * @param {express resopnse} res 
 * @returns 
 */
const loginController = async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    const user = await getUserByEmail(email);

    if (user === null) {
        return res.status(401).json({ message: "Wrong email or password" })
    } else {

        const hasedPassword = hashPassword(password)

        if (user.password === hasedPassword) {
            const token = generateToken(user.email)

            return res.json({ token: token })
        } else {
            return res.status(401).json({ message: "Wrong email or password" })
        }
    }
}


/**
 * 
 * Denne kalles uten at en bruker er authentisert, derfor trenger ikke middleware for slikt:)
 * @param {express request} req 
 * @param {express response} res 
 * @returns 
 */
const postCreateUser = async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    const school = req.body.school
    const classes = []


    const existingUser = await getUserByEmail(email) //Sjekker om mailen ligger i databasen fra før. Kan kun lage en mail. 

    if (existingUser !== null) {
        return res.status(400).json({ message: "Kunne ikke opprette bruker" })
    }

    const hashedPassword = hashPassword(password)

    const newUser = {
        email: email,
        password: hashedPassword,
        role: role,
        school: school,
        classes: classes,
    };

    createUser(newUser);
    response = { 'result': 'Success creating account' }
    handleSuccessOrErrorMessage(response, false, res);
    //res.send({ message: "created user" })
}

/**
 * Denne trenger authentisering siden den skal svare med hvilken bruker som er logget inn
 * @param {request} req 
 * @param {response} res 
 */
const getCurrentUser = (req, res) => {
    console.log("starter nå")
    console.log({ user: req.user })
    res.send({ user: req.user })
}

//Vil kanskje heller ha den i class-controller
const assignTeacherToClass = async (req, res) => { //put
    //Dersom bruker er verifisert og bruker er admin så skal denne kjøre
    console.log("starter nå")

    const teacher_mail = req.body.email //mailen til læreren??
    //const teacher = getUserByEmail(teacher_mail)
    const class_id = req.body.classid
    const teacher = await getUserByEmail(teacher_mail)
    const grade = await getClassById(class_id)

    if (teacher.classes.includes(class_id)) {
        //Hvis læreren allerede er ansvarlig for klassen
        return res.status(400).json({ message: "Læreren er allerede ansvarlig for klassen" })
    }
    if (grade.teacher.includes(teacher.id)) {
        //Hvis læreren allerede er ansvarlig for klassen
        return res.status(400).json({ message: "Læreren er allerede ansvarlig for klassen" })
    }
    console.log("legger til class to user")
    addClassToUser(teacher, class_id)
    console.log("legger til usert to class")
    addTeacherToClass(grade, teacher.id)
    response = { 'result': 'Success assigning teacher to class' }
    res.send(response)
}

const removeTeacherFromClass = async (req, res) => { //put
    //Dersom bruker er verifisert og bruker er admin så skal denne kjøre
    console.log("starter nå")

    const teacher_mail = req.body.email //mailen til læreren??
    //const teacher = getUserByEmail(teacher_mail)
    const class_id = req.body.classid
    const teacher = await getUserByEmail(teacher_mail)
    const grade = await getClassById(class_id)

    if (!teacher.classes.includes(class_id)){
        //Hvis læreren allerede er ansvarlig for klassen
        return res.status(400).json({ message: "Læreren er ikke ansvarlig for klassen" })
    }
    if (!grade.teacher.includes(teacher.id)) {
        //Hvis læreren allerede er ansvarlig for klassen
        return res.status(400).json({ message: "Læreren er ikke ansvarlig for klassen" })
    }
    console.log("legger til class to user")
    removeClassFromUser(teacher, class_id)
    deleteTeacherFromClass(grade, teacher.id)
    // addTeacherToClass(grade, teacher.id)
    response = { 'result': 'Success removing teacher from class' }
    res.send(response)
    
}



module.exports = {
    loginController,
    postCreateUser,
    getCurrentUser,
    assignTeacherToClass,
    removeTeacherFromClass
}