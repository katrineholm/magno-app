import Translation from "../Translation";

export const translationNO: Translation = {
    home: {
        title: "Velkommen, ",
        headerTest: "Start en test",
        textTest: "Lar deg velge og starte forskjellige tester.",
        buttonTextTest: "Se og start tester",
        headerStudents: "Elevoversikt",
        textStudents: "Se en oversikt over elevene dine og " +
            "resultatene deres, eller legg til eller fjern elever fra oversikten.",
        buttonTextStudents: "Se oversikt over elever",
        headerLastResults: "Siste resultater",
        textLastResults: "Se resultatene fra de siste testene som har blitt gjennomført.",
        buttonTextLastResults: "Se nye resultater",
        headerClasses: "Klasseoversikt",
        textClasses: "Se en oversikt over dine klasser",
        buttonTextClasses: "Se oversikt over klasser"
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
        errorMessage: "Emailen eksisterer allerede",
        emailErrorMessage: 'Epostadressen inneholder feil',
        schoolErrorMessage: 'Du må velge en skole',
        nameErrorMessage: 'Du må skrive inn navn',
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
        title: "Velkommen til Magno",
        subheader: "Informasjon om hvordan applikasjonen og testene fungerer",
        introduction: "Magno er en applikasjon utviklet for å hjelpe lærere og " +
            "spesialpedagoger med å oppdage dysleksi hos elever i grunnskolen. " +
            "Applikasjonen inneholder screeningtester som måler elevens evne til å " +
            "prosessere visuelle mønstre. Ingen av testene krever leseferdigheter, " +
            "og kan gjennomføres med barn allerede før de har lært å lese. På denne " +
            "siden vil du finne informasjon om applikasjonen og dens screeningtester, " +
            "samt informasjon om forskningen de bygger på.",
        testTitle: "Om testene",
        testText: "Magno inneholder tre tester som sammen kan gi en indikasjon på om eleven har dysleksi. " +
            "“Motion Test”, eller bevegelsestesten, måler elevens evne til å oppfatte ikke-tilfeldig bevegelse " +
            "i en animasjon av bevegende prikker. En elev med dysleksi vil oppnå et dårlig resultat på bevegelsestesten. " +
            "Formtestene, bestående av “Form Fixed Test” og “Form Random Test”, måler elevens evne til å oppfatte mønster " +
            "i statiske bilder. Disse testene er kontrolltester som sikrer at eleven ikke har synsutfordringer som kan påvirke " +
            "resultatet på bevegelestesten. På denne måten kan Magno gi en vurdering av elevens risiko for dysleksi. ",
        firstPoint: "1. Det er forventet at en elev uten dysleksi og uten andre synsproblemer vil score lavt på alle testene. ",
        secondPoint: "2. Det er forventet at en elev med dysleksi og uten andre synsproblemer vil score middels/høyt på " +
            "Motion Test, men lavt på Form Fixed Test og Form Random Test. ",
        thirdPoint: "3. Det er forventet at en elev med andre synsproblemer vil score middels/høyt på alle testene.",
        applicationTitle: "Om applikasjonen",
        applicationText: "Applikasjonen er et screeningverktøy for lærere og spesialpedagoger på grunnskolen. " +
            "Den kan brukes til å gjennomføre screeningtestene klassevis eller på enkeltelever du ønsker å teste. " +
            "Testene tar liten tid å gjennomføre og kan tas i klasserommet. I tillegg til screeningtestene, " +
            "inneholder Magno en elevoversikt og klasseoversikt for å enkelt holde styr på resultatene til dine elever. " +
            "Administratorrettigheter gis til avdelingsleder, spesialpedagogisk rådgiver, eller den som er ansvarlig for " +
            "aktiviteter knyttet til diagnostisering av dysleksi på din skole. Personen(e) med denne rollen har tilgang til " +
            "alle elever på skolen og deres resultater. Med administratorrettighetene får man også tilgang til funksjoner " +
            "som lar en administrere klasser og tilganger for lærerne på skolen. Lærere vil bli registrert som vanlige brukere, " +
            "og har tilgang til elevene og resultatene tilhørende de klassene læreren er ansvarlig for. " +
            "Læreren kan bruke applikasjonen til å gjennomføre screeningtestene med sine elevene, " +
            "samt legge inn annen informasjon om eleven som kan være relevant i prosessen for å avdekke dysleksi. ",
        researchTitle: "Forskning og den magnocellulære teorien",
        researchTestTitle: "Forskning relatert til testene",
        researchTestText: "Testene som brukes i denne applikasjonen er basert på forskning gjort av Egset et al. i 2019, " +
            "der formålet var å undersøke forskjeller i visuell prosessering mellom ulike nivåer av lesekompetanse. Testgruppen besto av " +
            "186 unge voksne med en gjennomsnittsalder på 24,7 år, som alle gjennomførte en ordkjedetest for å måle ferdigheter " +
            "i ordavkoding. Basert på resultatene ble to grupper valgt, en med høy lesekompetanse (HRC) og en med lav " +
            "lesekompetanse (LRC), som videre deltok i forskningsprosjektet. Deltakerne utførte bevegelses- og formtestene. " +
            "Resultatene viste at LRC-gruppen scorte lavere på bevegelsestesten enn HRC-gruppen, noe som indikerer lavere ferdighet til " +
            "å oppdage bestemte mønstre hos voksne med lav lesekompetanse. Det var imidlertid ingen betydelig forskjell mellom " +
            "gruppene i resultatene av formtestene.",
        magnoTheoryTitle: "Den visuelle magnocellulære teorien",
        magnoTheoryText1: "Det finnes flere teorier som forklarer de mulige biologiske og kognitive årsakene til dysleksi." +
            " Teorien Magno baserer seg på kalles for den visuelle magnocellulære teorien.",
        magnoTheoryText2: "Teorien forklarer at dysleksi kan skyldes svekkelse i prosesseringen av visuell informasjon, som" +
            "er en viktig del av prosessen med å lære å lese. Disse ferdighetene er avhengige av det visuelle systemet i hjernen," +
            "som på et biologisk nivå kan deles inn i to distinkte baner: den magnocellulære og den parvocellulære banen.",
        magnoTheoryText3: "Banene har forskjellige roller og egenskaper. Den magnocellulære (M) banen består av store nevroner," +
            "som er spesialiserte på å oppdage hurtigbevegelig visuell stimuli, mens den parvocellulære (P) banen er ansvarlig for" +
            "oppdage detaljer og farger.",
        magnoTheoryText4: "Enkelte dyslektikere kan oppleve selektiv svekkelse i den magnocellulære banen, som kan resultere i" +
            "mangler i visuell bearbeiding. Flere studier støtter teorien ved å vise at M-nevronene i den dyslektiske hjernen er mindre" +
            "i størrelse, og tilsynelatende mindre organisert sammenliknet med en ikke-dyslektisk hjerne. Det er verdt å merke seg" +
            "at denne svekkelsen ikke er utbredt hos alle personer med dysleksi, og at graden av svekkelse kan variere.",
        effectTitle: "Effekten av tidlig oppdagelse",
        effectText1: "I boken ‘How the brain learns to read’ presenterer Sousa de tre stadiene et barn går gjennom i prosessen med å lære å lese:",
        effectPoint1: "1. Bildestadiet, hvor hjernen fotograferer og gjenkjenner ord og bokstaver, og tilpasser seg visuelt til" +
            "bokstavformen. Dette skjer vanligvis i siste del av barnehageperioden.",
        effectPoint2: "2. Det fonologiske stadiet, hvor barnet begynner å utvikle sin fonologiske bevissthet, som gjør at hjernen" +
            "kan kode bokstaver til individuelle lyder (fonem). Dette inkluderer også evnen til å isolere fonemer for å danne nye ord.",
        effectPoint3: "3. Det ortografiske stadiet, hvor barnet kan gjenkjenne ord nøyaktig og raskt.",
        effectText2: "Barn som er i faresonen for å utvikle dysleksi, kan identifiseres allerede i bildestadiet. Imidlertid" +
            "er flere screening- og diagnoseverktøy basert på leseferdigheter, og en diagnose av dysleksi kan ikke stilles før barnet" +
            "forventes å ha nådd et visst nivå. Normalt settes en diagnose tidligst i 2.klasse. ",
        effectText3: "Selv om dysleksi er biologisk, er forskere enige om at miljøfaktorer kan forme og forbedre risikoen for" +
            "vanskelighetene som dysleksi medfører. Faktisk kan vanskelighetene forbygges hos mange barn ved tidlig deteksjon og" +
            "intervensjon. En mye sitert studie av Foorman et al. i 1997 viser at effekten av intervensjon avtar med barnets" +
            "alder. Mer spesifikt er effekten av intervensjon omtrent 80% når det skjer i første eller andre klasse, og 10-15% når det" +
            "skjer i femte klasse eller senere. Disse tallene viser de betydelige konsekvensene av sen oppdagelse. Det anbefales" +
            "derfor å starte screening for dysleksi i tidlig alder, samt gi nødvendig oppfølging og støtte i elevens leseferdigheter.",
        bibliografyTitle: "Kilder",
        lastUpdated: "Sist oppdatert: 6.mai 2023",
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
        errorMessage: "Eleven finnes allerede",
        successMessage: " ble lagt til",
    },
    classFormDialog: {
        title: "Legg til en ny klasse",
        labelGrade: "Trinn",
        labelClassLetter: "Klasse",
        labelTeacher: "Ansvarlig lærer",
        buttonLabel: "Legg til klasse",
        errorMessage: "Klassen finnes allerede",
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
        testsDocumentTitle: "Magno brukermanual: Hvordan gjennomføre screeningtestene med din elev",
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
        formFixedPointsIntro: "Før testen begynner skal dere gjennom opplæring. Under denne er det viktig at du informerer eleven muntlig om hvordan testen vil fungere. I opplæringen kan " +
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
        studentsDocumentTitle: "Magno brukermanual: Hvordan bruke elevoversikten",
        studentsIntro: "Under Dine elever får du en oversikt over elevene dine, testene de har gjennomført og elevenes beregnede risiko for dysleksi.  " +
            'Du kan legge til elever i oversikten ved å bruke knappen “Legg til elev”.  Deretter fyller du ut elevens navn og hvilken klasse hen tilhører.',
        studentsSecond: "Ved å klikke på en av elevene i oversikten, vil du komme til en side som inneholder informasjon om eleven og dens testresultater." +
            "Øverst på siden vil du se elevens risikonivå for dysleksi, " +
            "som er beregnet ut fra Motion Test-resultatene dersom eleven har gjennomført screeningtesten. Risikonivået kan være høyt, lavt eller middels. ",
        studentsThird: "På denne siden vil du også se to faner. “Testresultater” inneholder en mer detaljert visualiering av testresultatene til de testene eleven har gjennomført. " +
            "Stolpediagrammet viser elevens score og datoen testen ble utført.",
        studentsFourth: "Resultatet på Motion Test er det som kan gi deg en indikasjon på om eleven har risiko for dysleksi. En høy score indikerer en høy risiko for dysleksi, " +
            "mens en lavere score indikerer en lavere risiko. Du kan lese mer om hva resultatene på de forskjellige testene betyr i brukermanualen.",
        studentsFifth: "Under Annen informasjon vil du finne informasjon om eleven som vil være relevant i din totalvurdering av elevens risiko for dysleksi. Her kan du legge inn og " +
            "redigere dataen, samt legge legge inn egne kommentarer.",

        classOverview: "Dine klasser",
        classesSubHeader: "Hvordan bruke klasseoversikten",
        classesDocumentTitle: "Magno brukermanual: Hvordan bruke klasseoversikten",
        classesDescriptionTeacher: "I dine klasser finner du en oversikt over klassene du er ansvarlig for. Klikker du på en klasse vil du se en oversikt over elevene i den respektive klassen.",
        classesDescriptionAdmin: "I dine klasser finner du en oversikt over klassene du er ansvarlig for. Klikker du på en klasse vil du se en oversikt over elevene i den respektive klassen. " +
            "I tillegg vil du se hvilke lærere som er ansvarlige for klassen, og som dermed har tilgang til elevene. Du kan administrere tilgangen til lærere ved å bruke redigeringsknappen. " +
            "Ved å gi en lærer tilgang til klassen gir du hen tilgang til alle elevene og deres testresultater og annen informasjon. Tilgang skal ikke gis til lærere som ikke trenger dette. "

    },
    admin: "ADMIN"
}