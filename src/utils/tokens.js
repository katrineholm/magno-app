
const tokenKey = "token" //Denne må kanksje oppdateres? Eller ikke?

export const saveToken = (token) => {
    localStorage.setItem(tokenKey, token)
}

export const getToken = () => {
    return localStorage.getItem(tokenKey)
}