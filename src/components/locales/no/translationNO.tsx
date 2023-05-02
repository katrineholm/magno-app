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
        title: "Velkommen til Magno",
        subheader: "Informasjon om hvordan applikasjonen og testene fungerer",
        introduction: "Magno er en applikasjon utviklet for å hjelpe lærere og" +
            "spesialpedagoger med å oppdage dysleksi hos elever i grunnskolen." +
            "Applikasjonen inneholder screeningtester som måler elevens evne til å" +
            "prosessere visuelle mønstre. Ingen av testene krever leseferdigheter," +
            "og kan gjennomføre med barn allerede før de har lært å lese. På denne" +
            "siden vil du finne informasjon om applikasjonen og dens screeningtester," +
            "samt informasjon om forskningen de bygger på.",
        testTitle: "Om testene",
        testText: "Magno inneholder tre tester som sammen kan gi en indikasjon på om eleven har dysleksi." +
            "“Motion Test”, eller bevegelsestesten, måler elevens evne til å oppfatte ikke-tilfeldig bevegelse" +
            "i en animasjon av bevegende prikker. En elev med dysleksi vil oppnå et dårlig resultat på bevegelsestesten." +
            "Formtestene, bestående av “Form Fixed Test” og “Form Random Test”, måler elevens evne til å oppfatte mønster" +
            "i statiske bilder. Disse testene er kontrolltester som sikrer at eleven ikke har synsutfordringer som kan påvirke" +
            "resultatet på bevegelestesten. På denne måten kan Magno gi en vurdering av elevens risiko for dysleksi.",
        firstPoint: "1. Det er forventet at en elev uten dysleksi og uten andre synsproblemer vil score lavt på alle testene.",
        secondPoint: "2. Det er forventet at en elev med dysleksi og uten andre synsproblemer vil score middels/høyt på " +
            "Motion Test, men lavt på Form Fixed Test og Form Random Test.",
        thirdPoint: "3. Det er forventet at en elev med andre synsproblemer vil score middels/høyt på alle testene.",
        applicationTitle: "Om applikasjonen",
        applicationText: "Applikasjonen er screeningverktøy for lærere og spesialpedagoger på grunnskolen." +
            "Den kan brukes til å gjennomføre screeningtestene klassevis eller på enkeltelever du ønsker å teste." +
            "Testene tar liten tid å gjennomføre og kan tas i klasserommet. I tillegg til screeningtestene," +
            "inneholder Magno en elevoversikt og klasseoversikt for å enkelt holde styr på resultatene til dine elever." +
            "Administratorrettigheter gis til avdelingsleder, spesialpedagogisk rådgiver, eller den som er ansvarlig for" +
            "aktiviteter knyttet til diagnostisering av dysleksi på din skole. Personen(e) med denne rollen har tilgang til" +
            "alle elever på skolen og deres resultater. Med administratorrettighetene får man også tilgang til funksjoner" +
            "som lar en administrere klasser og tilganger for lærerne på skolen. Lærere vil bli registrert som vanlige brukere," +
            "og har tilgang til elevene og resultatene tilhørende de klassene læreren er ansvarlig for." +
            "Læreren kan bruke applikasjonen til å gjennomføre screeningtestene med sine elevene," +
            "samt legge inn annen informasjon om eleven som kan være relevant i prosessen for å avdekke dysleksi.",
        researchTitle: "Forskning og den magnocellulære teorien",
        researchTestTitle: "Forskning relatert til testene",
        researchTestText: "Testene som brukes i denne applikasjonen er basert på forskning gjort av Egset et al. i 2019 [1]," +
            "der formålet var å undersøke forskjeller i visuell prosessering mellom ulike nivåer av lesekompetanse. Testgruppen besto av" +
            "186 unge voksne med en gjennomsnittsalder på 24,7 år, som alle gjennomførte en ordkjedetest for å måle ferdigheter" +
            "i ordavkoding [2]. Basert på resultatene ble to grupper valgt, en med høy lesekompetanse (HRC) og en med lav" +
            "lesekompetanse (LRC), som videre deltok i forskningsprosjektet. Deltakerne utførte bevegelses- og formtestene." +
            "Resultatene viste at LRC-gruppen scorte lavere på bevegelsestesten enn HRC-gruppen, noe som indikerer lavere ferdighet til" +
            "å oppdage bestemte mønstre hos voksne med lav lesekompetanse. Det var imidlertid ingen betydelig forskjell mellom" +
            "gruppene i resultatene av formtestene.",
        magnoTheoryTitle: "Den visuelle magnocellulære teorien",
        magnoTheoryText1: "Det finnes flere teorier som forklarer de mulige biologiske og kognitive årsakene til dysleksi." +
            " Teorien Magno baserer seg på kalles for den visuelle magnocellulære teorien.",
        magnoTheoryText2: "Teorien forklarer at dysleksi kan skyldes svekkelse i prosesseringen av visuell informasjon, som" +
            "er en viktig del av prosessen med å lære å lese. Disse ferdighetene er avhengige av det visuelle systemet i hjernen," +
            "som på et biologisk nivå kan deles inn i to distinkte baner: den magnocellulære og den parvocellulære banen [3].",
        magnoTheoryText3: "Banene har forskjellige roller og egenskaper. Den magnocellulære (M) banen består av store nevroner," +
            "som er spesialiserte på å oppdage hurtigbevegelig visuell stimuli, mens den parvocellulære (P) banen er ansvarlig for" +
            "oppdage detaljer og farger [4,5,6].",
        magnoTheoryText4: "Enkelte dyslektikere kan oppleve selektiv svekkelse i den magnocellulære banen, som kan resultere i" +
            "mangler i visuell bearbeiding. Flere studier støtter teorien ved å vise at M-nevronene i den dyslektiske hjernen er mindre" +
            "i størrelse, og tilsynelatende mindre organisert sammenliknet med en ikke-dyslektisk hjerne [7]. Det er verdt å merke seg" +
            "at denne svekkelsen ikke er utbredt hos alle personer med dysleksi, og at graden av svekkelse kan variere [8].",
        effectTitle: "Effekten av tidlig oppdagelse",
        effectText1: "Et barn går gjennom tre stadier i prosessen med å lære å lese [9]:",
        effectPoint1: "1. Bildestadiet, hvor hjernen fotograferer og gjenkjenner ord og bokstaver, og tilpasser seg visuelt til" +
            "bokstavformen. Dette skjer vanligvis i siste del av barnehageperioden.",
        effectPoint2: "2. Det fonologiske stadiet, hvor barnet begynner å utvikle sin fonologiske bevissthet, som gjør at hjernen" +
            "kan kode bokstaver til individuelle lyder (fonem). Dette inkluderer også evnen til å isolere fonemer for å danne nye ord.",
        effectPoint3: "3. Det ortografiske stadiet, hvor barnet kan gjenkjenne ord nøyaktig og raskt.",
        effectText2: "Barn som er i faresonen for å utvikle dysleksi, kan identifiseres allerede i bildestadiet [10]. Imidlertid" +
            "er flere screening- og diagnoseverktøy basert på leseferdigheter, og en diagnose av dysleksi kan ikke stilles før barnet" +
            "forventes å ha nådd et visst nivå. Normalt settes en diagnose tidligst i 2.klasse [10]. ",
        effectText3: "Selv om dysleksi er biologisk, er forskere enige om at miljøfaktorer kan forme og forbedre risikoen for" +
            "vanskelighetene som dysleksi medfører. Faktisk kan vanskelighetene forbygges hos mange barn ved tidlig deteksjon og" +
            "intervensjon [11,12]. En mye sitert studie av Foorman et al. i 1997 viser at effekten av intervensjon avtar med barnets" +
            "alder. Mer spesifikt er effekten av intervensjon omtrent 80% når det skjer i første eller andre klasse, og 10-15% når det" +
            "skjer i femte klasse eller senere [13]. Disse tallene viser de betydelige konsekvensene av sen oppdagelse. Det anbefales" +
            "derfor å starte screening for dysleksi i tidlig alder, samt gi nødvendig oppfølging og støtte i elevens leseferdigheter.",
        bibliografyTitle: "Kilder",
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
        successMessage: " ble lagt til",
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
}