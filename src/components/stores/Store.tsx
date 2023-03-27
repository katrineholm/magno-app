import { makeObservable, observable  } from "mobx"
import { ClassStore } from "./ClassStore";
import { StudentStore } from "./StudentStore"
import { UserStore } from "./UserStore";
import { ViewStore } from "./ViewStore";

export class Store {

    studentStore = new StudentStore();
    userStore = new UserStore();
    viewStore = new ViewStore();
    classStore = new ClassStore();

    constructor(){
        makeObservable(this, {
            studentStore: observable,
            userStore: observable,
            classStore: observable
        })
    }
}