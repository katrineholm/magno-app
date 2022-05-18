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
        textMotion: "Magno bevegelsestest er en test som gir en indikasjon på sannsynligheten for at eleven har dysleksi",
        headerFixed: "Form Fixed Test",
        textFixed: "Magno fiksertformtest er en kontrolltest som sjekker om eleven har problemer med synet som ikke skyldes dysleksi",
        headerRandom: "Form Random Test",
        textRandom: "Magno tilfeldigformtest er en kontrolltest som sjekker om eleven har problemer med synet som ikke skyldes dysleksi",
        buttonText: "Start test",
        tooltip: "Starter en test, du får opp et valg av elev før testen starter",
    },
    information: {
        subheader: "Informasjon om hvordan testene fungerer",
        motionText: "De tre testene som ligger i systemet er designet for å bli brukt sammen for å teste en elev. Bevegelsestesten " +  
        "måler eleven sin sensitivitet i forhold til bevegelser, da studier har gitt indikasjoner på " +
        "at dyslektikere sin synssensitivitet for bevegelser er svakere enn gjennomsnittet. Dette fører til at de kan ha behov for " + 
        "større bevegelser for å oppfatte et mønster. Dette er det bevegelsestesten er designet for å måle, ved å gradvis få flere " + 
        "prikker til å bevege seg i et mønster, eller gradvis få flere prikker til å bevege seg tilfeldig. Testen justerer " + 
        "vanskelighetsgrad utifra svarene til eleven.",
        formText: "De to neste testene, henholdsvis Form Fixed Test og Form Random Test måler eleven sin synssensitivitet i forhold " + 
        "til statiske objekter. Og evnen til å gjenkjenne mønster uten bevegelse. Disse testene brukes som kontrolltester, for å sjekke "+ 
        "om eleven sitt problem kan skyldes synsproblemer eller andre problemer som ikke er relatert til dysleksi. " +
        "De statiske testene skaper et mønster hvor det er flere streker som former en sirkel, enten midt i testruten, " + 
        "eller på et tilfeldig plassert sted i testruten. Testene justerer vanskelighetsgrad utifra svarene til eleven.",
        firstPoint: "1. Det er forventet at en elev uten dysleksi og uten andre synsproblemer vil score lavt på alle testene.",
        secondPoint: "2. Det er forventet at en elev med dysleksi og uten andre synsproblemer vil score middels/høyt på " + 
        "Motion Test, men lavt på Form Fixed Test og Form Random Test.",
        thirdPoint: "3. Det er forventet at en elev med andre synsproblemer vil score middels/høyt på alle testene.",
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