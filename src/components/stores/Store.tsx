import { makeObservable, observable  } from "mobx"
import { StudentStore } from "./StudentStore"
import { UserStore } from "./UserStore";

export class Store {

    studentStore = new StudentStore();
    userStore = new UserStore();

    constructor(){
        makeObservable(this, {
            studentStore: observable,
            userStore: observable,
        })
    }
}