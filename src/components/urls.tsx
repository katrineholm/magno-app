/* base url */
const baseURL = 'http://localhost:5000';

/* Login post, get, update */
export const loginURL = `${baseURL}/login`;

/* Logout post */
export const logoutURL = `${baseURL}/logout`;

/* Account post, get, update */
export const accountURL = `${baseURL}/account`;

/* Authenticate post */
export const authenticateURL = `${baseURL}/authenticate`;

export default {
  account: accountURL,
  login: loginURL,
  logout: logoutURL,
  authenticate: authenticateURL,
};