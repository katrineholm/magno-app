export default interface Translation {
    home: {
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
        labelName: string,
        labelPassword: string,
        labelSchool: string,
        labelRole: string,
        labelSubmit: string,
        successMessage: string,
        errorMessage: string,
        emailErrorMessage: string,
        schoolErrorMessage: string,
        nameErrorMessage: string,
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
        title: string,
        subheader: string,
        introduction: string,
        testTitle: string,
        testText: string,
        firstPoint: string,
        secondPoint: string,
        thirdPoint: string,
        applicationTitle: string,
        applicationText: string,
        researchTitle: string,
        researchTestTitle: string,
        researchTestText: string,
        magnoTheoryTitle: string,
        magnoTheoryText1: string,
        magnoTheoryText2: string,
        magnoTheoryText3: string,
        magnoTheoryText4: string,
        effectTitle: string,
        effectText1: string,
        effectPoint1: string,
        effectPoint2: string,
        effectPoint3: string,
        effectText2: string,
        effectText3: string,
        bibliografyTitle: string,

    },
    testFormDialog: {
        title: string,
        subtitle: string,
        searchFieldLabel: string,
        buttonLabel: string
    },
    studentFormDialog: {
        title: string,
        labelFirstName: string,
        labelLastName: string,
        labelGrade: string,
        buttonLabel: string,
        errorMessage: string,
        successMessage: string,
    },
    classFormDialog: {
        title: string,
        labelGrade: string,
        labelClassLetter: string,
        labelTeacher: string,
        buttonLabel: string,
        errorMessage: string,
        successMessage: string,
    },
    teacherFormDialog: {
        title: string,
        titleAdd: string,
        labelTeachers: string,
        labelNewTeacher: string,
        buttonLabel: string,
        errorMessage: string,
        successMessage: string,
        alertTitle: string,
        areYouSure1: string,
        areYouSure2: string,
        cancel: string,
        confirm: string
    },
    chart: {
        averageLabel: string,
    },
    localeDateString: string,
    risk: {
        high: string,
        medium: string,
        low: string,
    },
    studentTable: {
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
    userManual: {
        printButton: string,
        tests: string,
        testsSubHeader: string,
        testText: string,
        testPoint1: string,
        testPoint2: string,
        testPoint3: string,
        motionTest: string
        motionSummary: string,
        motionDescription: string,
        motionPointsIntro: string,
        motionPoint1: string,
        motionPoint2: string,
        motionPoint3: string,
        motionPoint4: string,

        formFixedTest: string,
        formFixedDescription: string,
        formFixedPointsIntro: string,
        formFixedPoint1: string,
        formFixedPoint2: string,
        formFixedPoint3: string,
        formFixedPoint4: string,

        formRandomTest: string,
        formRandomDescription: string,

        students: string,
        studentsSubHeader: string,
        studentsDescription: string,

        classOverview: string,
        classesSubHeader: string,
        classesDescription: string,



    }
}