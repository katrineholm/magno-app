import { School } from '@material-ui/icons';
import axios, { AxiosError } from 'axios';
import url from './urls';

export async function createAccount(uuid: string, email: string, password: string, school: string){
    const form_data = {
        uuid: uuid,
        email: email,
        password: password,
        school: school,
    }
    try {
        const { data } = await axios.post(url.account, form_data)
        return data.result;
    }
    catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function loginAccount(email: string, password: string){
    const form_data = {
        email: email,
        password: password
    }
    try {
        const { data } = await axios.post(url.login, form_data)
        return data;
    }
    catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function logoutAccount(email: string){
    const form_data = {
        email: email,
    }
    try {
        const { data } = await axios.post(url.logout, form_data)
    }
    catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function authenticate(cookies: any, setCookie: any){
    if (cookies.c_user === undefined){
        return false
    }
    else{
        
        try {
            const form_data = {
                token: cookies.c_user,
            }
            const { data } = await axios.post(url.authenticate, form_data)
            if (data.result.includes("Authenticated")){
                const expiryDate = new Date(Date.now() + 1000*60*60*24);
                setCookie('c_user', data.token, { expires: expiryDate });
                return data;
            }
            return false;
        }
        catch (error){
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
        
        
    }
}

export async function addStudent(uuid: string, name: string, grade: string, school: string){
    const form_data = {
        uuid: uuid,
        name: name,
        school: school,
        grade: grade,
        testdate: "",
        risk: ""
    }
    try {
        const { data } = await axios.post(url.addStudent, form_data)
        return data;
    }
    catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function getStudents(school: string){
    const form_data = {
        school: school
    }
    try {
        const { data } = await axios.post(url.getStudents, form_data)
        return data;
    }
    catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function getClasses(school: string) {
    const form_data = {
        school: school, 
    }
    try {
        const { data } = await axios.post(url.getClasses, form_data)
        console.log("data", data)
        return data;
    }
        catch (error){
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
}