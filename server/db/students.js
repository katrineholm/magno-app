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

const getStudentsBySchool = async (school) => {
    console.log("Skolen de går på:")
    console.log(school)
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
    console.log(items[0])
    console.log("Også resten..")
    console.log(items)
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

const createStudent = async (newStudent) => {

    const container = await CosmosConnector();
    return container.items.create(newStudent)
}



module.exports = {
    getStudentsBySchool,
    getStudentsByClasses,
    createStudent
}