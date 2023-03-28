import { action, makeObservable, observable } from 'mobx';

export class UserStore {
  loginStatus = false;
  userEmail = "";
  school = "";
  role = "";
//SPM: bør role være string eller static variable? typ undefined?
  constructor() {
    makeObservable(this, {
      loginStatus: observable,
      setLoginStatus: action,
      userEmail: observable,
      school: observable,
      setUserEmail: action,
      setSchool: action,
      role: observable,
      setRole: action,
    })
  }

  setLoginStatus(loginStatus: boolean) {
    this.loginStatus = loginStatus;
  }

  setUserEmail(userEmail: string) {
    this.userEmail = userEmail;
  }

  setSchool(school: string) {
    this.school = school;
  }

  setRole(role: string) {
    this.role = role;
  }
}