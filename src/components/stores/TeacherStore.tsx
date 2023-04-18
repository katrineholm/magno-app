import { action, makeObservable, observable } from 'mobx';
import { Teacher } from '../Interfaces';

export class TeacherStore {
    
    teacher : { 
        name: string; 
        id: string;
    } | undefined;

    teacherList : Array<Teacher> | undefined = [];

    setTeacherList(teachers: Array<Teacher>| undefined){
        this.teacherList = teachers;
    }

    constructor(){
        makeObservable(this, {
          teacherList: observable,
          setTeacherList: action
        })
    }
}