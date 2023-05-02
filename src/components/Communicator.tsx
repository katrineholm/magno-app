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
        console.log(url.account)
        const { data } = await axios.post(url.account, form_data)
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

export async function updateStudentInformation(dyslexia_in_family: string, vision_examination: string, hearing_examination: string, comment: string, studentId: string) {
    const header = getHeader()
    const form_data = {
        studentId: studentId,
        information: {
            dyslexia_in_family: dyslexia_in_family,
            vision_examination: vision_examination,
            hearing_examination: hearing_examination,
            comment: comment
        }
    }
    try {
        console.log("her er vi nå", form_data)
        console.log(url.updateStudentInformation)
        const { data } = await axios.put(url.updateStudentInformation, form_data, { headers: header })
        console.log("Her kommer data fra updateStudentInformation backend")
        console.log(data)
        return data.updatedItem;
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


export async function loginAccount(email: string, password: string) {
    const form_data = {
        email: email,
        password: password
    }
    try {
        const { data } = await axios.post(url.login, form_data)
        saveToken(data.token)
        console.log("Her kommer det token fra backend:")
        console.log(data)
        return data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return error?.response;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function getCurrentUser() {
    const header = getHeader()
    const result = await fetch(url.getCurrentUser, { headers: header }).then(res => res.json())
    return result.user
}



export async function getStudents() {
    const header = getHeader()
    try {
        const data = await fetch(url.getStudents, { headers: header }).then(res => res.json())
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
export async function addStudent(name: string, grade: string, school: string) {
    const header = getHeader()
    const form_data = {
        name: name,
        school: school,
        grade: grade
    }
    try {
        const { data } = await axios.post(url.addStudent, form_data, { headers: header })
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

export async function getClasses() {
    const header = getHeader()
    try {
        const data = await fetch(url.getClasses, { headers: header }).then(res => res.json())
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

// export async function addClass(uuid: string, name: string, school: string, teacherId: string) {
export async function addClass(name: string, school: string, teacherId: string) {
    const header = getHeader()
    const form_data = {
        name: name,
        school: school,
        teacherId: teacherId
    }
    try {
        const { data } = await axios.post(url.addClass, form_data, { headers: header })
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

export async function getTeachers() {

    const header = getHeader()
    try {
        const data = await fetch(url.getTeachers, { headers: header }).then(res => res.json())
        return data.teachers;
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

export async function getTeachersByClass(school: string, className: string) {
    const header = getHeader()
    const params = {
        school: school,
        className: className
    }
    try {
        const { data } = await axios.get(url.getTeachersByClass, { params: params, headers: header })
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

export async function removeTeacherFromClass(teacherId: string, className?: string) {
    const header = getHeader();
    const params = {
        teacherId: teacherId,
        className: className,
    }
    try {
        const { data } = await axios.put(url.removeTeacherFromClass, params, { headers: header });
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

export async function assignTeacherToClass(teacherId: string, className: string) {
    const header = getHeader();
    const params = {
        teacherId: teacherId,
        className: className,
    }
    try {
        const { data } = await axios.put(url.assignTeacherToClass, params, { headers: header });
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
