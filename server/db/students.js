const { Items } = require("@azure/cosmos");
const db_student_config = require("../dbconfig/db-student-config");
const CosmosClient = require("@azure/cosmos").CosmosClient

async function CosmosConnector() {
    const { endpoint, key, databaseId, containerId, partitionKey } = db_student_config();
    const client = new CosmosClient({ endpoint, key });
    const { container } = await client
        .database(databaseId)
        .containers.createIfNotExists(
            { id: containerId, partitionKey },
            { offerThroughput: 400 }
        );
    return container;
}

const getStudentById = async (id) => {
    const container = await CosmosConnector();
    const querySpec = {
        query: "SELECT * from c where c.id = @id",
        "parameters": [
            { "name": "@id", "value": id }
        ]
    };
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    return items[0]
}

const getStudent = async (name, className, school) => {
    const container = await CosmosConnector();
    const querySpec = {
        query: "SELECT * from c where c.name = @name and c.grade = @className and c.school = @school",
        parameters: [
            { name: "@name", value: name },
            { name: "@className", value: className },
            { name: "@school", value: school }
        ]
    };
    const { resources: items } = await container.items.query(querySpec).fetchAll();
    if (items.length === 1) {
        return items[0]

    }
    return null
};


const getStudentsBySchool = async (school) => {
    const container = await CosmosConnector();
    const querySpec = {
        query: "SELECT * from c where c.school = @school",
        "parameters": [
            { "name": "@school", "value": school }
        ]
    };
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    return items
}

const getStudentsByClasses = async (user) => { //TODO: Endre sånn at det er klassenavn og ikke klasseID
    const container = await CosmosConnector()
    const school = user.school;
    const classes = user.classes;

    const querySpec = {
        query: "SELECT * from c where (c.school = @school) AND ARRAY_CONTAINS(@classes, c.grade)",
        "parameters": [
            { "name": "@school", "value": school },
            { "name": "@classes", "value": classes }
        ]
    };
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    return items
}

const updateScore = async (student, testType, newScore) => {
    const container = await CosmosConnector();
    const date = new Date()

    student.tests[testType].push({ score: newScore, date: date })
    student.testdate = date


    const { resource: updatedItem } = await container
        .item(student.id)
        .replace(student);
    return updatedItem;
}

const createStudent = async (newStudent) => {

    const container = await CosmosConnector();
    return container.items.create(newStudent)
}
const updateInformation = async (student, newInformation) => {
    const container = await CosmosConnector();
    student.information = newInformation;
    const { resource: updatedItem } = await container
        .item(student.id)
        .replace(student);
    return updatedItem;

}




module.exports = {
    getStudentsBySchool,
    getStudentsByClasses,
    getStudent,
    createStudent,
    getStudentById,
    updateInformation,
    updateScore
}