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

const getStudentsByClasses = async (school, classes) => {
    const container = await CosmosConnector()
    console.log("Skal nå hente elever fra klasser")
    console.log("klassene: ")
    console.log(classes)
    const querySpec = {
        //query: "SELECT * from c where (c.school = @school) AND (c.grade IN ('+@classes+'))",
        query: "SELECT * from c where (c.school = @school) AND (c.grade IN ('2A','3B'))",
        "parameters": [
            { "name": "@school", "value": school },
            { "name": "@classes", "value": classes }
        ]
    };

    //where (c.school = "Huseby Barneskole") AND (c.grade IN ("3B","2A"))

    console.log("har ikke crashet enda??")
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    console.log(items)
    console.log("Er undefined her?")
    console.log(items[0])
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