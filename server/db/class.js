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

const getClassByName = async (name, school) => {
    const container = await CosmosConnector()
    const querySpec = {
        query: "SELECT * from c where c.name = @name AND c.school=@school",
        "parameters": [
            { "name": "@name", "value": name },
            { "name": "@school", "value": school },
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

const createClass = async (newClass) => {

    const container = await CosmosConnector()
    return container.items.create(newClass);
}

const getClassesBySchool = async (school) => {
    const container = await CosmosConnector()
    const querySpec = {
        query: "SELECT * from c where c.school = @school",
        "parameters": [
            { "name": "@school", "value": school },
        ]
    };
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

    return items
}

const getClassesByList = async (user) => {
    const container = await CosmosConnector()
    const school = user.school;
    const classes = user.classes;

    const querySpec = {
        query: "SELECT * from c where (c.school = @school) AND ARRAY_CONTAINS(@classes, c.name)",
        "parameters": [
            { "name": "@school", "value": school },
            { "name": "@classes", "value": classes }
        ]
    };
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    return items;
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

const deleteTeacherFromClass = async (teacher_id, class_object) => {
    const container = await CosmosConnector()

    console.log("er inne på delete teacher from class")
    console.log(class_object) //denne er null
    const newTeacherList = class_object.teacher.filter(item => item !== teacher_id)
    console.log("new filtered teacher list in class: ", newTeacherList)
    class_object.teacher = newTeacherList
    console.log("oppdatert bruker:")
    console.log("grade: ", class_object)

    const { resource: updatedItem } = await container
        .item(class_object.id)
        .replace(class_object);
    return
}


module.exports = {
    getClassByName,
    addTeacherToClass,
    deleteTeacherFromClass,
    getClassesBySchool,
    getClassesByList,
    createClass
}