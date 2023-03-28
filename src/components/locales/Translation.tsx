export default interface Translation {
    home:{
        title: string,
        headerTest: string,
        textTest: string,
        buttonTextTest: string,
        headerStudents: string,
        textStudents: string,
        buttonTextStudents: string,
        headerLastResults: string,
        textLastResults: string,
        buttonTextLastResults: string,
        headerClasses: string,
        textClasses: string
    },
    login: {
        title: string,
        labelEmail: string,
        labelPassword: string,
        labelSubmit: string,
        loginErrorMessage: string,
        link: string,
    },
    register: {
        title: string,
        labelEmail: string,
        labelPassword: string,
        labelSchool: string,
        labelRole: string,
        labelSubmit: string,
        successMessage: string,
        errorMessage: string,
        emailErrorMessage: string,
        roleErrorMessage: string,
        schoolErrorMessage: string,
        passwordErrorMessage: string,
        link: string,
    },
    student: {
        riskLow: string,
        riskMedium: string,
        riskHigh: string,
        riskNone: string,
    },
    students: {
        addStudentButtonText: string,
        searchFieldLabel: string,
    },
    classes: {
        addClassButtonText: string,
        searchFieldLabel: string
    },
    tests: {
        headerMotion: string,
        textMotion: string,
        headerFixed: string,
        textFixed: string,
        headerRandom: string,
        textRandom: string,
        buttonText: string,
        tooltip: string,
    },
    information: {
        subheader: string,
        motionText: string,
        formText: string,
        firstPoint: string,
        secondPoint: string,
        thirdPoint: string,
    },
    testFormDialog:{
        title: string,
        subtitle: string,
        searchFieldLabel: string,
        buttonLabel: string
    },
    studentFormDialog:{
        title: string,
        labelFirstName: string,
        labelLastName: string,
        labelClass: string,
        labelGrade: string,
        buttonLabel: string,
        errorMessage: string,
        successMessage: string,
    },
    classFormDialog:{
        title: string,
        labelGrade: string,
        labelClassLetter: string,
        labelTeacher: string,
        buttonLabel: string,
        errorMessage: string,
        successMessage: string,
    },
    chart:{
        averageLabel: string,
    },
    localeDateString: string,
    risk:{
        high: string,
        medium: string,
        low: string,
    },
    studentTable:{
        labels: {
            name: string,
            grade: string,
            testdate: string,
            motion_test: string,
            fixed_form_test: string,
            random_form_test: string,
            risk: string,
        },
    },
}