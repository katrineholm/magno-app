import { School } from '@material-ui/icons';
import axios, { AxiosError } from 'axios';
import url from './urls';
import { saveToken, getToken, clearToken } from '../utils/tokens.js'

export function getHeader() {
    const token = getToken()
    const header = { "authorization": `Bearer ${token}` }
    return header
}

export async function createAccount(email: string, name: string, password: string, school: string) {
    const form_data = {
        email: email,
        name: name,
        password: password,
        school: school,
    }
    try {
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
        const { data } = await axios.post(url.newLogin, form_data) 
        saveToken(data.token) 
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

export async function getCurrentUser() {
    const header = getHeader()
    const result = await fetch(url.getCurrentUser, { headers: header }).then(res => res.json())
    console.log(result.user)
    return result.user
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
    const header = getHeader()
    const form_data = {
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