export interface Student {
    id: string;
    name: string;
    school: string;
    grade: string;
    testdate: Date;
    tests: {[key: string]: Array<{score: string, date: Date}[] | undefined>};
    information: any;
    risk: string;
}

export interface Class {
    id: string,
    name: string,
    school: string, 
    teacher: string[],
}
//mulig denne fjernes:
export interface Teacher {
    name: string, 
    id: string
}

export interface RiskType {
    high: "Høy",
    medium: "Middels",
    low: "Lav"
}
  
export interface Data {
    id: string;
    name: string;
    grade: string;
    testdate: Date | string;
    motion_test: string;
    fixed_form_test: string;
    random_form_test: string;
    risk: RiskType;
}