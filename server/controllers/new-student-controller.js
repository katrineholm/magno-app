const { getStudentsBySchool, getStudentsByClasses } = require("../db/students")

const getStudents = async (req, res) => {
    const user = req.user
    const classes = { classes: ["2A", "3B"] } //TODO: endre sånn at man får inn de tilhørende klassene til lærer
    console.log("klasser fått inn: ")
    console.log(classes)
    if (user.role === "SPESPED") { //TODO: Endre til Admin
        const students = await getStudentsBySchool(user.school)
        console.log(students)
        res.send({ students: students })
    }
    else if (user.role === "TEACHER") { //TODO: Endre til Basic
        console.log("User is teacher")
        const students = await getStudentsByClasses(user.school, classes)
        return res.json({ students: students })
    }
    else {
        res.status(401).json({ message: "Ikke gyldig rolle" }) //riktig feilkode?
    }
}

module.exports = {
    getStudents
}
