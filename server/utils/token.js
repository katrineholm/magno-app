const jwt = require('jsonwebtoken');


const TOKEN_SECRET = "test" // Denne burde være secret og ikke commites i kodebasen for best practise


const generateToken = (email) => {
    const token = jwt.sign({ email }, TOKEN_SECRET);

    return token
}
/**
 * Denne throws execption hvis token ikke er gyldig for secret
 * @param {string} token 
 * @returns {{email: string, iat: timestamp(int)}}
 */
const verifyToken = (token) => {

    const tokenIsValid = jwt.verify(token, TOKEN_SECRET)

    return tokenIsValid
}


module.exports = {
    generateToken,
    verifyToken
}