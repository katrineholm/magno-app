export interface Student {
    id: string;
    name: string;
    school: string;
    grade: string;
    testdate: Date;
    tests: {[key: string]: Array<{score: string, date: Date}[] | undefined>};
    risk: string;
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