const { getUserByEmail } = require("../db/user")
const { verifyToken } = require("../utils/token")


const authenticated = async (req, res, next) => {

    try {
        const authorizationToken = req.headers.authorization.split(" ")[1]

        const validatedTokenResult = verifyToken(authorizationToken)
        const userEmail = validatedTokenResult.email

        const user = await getUserByEmail(userEmail)

        if (user === null) { // Brukeren finnes ikke
            return res.status(401).send({ error: "User not found in db" })
        } else {
            req.user = user
            next() //Gjør at man kan gå videre til neste funksjon, og at man får tilgang på brukeren også. 
        }
    } catch (e) {
        return res.status(401).json({ error: "Du er ikke logget inn" })
    }


}

module.exports = {
    authenticated
}