import {action, makeObservable, observable} from 'mobx';

export class UserStore{
    loginStatus = false;
    userEmail = "";
    school = "";
    
    constructor(){
      makeObservable(this, {
        loginStatus: observable,
        setLoginStatus: action,
        userEmail: observable,
        school: observable,
        setUserEmail: action,
        setSchool: action,
      })
    }

    setLoginStatus(loginStatus: boolean) {
      this.loginStatus = loginStatus;
    }

    setUserEmail(userEmail: string) {
        this.userEmail = userEmail;
    }

    setSchool(school: string){
      this.school = school;
    }
}