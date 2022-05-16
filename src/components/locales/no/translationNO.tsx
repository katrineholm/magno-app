import Translation from "../Translation";

export const translationNO: Translation = {
    home:{
        title: "Velkommen, ",
        headerTest: "Start en test",
        textTest: "Lar deg velge og starte forskjellige tester.",
        buttonTextTest: "Se og start tester",
        headerStudents: "Elevoversikt",
        textStudents: "Se en oversikt over elevene ved skolen din og " +
        "resultatene deres, eller legg til eller fjern elever fra oversikten.",
        buttonTextStudents: "Se oversikt over elever",
        headerLastResults: "Siste resultater",
        textLastResults: "Se resultatene fra de siste testene som har blitt gjennomført.",
        buttonTextLastResults: "Se nye resultater",
    },
    login: {
        title: "Logg på for å fortsette til Magno",
        labelEmail: "Epost",
        labelPassword: "Passord",
        labelSubmit: "Logg inn",
        loginErrorMessage: "Epost eller passord stemmer ikke",
        link: "Opprett konto",
    },
    register: {
        title: "Opprett en konto for Magno",
        labelEmail: "Epost adresse",
        labelPassword: "Passord",
        labelSchool: "Velg skole",
        labelSubmit: "Registrer",
        successMessage: "Kontoen har blitt opprettet",
        errorMessage: "Kontoen eksisterer allerede",
        emailErrorMessage: 'Epostadressen inneholder feil',
        schoolErrorMessage: 'Du må velge en skole',
        passwordErrorMessage: 'Passordet er for kort, det må inneholde minst 8 tegn',
        link: "Har du allerede en konto? Logg inn",
    },
    student: {
        riskLow: "Testene indikerer at det er en lav risiko for at eleven kan ha dysleksi.",
        riskMedium: "Testene indikerer at det er en middels risiko for at eleven kan ha dysleksi. " +
        "Det anbefales å sende eleven videre til utredning.",
        riskHigh: "Testene indikerer at det er en høy risiko for at eleven kan ha dysleksi. " + 
        "Det anbefales å sende eleven videre til utredning.",
        riskNone: "Det er ikke gjennomført noen tester med denne eleven enda.",
    },
    students: {
        addStudentButtonText: "Legg til elev",
        searchFieldLabel: "Søk",
    },
    tests: {
        headerMotion: "Motion Test",
        textMotion: "Magno bevegelsestest er en test som måler risikoen for dysleksi",
        headerFixed: "Form Fixed Test",
        textFixed: "Magno fiksertformtest er en kontrolltest som sjekker om eleven har problemer med synet som ikke skyldes dysleksi",
        headerRandom: "Form Random Test",
        textRandom: "Magno tilfeldigformtest er en kontrolltest som sjekker om eleven har problemer med synet som ikke skyldes dysleksi",
        buttonText: "Start test",
    },
    testFormDialog:{
        title: "Velg elev",
        subtitle: "Velg en elev som skal utføre",
        searchFieldLabel: "Velg en elev",
        buttonLabel: "Start test",
    },
    studentFormDialog:{
        title: "Legg til ny elev i oversikten",
        labelFirstName: "fornavn",
        labelLastName: "etternavn",
        labelClass: "Klasse",
        labelGrade: "Trinn",
        buttonLabel: "Legg til elev",
        errorMessage: "En ukjent feil oppsto",
        successMessage: " ble lagt til",
    },
    chart:{
        averageLabel: "Gjennomsnitt",
    },
    localeDateString: 'nb-NO',
    risk:{
        high: "Høy",
        medium: "Middels",
        low: "Lav",
    },
    studentTable:{
        labels: {
            name: "Navn",
            grade: "Klasse",
            testdate: "Test Dato",
            motion_test: "Motion Test",
            fixed_form_test: "Form Fixed Test",
            random_form_test: "Form Random Test",
            risk: "Risiko",
        },
    },
}