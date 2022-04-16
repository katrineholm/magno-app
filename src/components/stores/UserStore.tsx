import {action, makeObservable, observable} from 'mobx';

export class UserStore{
    loginStatus = false;
    userEmail = "";
    userName = "";
    
    constructor(){
      makeObservable(this, {
        loginStatus: observable,
        setLoginStatus: action,
        userEmail: observable,
        userName: observable,
        setUserEmail: action,
        setUserName: action,
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
}