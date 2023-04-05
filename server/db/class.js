const db_class_config = require("../dbconfig/db-class-config");
const CosmosClient = require("@azure/cosmos").CosmosClient


async function CosmosConnector() {
    const { endpoint, key, databaseId, containerId, partitionKey } = db_class_config();
    const client = new CosmosClient({ endpoint, key });
    const { container } = await client
        .database(databaseId)
        .containers.createIfNotExists(
            { id: containerId, partitionKey },
            { offerThroughput: 400 }
        );
    return container;
}

const getClassById = async (id) => {
    const container = await CosmosConnector()
    const querySpec = {
        query: "SELECT * from c where c.id = @id",
        "parameters": [
            { "name": "@id", "value": id }
        ]
    };
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

    if (items.length === 1) {
        return items[0]

    }
    return null
}

const addTeacherToClass = async (grade, teacher_id) => {
    const container = await CosmosConnector()
    
    console.log("er inne på add class to user")
    console.log(grade)
    grade.teacher.push(teacher_id)
    console.log("oppdatert bruker:")
    console.log(grade)

    const { resource: updatedItem } = await container
        .item(grade.id)
        .replace(grade); 
    return grade
}

const deleteTeacherFromClass = async (grade, teacher_id) => {
    const container = await CosmosConnector()
    
    console.log("er inne på add class to user")
    console.log(grade)
    const newTeacherList = grade.teacher.filter(item => item !== teacher_id)
    grade.teacher = newTeacherList
    console.log("oppdatert bruker:")
    console.log(grade)

    const { resource: updatedItem } = await container
        .item(grade.id)
        .replace(grade); 
    return 
}


module.exports = {
    getClassById, 
    addTeacherToClass, 
    deleteTeacherFromClass
}