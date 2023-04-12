import { School } from '@material-ui/icons';
import axios, { AxiosError } from 'axios';
import url from './urls';
import { saveToken, getToken, clearToken } from '../utils/tokens.js'

export function getHeader() {
    const token = getToken()
    const header = { "authorization": `Bearer ${token}` }
    return header
}

//export async function createAccount(uuid: string, email: string, password: string, role: string, school: string) {
export async function createAccount(email: string, name: string, password: string, school: string) {
    const form_data = {
        //uuid: uuid,
        email: email,
        name: name,
        password: password,
        school: school,
    }
    try {
        //const { data } = await axios.post(url.account, form_data)
        console.log(form_data)
        console.log(url.newAccount)
        const { data } = await axios.post(url.newAccount, form_data)
        console.log("Her kommer data fra create_account backend")
        console.log(data)
        return data.result;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function newLoginAccount(email: string, password: string) {
    const form_data = {
        email: email,
        password: password
    }
    try {
        const { data } = await axios.post(url.newLogin, form_data) //må endre url, og hvordan det brukes. 
        saveToken(data.token) //Har ikke testet om denne funker
        console.log("Her kommer det token fra backend:")
        console.log(data)
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function newGetStudents() {
    const header = getHeader()
    try {
        const data = await fetch(url.newGetStudents, { headers: header }).then(res => res.json())
        return data.students;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}
export async function newAddStudent(name: string, grade: string, school: string) {
// export async function newAddStudent(uuid: string, name: string, grade: string, school: string) {
    const header = getHeader()
    const form_data = {
        // uuid: uuid,
        name: name,
        school: school,
        grade: grade
    }
    try {
        const { data } = await axios.post(url.newAddStudent, form_data, { headers: header })
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function getCurrentUser() {
    //const token = getToken()
    //console.log(token)
    //const header = { "authorization": `Bearer ${token}` }
    const header = getHeader()
    const result = await fetch(url.getCurrentUser, { headers: header }).then(res => res.json())
    console.log(result.user)
    return result.user
}

export async function newGetClasses() {
    const header = getHeader()
    try {
        const data = await fetch(url.newGetClasses, { headers: header }).then(res => res.json())
        return data.classes;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}


// export async function logoutAccount(email: string) {
//     const form_data = {
//         email: email,
//     }
//     try {
//         const { data } = await axios.post(url.logout, form_data)
//     }
//     catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message);
//             return error.message;
//         } else {
//             console.log('unexpected error: ', error);
//             return 'An unexpected error occurred';
//         }
//     }
// }

// export async function authenticate(cookies: any, setCookie: any) {
//     console.log("cookies:", cookies)
//     console.log("setCookie:", setCookie)
//     if (cookies.c_user === undefined) {
//         return false
//     }
//     else {

//         try {
//             const form_data = {
//                 token: cookies.c_user,
//             }
//             const { data } = await axios.post(url.authenticate, form_data) //Henter data fra serveren og databasen
//             console.log("url: ", url.authenticate)
//             if (data.result.includes("Authenticated")) { //Serveren vil gi tilbake response med results(authenticated eller ikke), email, school og token
//                 const expiryDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
//                 setCookie('c_user', data.token, { expires: expiryDate }); //Hvorfor lager man en cookie?
//                 console.log("data :", data)
//                 return data;
//             }
//             return false;
//         }
//         catch (error) {
//             if (axios.isAxiosError(error)) {
//                 console.log('error message: ', error.message);
//                 return error.message;
//             } else {
//                 console.log('unexpected error: ', error);
//                 return 'An unexpected error occurred';
//             }
//         }
//     }
// }

// export async function loginAccount(email: string, password: string) {
//     const form_data = {
//         email: email,
//         password: password
//     }
//     try {
//         const { data } = await axios.post(url.login, form_data) //må endre url, og hvordan det brukes. 
//         return data;
//     }
//     catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message);
//             return error.message;
//         } else {
//             console.log('unexpected error: ', error);
//             return 'An unexpected error occurred';
//         }
//     }
// }

// export async function addStudent(uuid: string, name: string, grade: string, school: string) {
//     const form_data = {
//         uuid: uuid,
//         name: name,
//         school: school,
//         grade: grade,
//         testdate: "",
//         risk: ""
//     }
//     try {
//         const { data } = await axios.post(url.addStudent, form_data)
//         return data;
//     }
//     catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message);
//             return error.message;
//         } else {
//             console.log('unexpected error: ', error);
//             return 'An unexpected error occurred';
//         }
//     }
// }

// export async function getStudents(school: string) { //Bør kanskje gjøres noe auth her?
//     const form_data = {
//         school: school
//     }
//     try {
//         const { data } = await axios.post(url.getStudents, form_data)
//         console.log("her kommer data fra backend:")
//         console.log(data)
//         return data;
//     }
//     catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message);
//             return error.message;
//         } else {
//             console.log('unexpected error: ', error);
//             return 'An unexpected error occurred';
//         }
//     }
// }

// export async function getClasses(school: string) {
//     const form_data = {
//         school: school,
//     }
//     try {
//         const { data } = await axios.post(url.getClasses, form_data)
//         return data;
//     }
//     catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.log('error message: ', error.message);
//             return error.message;
//         } else {
//             console.log('unexpected error: ', error);
//             return 'An unexpected error occurred';
//         }
//     }
// }

export async function addClass(uuid: string, name: string, school: string, teacherId: string) {
    const form_data = {
        uuid: uuid,
        name: name,
        school: school,
        teacherId: teacherId
    }
    try {
        const { data } = await axios.post(url.addClass, form_data)
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function getTeachers(school: string) {
    const form_data = {
        school: school,
    }
    try {
        const { data } = await axios.post(url.getTeachers, form_data)
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}