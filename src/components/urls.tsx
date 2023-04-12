

/* base url */
const baseURL = process.env.REACT_APP_API_URL;

/* Log in */
export const newloginURL = `${baseURL}/new-login`;

/* Register user */
export const newAccountURL = `${baseURL}/new-create-user`;

/* Get current user */
export const getCurrentUserURL = `${baseURL}/new-get-current-user` // denne burde oppdateres:)

/* Get students */
export const newGetStudentsURL = `${baseURL}/new-get-students`;

/* Add newstudent post */
export const newAddStudentURL = `${baseURL}/new-add-student`;

export const newGetClassesURL = `${baseURL}/new-get-classes`;

/** Add class  */
export const addClassURL = `${baseURL}/addClass`;

/** Get teachers  */
export const getTeachersURL = `${baseURL}/getTeachers`;


export default {
  newAccount: newAccountURL,
  newLogin: newloginURL,
  getCurrentUser: getCurrentUserURL,
  newGetStudents: newGetStudentsURL,
  newAddStudent: newAddStudentURL,
  newGetClasses: newGetClassesURL,
  addClass: addClassURL,
  getTeachers: getTeachersURL
};