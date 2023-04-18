const CryptoJS = require('crypto-js')


/**
 * 
 * Dette tar et vanlig passord, og hasher det så man ikke kan finne ut hva passordet var i klartekst
 * Hashet passord lagres i databasen
 * 
 * Dette brukes så for å se om passord som brukes på login, er det samme som det som lagres i databasen
 * 
 * @param {string} password 
 * @returns string
 */
const hashPassword = (password) => {
    const salt = password.substring(password.indexOf(":") + 1, password.length)
    const clientkey256Bits = CryptoJS.PBKDF2(password, salt, { keySize: 256 / 32 }).toString();

    return clientkey256Bits
}

module.exports = {
    hashPassword
}