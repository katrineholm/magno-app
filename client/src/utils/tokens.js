
const tokenKey = "token" //Denne må kanksje oppdateres? Eller ikke?

export const saveToken = (token) => {
    localStorage.setItem(tokenKey, token)
}

export const clearToken = () => { //Trenger ikke sende noe til backend
    localStorage.removeItem(tokenKey)
}

export const getToken = () => {
    return localStorage.getItem(tokenKey)
}