import axios, { AxiosError } from 'axios';
import url from './urls';

export async function createAccount(uuid: string, email: string, password: string){
    const form_data = {
        uuid: uuid,
        email: email,
        password: password
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
                const expiryDate = new Date(Date.now() + 1000*60*60*3600);
                setCookie('c_user', data.token, { expires: expiryDate });
                return true;
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