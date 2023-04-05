

/* base url */
const baseURL = process.env.REACT_APP_API_URL;

/* Login post, get, update */
export const loginURL = `${baseURL}/login`;

export const newloginURL = `${baseURL}/new-login`;
export const newGetStudentsURL = `${baseURL}/new-get-students`;


/* Logout post */
export const logoutURL = `${baseURL}/logout`;

/* Account post, get, update */
export const accountURL = `${baseURL}/account`;

export const newAccountURL = `${baseURL}/new-create-user`;

/* Authenticate post */
export const authenticateURL = `${baseURL}/authenticate`;

/* Get current user */
export const getCurrentUserURL = `${baseURL}/new-get-current-user` // denne burde oppdateres:)

/* Add student post */
export const addStudentURL = `${baseURL}/addStudent`;

/* Add newstudent post */
export const newAddStudentURL = `${baseURL}/new-add-student`;

/* Get students */
export const getStudentsURL = `${baseURL}/students`;

/** Get classes  */
export const getClassesURL = `${baseURL}/classes`;

/** Add class  */
export const addClassURL = `${baseURL}/addClass`;

/** Get teachers  */
export const getTeachersURL = `${baseURL}/getTeachers`;


export default {
  account: accountURL,
  newAccount: newAccountURL,
  login: loginURL,
  newLogin: newloginURL,
  newGetStudents: newGetStudentsURL,
  newAddStudent: newAddStudentURL,
  logout: logoutURL,
  authenticate: authenticateURL,
  getCurrentUser: getCurrentUserURL,
  addStudent: addStudentURL,
  getStudents: getStudentsURL,
  getClasses: getClassesURL,
  addClass: addClassURL,
  getTeachers: getTeachersURL
};