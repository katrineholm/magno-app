

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

/* Get students */
export const updateStudentInformationURL = `${baseURL}/update-student-information`;

/* Add newstudent post */
export const addStudentURL = `${baseURL}/add-student`;

export const getClassesURL = `${baseURL}/get-classes`;

/** Add class  */
export const addClassURL = `${baseURL}/create-class`;

/** Get teachers  */
export const getTeachersURL = `${baseURL}/getTeachers`;

/** Get teachers by class */
export const getTeachersByClassURL =  `${baseURL}/getTeachersByClass`;

/** Remove teacher from class */
export const removeTeacherFromClassURL = `${baseURL}/remove-teacher-from-class`;

/**Assign a teacher to a class */
export const assignTeacherToClassURL = `${baseURL}/assign-teacher-to-class`;


export default {
  account: accountURL,
  login: loginURL,
  getCurrentUser: getCurrentUserURL,
  getStudents: getStudentsURL,
  addStudent: addStudentURL,
  updateStudentInformation: updateStudentInformationURL,
  getClasses: getClassesURL,
  addClass: addClassURL,
  getTeachers: getTeachersURL,
  getTeachersByClass: getTeachersByClassURL,
  removeTeacherFromClass: removeTeacherFromClassURL,
  assignTeacherToClass: assignTeacherToClassURL
};