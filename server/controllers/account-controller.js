//TODO: lag logout controller, og getTeachers(?)

const { hashPassword } = require("../utils/password")
const { generateToken } = require('../utils/token')

const { createUser, getUserByEmail, getTeachersBySchool, addAdmin } = require("../db/user");
// const { default: userEvent } = require("@testing-library/user-event");

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
    const name = req.body.name
    const password = req.body.password
    const school = req.body.school
    const role = "BASIC"
    const classes = []

    const existingUser = await getUserByEmail(email) //Sjekker om mailen ligger i databasen fra før. Kan kun lage en mail. 

    if (existingUser !== null) {
        return res.status(400).json({ message: "Kunne ikke opprette bruker" })
    }

    const hashedPassword = hashPassword(password)

    const newUser = {
        email: email,
        name: name,
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



const changeToAdmin = async (req, res) => {

    const email = req.body.email

    const user = await getUserByEmail(email)

    if (user === null) {
        return res.status(400).json({ message: "Bruker finnes ikke" })
    }
    if (user.role === "ADMIN") {
        return res.status(400).json({ message: "Bruker er allerede admin" })
    }
    addAdmin(user)
    console.log(user)
    res.send({ message: "user is now admin" })
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


const getTeachers = async (req, res) => {
    const school = req.user.school;
    const teachers = await getTeachersBySchool(school)
    res.send({ teachers: teachers })
}


module.exports = {
    loginController,
    postCreateUser,
    getCurrentUser,
    changeToAdmin,
    getTeachers
}