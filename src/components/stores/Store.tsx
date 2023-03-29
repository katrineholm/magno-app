import { makeObservable, observable  } from "mobx"
import { ClassStore } from "./ClassStore";
import { StudentStore } from "./StudentStore"
import { TeacherStore } from "./TeacherStore";
import { UserStore } from "./UserStore";
import { ViewStore } from "./ViewStore";

export class Store {

    studentStore = new StudentStore();
    userStore = new UserStore();
    viewStore = new ViewStore();
    classStore = new ClassStore();
    teacherStore = new TeacherStore();
    
    constructor(){
        makeObservable(this, {
            studentStore: observable,
            userStore: observable,
            classStore: observable,
            teacherStore: observable
        })
    }
}