import {action, makeObservable, observable} from 'mobx';

export class UserStore{
    loginStatus = false;
    userEmail = "";
    userName = "";
    school = "";
    
    constructor(){
      makeObservable(this, {
        loginStatus: observable,
        setLoginStatus: action,
        userEmail: observable,
        userName: observable,
        school: observable,
        setUserEmail: action,
        setUserName: action,
        setSchool: action,
      })
    }

    setLoginStatus(loginStatus: boolean) {
      this.loginStatus = loginStatus;
    }

    setUserEmail(userEmail: string) {
        this.userEmail = userEmail;
    }

    setUserName(userName: string) {
        this.userName = userName;
    }

    setSchool(school: string){
      this.school = school;
    }
}