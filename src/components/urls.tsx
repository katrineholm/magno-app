

/* base url */
const baseURL = process.env.REACT_APP_API_URL;

/* Login post, get, update */
export const loginURL = `${baseURL}/login`;

/* Logout post */
export const logoutURL = `${baseURL}/logout`;

/* Account post, get, update */
export const accountURL = `${baseURL}/account`;

/* Authenticate post */
export const authenticateURL = `${baseURL}/authenticate`;

/* Add student post */ 
export const addStudentURL= `${baseURL}/addStudent`;

/* Get students */ 
export const getStudentsURL= `${baseURL}/students`;

/** Get classes  */
export const getClassesURL = `${baseURL}/classes`;

/** Add class  */
export const addClassURL = `${baseURL}/addClass`;

/** Get teachers  */
export const getTeachersURL = `${baseURL}/getTeachers`;


export default {
  account: accountURL,
  login: loginURL,
  logout: logoutURL,
  authenticate: authenticateURL,
  addStudent: addStudentURL,
  getStudents: getStudentsURL,
  getClasses: getClassesURL,
  addClass: addClassURL,
  getTeachers: getTeachersURL
};