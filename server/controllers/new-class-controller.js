const { UserDefinedFunction } = require("@azure/cosmos");
const { getClassesBySchool, getClassesByList } = require("../db/class");
const { userIsAdmin, userIsBasic } = require("./../utils/role")

function handleSuccessOrErrorMessage(response, err, res) {
    if (!err) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.stringify(response));
    } else {
        res.status(400).send(result);
    }
}

const getClasses = async (req, res) => {
    const user = req.user;
    const school = user.school;
    if (userIsAdmin(user)) {
        const classes = await getClassesBySchool(school)
        console.log(classes)
        res.send({ classes: classes })
    }
    else if (userIsBasic(user)) {
        const classes = await getClassesByList(user)
        console.log(classes)
        res.send({ classes: classes })
    }
    else {
        res.status(400).json({ message: "Brukeren har ingen gyldig rolle" })
    }

}

module.exports = {
    getClasses
}
