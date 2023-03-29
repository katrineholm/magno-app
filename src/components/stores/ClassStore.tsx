import {action, makeObservable, observable} from 'mobx';
import { Class } from '../Interfaces'
import { grades, classLetters } from '../Settings';

export class ClassStore {

    grades = grades;
    classLetters = classLetters;
    
    class : { 
        id: string; 
        name: string; 
        school: string;
        teacherId: string;
    } | undefined;

    classList : Array<Class> | undefined = [];

    setClass(classID: string){
        if (this.classList !== undefined){
            this.class = this.classList.find(el => el.id === classID)    
        }
    }

    setClassList(classes: Array<Class>| undefined){
        this.classList = classes;
        console.log("setClassList: ", classes);
    }

    constructor(){
        makeObservable(this, {
          classList: observable,
          class: observable,
          setClass: action,
          setClassList: action
        })
    }
}