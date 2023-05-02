import Translation from "../Translation";

export const translationNO: Translation = {
    home: {
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
        headerClasses: "Dine klasser",
        textClasses: "Her kan du se en oversikt over dine klasser"
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
        labelName: "Navn",
        labelPassword: "Passord",
        labelRole: "Rolle",
        labelSchool: "Velg skole",
        labelSubmit: "Registrer",
        successMessage: "Kontoen har blitt opprettet",
        errorMessage: "Kontoen eksisterer allerede",
        emailErrorMessage: 'Epostadressen inneholder feil',
        roleErrorMessage: 'Du må velge en rolle',
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
    classes: {
        addClassButtonText: "Legg til klasse",
        searchFieldLabel: "Søk"
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
            "til statiske objekter. Og evnen til å gjenkjenne mønster uten bevegelse. Disse testene brukes som kontrolltester, for å sjekke " +
            "om eleven sitt problem kan skyldes synsproblemer eller andre problemer som ikke er relatert til dysleksi. " +
            "De statiske testene skaper et mønster hvor det er flere streker som former en sirkel, enten midt i testruten, " +
            "eller på et tilfeldig plassert sted i testruten. Testene justerer vanskelighetsgrad utifra svarene til eleven.",
        firstPoint: "1. Det er forventet at en elev uten dysleksi og uten andre synsproblemer vil score lavt på alle testene.",
        secondPoint: "2. Det er forventet at en elev med dysleksi og uten andre synsproblemer vil score middels/høyt på " +
            "Motion Test, men lavt på Form Fixed Test og Form Random Test.",
        thirdPoint: "3. Det er forventet at en elev med andre synsproblemer vil score middels/høyt på alle testene.",
    },
    testFormDialog: {
        title: "Velg elev",
        subtitle: "Velg en elev som skal utføre",
        searchFieldLabel: "Velg en elev",
        buttonLabel: "Start test",
    },
    studentFormDialog: {
        title: "Legg til ny elev i oversikten",
        labelFirstName: "Fornavn",
        labelLastName: "Etternavn",
        labelGrade: "Klasse",
        buttonLabel: "Legg til elev",
        errorMessage: "En ukjent feil oppstod",
        successMessage: " ble lagt til",
    },
    classFormDialog: {
        title: "Legg til en ny klasse",
        labelGrade: "Trinn",
        labelClassLetter: "Klasse",
        labelTeacher: "Ansvarlig lærer",
        buttonLabel: "Legg til klasse",
        errorMessage: "En ukjent feil oppstod",
        successMessage: " ble lagt til",
    },
    teacherFormDialog: {
        title: "Lærere som har tilgang til klassen",
        titleAdd: "Legg til lærer",
        labelNewTeacher: "Legg til lærer",
        labelTeachers: "Lærere som har tilgang",
        errorMessage: "En ukjent feil oppstod",
        successMessageDelete: " ble fjernet fra klassen",
        successMessageAdd: "Læreren ble lagt til i klassen",
        buttonLabel: "Legg til lærer",
        alertTitle: "Fjerne lærer fra klassen?",
        areYouSure1: "Er du sikker på at du vil fjerne", 
        areYouSure2: "sin tilgang til klasse",
        cancel: "Avbryt", 
        confirm: "Fortsett"
    },
    chart: {
        averageLabel: "Gjennomsnitt",
    },
    localeDateString: 'nb-NO',
    risk: {
        high: "Høy",
        medium: "Middels",
        low: "Lav",
    },
    studentTable: {
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
    userManual: {
        printButton: "Skriv ut",

        tests: "Tester",
        testsSubHeader: "Hvordan gjennomføre screeningtestene med din elev",
        testText: "Magno inneholder tre tester, og det er viktig at eleven tar alle tre testene for at man skal kunne være sikker på resultatet. Motion Test måler elevens evne " +
        "til å oppfatte bestemt bevegelse. Det er denne testen som måler den visulle prosesseringsevnen til eleven og som kan indikere dysleksi. For å sørge for at eleven ikke " +
        "har noen synsvansker som kan påvirke resultatet, må Form Fixed Test og Formed Random test også gjennomføres. Disse vil avdekke om eleven har synsvansker som har påvirket " +
        "testresultatene. Basert på disse tre testene kan Magno avgjøre om eleven viser tegn på dysleksi.",
        testPoint1: " 1. Det er forventet at en elev uten dysleksi og uten andre synsvansker vil score lavt på alle testene. ",
        testPoint2: "2. Det er forventet at en elev med dysleksi og uten andre synsvansker vil score middels/høyt på Motion Test, men lavt på Form Fixed Test og Form Random Test.",
        testPoint3: " 3. Det er forventet at en elev med andre synsvil score middels/høyt på alle testene.",
        motionTest: "Motion Test",
        motionSummary: "Motion Test tar ca. 8 minutter å gjennomføre. Den går ut på at eleven blir vist to bokser med bevegende prikker, og skal velge den boksen hvor et antall " +
        "av prikkene beveger seg horisontalt.",
        motionDescription: "Før testen begynner vil du bli vist en kort tutorial. Her er det viktig at du informerer eleven muntlig om hvordan testen vil fungere. Eleven vil også " +
        "få mulighet til å prøve seg et par ganger før den ordentlige testen begynner. Her burde du forklare eleven grundig og sørge for at hen forstår hvilken av boksene som er den " +
        "riktige å trykke på. Under tutorialen vil eleven få beskjed om du har valgt riktig boks eller ikke. Merk at denne beskjeden vil man ikke få under gjennomføringen av testen. " +
        "Oppgaven gjentas flere ganger med økende vanskelighetsgrad når eleven velger riktig og minkende vanskelighetsgrad når eleven velger feil. ",
        motionPointsIntro: "I opplæringen bør følgende punkter nevnes og forklares for eleven: ",
        motionPoint1: "Motion Test tar ca. 8 minutter å gjennomføre. ",
        motionPoint2: "Elevens oppgave er å velge boksen der et antall av prikkene beveger seg horisontalt.",
        motionPoint3: "De bevegende prikkene blir vist i 4 sekunder før de forsvinner.",
        motionPoint4: "Eleven velger en boks ved å klikke på den eller ved å benytte venstre og høyre piltast. ",

        formFixedTest: "Form Fixed Test",
        formFixedDescription: "Form Fixed Test tar ca. 8 minutter å gjennomføre. Testen viser to bokser med linjesegmenter notert i ulike retninger. " + 
        "Elevens oppgave er å velge boksen der noen av linjesegmentene danner sirkler, enten midt i boksen. Oppgaven gjentas flere ganger med økende vanskelighetsgrad når eleven " + 
        "velger riktig og minkende vanskelighetsgrad når eleven velger feil.",
        formFixedPointsIntro: "Før testen begynner skal dere gjennom opplæring. Under denne er det viktig at du informerer eleven muntlig om hvordan testen vil fungere. I opplæringen kan "+ 
        "følgende punkter nevnes: ",
        formFixedPoint1: "Form Test tar ca. 8 minutter å gjennomføre.",
        formFixedPoint2: "Elevens oppgave er å velge boksen der strekene danner en sirkel.",
        formFixedPoint3: "Linjesegmentene blir vist i 4 sekunder før de forsvinner. ",
        formFixedPoint4: "Eleven velger en boks ved å trykke på den eller ved å benytte venstre og høyre piltast.",

        formRandomTest: "Form Random Test",
        formRandomDescription: "Form Random Test tar ca. 8 minutter å gjennomføre. Testen fungerer på samme måte som Fixed Form Test. Den eneste forskjellen er at linjesegmentene " + 
        "i Form Random Test danner sirkler på tilfeldig plasserte steder i boksen. Følg samme fremgangsmåte som Form Fixed Test i forrige punkt for å gjennomføre testen. ",

        students: "Dine elever",
        studentsSubHeader: "Hvordan bruke elevoversikten",
        studentsDescription: "Under Dine elever får du en oversikt over testene elevene dine har gjennomført. Du vil i tillegg kunne legge inn relevant " + 
        "informasjon og egne notater, som vil være til hjelp for din totalvurdering av elevens situasjon.",

        classOverview: "Dine klasser",
        classesSubHeader: "Hvordan bruke klasseoversikten",
        classesDescription: "Under Dine klasser finner du en oversikt over klassene du er ansvarlig for. Klikker du på en klasse vil du komme inn på elevoversikt-siden " + 
        "for den respektive klassen."

    }
}