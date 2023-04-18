

/* base url */
const baseURL = process.env.REACT_APP_API_URL;

/* Log in */
export const loginURL = `${baseURL}/login`;

/* Register user */
export const accountURL = `${baseURL}/create-user`;

/* Get current user */
export const getCurrentUserURL = `${baseURL}/get-current-user` // denne burde oppdateres:)

/* Get students */
export const getStudentsURL = `${baseURL}/get-students`;

/* Add newstudent post */
export const addStudentURL = `${baseURL}/add-student`;

export const getClassesURL = `${baseURL}/get-classes`;

/** Add class  */
export const addClassURL = `${baseURL}/create-class`;

/** Get teachers  */
export const getTeachersURL = `${baseURL}/getTeachers`;

export const getTeachersByClass =  `${baseURL}/getTeachersByClass/`;

export default {
  account: accountURL,
  login: loginURL,
  getCurrentUser: getCurrentUserURL,
  getStudents: getStudentsURL,
  addStudent: addStudentURL,
  getClasses: getClassesURL,
  addClass: addClassURL,
  getTeachers: getTeachersURL,
  getTeachersByClass: getTeachersByClass
};