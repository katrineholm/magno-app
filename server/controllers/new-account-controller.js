//TODO: lag logout controller, og getTeachers(?)

const { hashPassword } = require("./../utils/password")
const { generateToken } = require('./../utils/token')

const { createUser, getUserByEmail } = require("../db/user")

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
            // generere token
            // gi positiv tilbakemelding til bruker:):)

            const token = generateToken(user.email)

            return res.json({ token: token })
        } else {
            return res.status(401).json({ message: "Wrong email or password" })
        }
    }
}

// const logoutController = async (req, res) => {
//     //Trengs det å gjøre noe her egt?
// }


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
        token: "" // Denne skal kanskje fjernes??
    };

    createUser(newUser);

    res.send({ message: "created user" })
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



module.exports = {
    loginController,
    postCreateUser,
    getCurrentUser,
}