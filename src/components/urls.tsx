/* base url */
const baseURL = `${process.env.API_URL}` + ":" + process.env.PORT || 5000;

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

export default {
  account: accountURL,
  login: loginURL,
  logout: logoutURL,
  authenticate: authenticateURL,
  addStudent: addStudentURL,
  getStudents: getStudentsURL,
};