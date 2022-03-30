import {action, makeObservable, observable} from 'mobx';

export class UserStore{
    loginStatus = false;
    user_email = "";
    user_name = "";
    
    constructor(){

    }
    initUserStore = () =>{
        const loginStatus = false;
        this.view = "";
        this.role = "";
        this.ronin = "";
        this.metamask = "";
        this.viewState = "";
        this.pageState = "";
        this.email = "";
      }
}