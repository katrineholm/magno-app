import {action, makeObservable, observable} from 'mobx';
import { Student } from '../Interfaces'
import { grades, classLetters, riskAverages } from '../Settings';

export class StudentStore {
    
    grades = grades;
    classLetters = classLetters;
    riskAverages = riskAverages;
    
    student : { 
        id: string; 
        name: string; 
        school: string;
        grade: string; 
        testdate: Date | undefined;
        tests: {[key: string]: Array<{score: string, date: Date}[] | undefined>};
        risk: string; 
    } | undefined;

    studentList : Array<Student> | undefined = [];

    setStudent(studentID: string){
        if (this.studentList !== undefined){
            this.student = this.studentList.find(student => student.id === studentID)    
        }
    }

    setStudentList(students: Array<Student>| undefined){
        this.studentList = students;
    }

    constructor(){
        makeObservable(this, {
          grades: observable,
          classLetters: observable,
          studentList: observable,
          student: observable,
          setStudent: action,
          setStudentList: action
        })
    }
}