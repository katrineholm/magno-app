import {action, makeObservable, observable} from 'mobx';

export class StudentStore {

    grades = ["1", "2", "3", "4", "5", "6", "7"]
    classLetters = ["A", "B", "C", "D", "E", "F"]
    student : { 
        id: string; 
        name: string; 
        grade: string; 
        testdate: Date; 
        motion_test: string[] | undefined; 
        fixed_form_test: string[] | undefined; 
        random_form_test: string[] | undefined; 
        risk: string; 
    } | undefined = undefined;

    studentList = [
        {
            id: "1",
            name: "Amanda Andersen",
            grade: "3A",
            testdate: new Date("2022-01-19"),
            motion_test: ["19"],
            fixed_form_test: ["17"],
            random_form_test: ["12"],
            risk: "Lav"
        },
        {
            id: "2",
            name: "Bernt Barsen",
            grade: "2B",
            testdate: new Date("2022-02-17"),
            motion_test: ["63"],
            fixed_form_test: ["36"],
            random_form_test: ["79"],
            risk: "Høy"
        },
        {
            id: "3",
            name: "Carl Christiansen",
            grade: "4B",
            testdate: new Date("2022-01-16"),
            motion_test: ["27"],
            fixed_form_test: ["23"],
            random_form_test: ["28"],
            risk: "Middels"
        },
        {
            id: "4",
            name: "David Damas",
            grade: "4A",
            testdate: new Date("2022-02-17"),
            motion_test: undefined,
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Lav"
        },
        {
            id: "5",
            name: "Erik Erntsson",
            grade: "4A",
            testdate: new Date("2022-02-17"),
            motion_test: ["63"],
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Høy"
        },
        {
            id: "6",
            name: "Ida Inge",
            grade: "3A",
            testdate: new Date("2022-02-13"),
            motion_test: ["18"],
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Lav"
        },
        {
            id: "7",
            name: "Joar Mande",
            grade: "5B",
            testdate: new Date("2022-02-19"),
            motion_test: ["33"],
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Middels"
        },
        {
            id: "8",
            name: "Olav Prang",
            grade: "2A",
            testdate: new Date("2022-02-19"),
            motion_test: undefined,
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Lav"
        },
        {
            id: "9",
            name: "Amanda Andersen",
            grade: "3A",
            testdate: new Date("2022-01-19"),
            motion_test: ["19"],
            fixed_form_test: ["17"],
            random_form_test: ["12"],
            risk: "Lav"
        },
        {
            id: "10",
            name: "Bernt Barsen",
            grade: "2B",
            testdate: new Date("2022-02-17"),
            motion_test: ["63"],
            fixed_form_test: ["36"],
            random_form_test: ["79"],
            risk: "Høy"
        },
        {
            id: "11",
            name: "Carl Christiansen",
            grade: "4B",
            testdate: new Date("2022-01-16"),
            motion_test: ["27"],
            fixed_form_test: ["23"],
            random_form_test: ["28"],
            risk: "Middels"
        },
        {
            id: "12",
            name: "David Damas",
            grade: "4A",
            testdate: new Date("2022-02-17"),
            motion_test: undefined,
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Lav"
        },
        {
            id: "13",
            name: "Erik Erntsson",
            grade: "4A",
            testdate: new Date("2022-02-17"),
            motion_test: ["63"],
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Høy"
        },
        {
            id: "14",
            name: "Ida Inge",
            grade: "3A",
            testdate: new Date("2022-02-13"),
            motion_test: ["18"],
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Lav"
        },
        {
            id: "15",
            name: "Joar Mande",
            grade: "5B",
            testdate: new Date("2022-02-19"),
            motion_test: ["33"],
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Middels"
        },
        {
            id: "16",
            name: "Olav Prang",
            grade: "2A",
            testdate: new Date("2022-02-19"),
            motion_test: undefined,
            fixed_form_test: undefined,
            random_form_test: undefined,
            risk: "Lav"
        },
    ];

    setStudent(studentID: string){
        this.student = this.studentList.find(student => student.id === studentID)
    }

    constructor(){
        makeObservable(this, {
          grades: observable,
          classLetters: observable,
          studentList: observable,
          student: observable,
          setStudent: action,
        })
      }

}