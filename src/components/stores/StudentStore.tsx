import {action, makeObservable, observable} from 'mobx';
import { Student } from '../Interfaces'

export class StudentStore {

    
    grades = ["1", "2", "3", "4", "5", "6", "7"]
    classLetters = ["A", "B", "C", "D", "E", "F"]
    student : { 
        id: string; 
        name: string; 
        school: string;
        grade: string; 
        testdate: Date | undefined;
        motion_test: {score: string, date: Date}[] | undefined; 
        fixed_form_test: {score: string, date: Date}[] | undefined; 
        random_form_test: {score: string, date: Date}[] | undefined; 
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