
const db_account_config = require("../dbconfig/db-account-config");
const CosmosClient = require("@azure/cosmos").CosmosClient

async function CosmosConnector() {
    const { endpoint, key, databaseId, containerId, partitionKey } = db_account_config();
    const client = new CosmosClient({ endpoint, key });
    const { container } = await client
        .database(databaseId)
        .containers.createIfNotExists(
            { id: containerId, partitionKey },
            { offerThroughput: 400 }
        );
    return container;
}

const getUserByEmail = async (email) => {
    const container = await CosmosConnector()
    const querySpec = {
        query: "SELECT * from c where c.email = @email",
        "parameters": [
            { "name": "@email", "value": email }
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


const getUserById = async (id) => {
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
    console.log(items[0])
    return null
}


const createUser = async (newUser) => {

    const container = await CosmosConnector()
    return container.items.create(newUser);
}
const addAdmin = async (user) => {

    const container = await CosmosConnector()
    user.role = "ADMIN"

    const { resource: updatedItem } = await container
        .item(user.id)
        .replace(user);

    return user
}

const getTeachersBySchool = async (school) => {
    console.log("Skolen de går på:")
    console.log(school)
    const container = await CosmosConnector();
    const querySpec = {
        query: "SELECT * from c where c.school = @school and c.role=@role",
        "parameters": [
            { "name": "@school", "value": school },
            { "name": "@role", "value": "BASIC" },
        ]
    };
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    // console.log(items[0])
    // console.log("Også resten..")
    console.log(items)
    return items
}

const getTeachersByClass = async (school, className) => {
    const container = await CosmosConnector();
    const querySpec = {
        query: "SELECT * FROM c WHERE c.school = @school AND ARRAY_CONTAINS(c.classes, @className)",
        "parameters": [
            { "name": "@school", "value": school },
            { "name": "@role", "value": className },
        ]
    };
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    console.log(items)
    return items
}

const addClassToUser = async (user, class_name) => {
    const container = await CosmosConnector();
    console.log("er inne på add class to user")
    console.log(user)
    user.classes.push(class_name)
    console.log("oppdatert bruker:")
    console.log(user)

    const { resource: updatedItem } = await container
        .item(user.id)
        .replace(user);

    return user

    // return container.items.create(newUser);
}

const removeClassFromUser = async (user, class_name) => {
    const container = await CosmosConnector();
    console.log("er inne på add class to user")
    console.log(user)
    // const index = user.classes.idexOf(class_id)
    // user.classes.splice(index,1)
    const newClassList = user.classes.filter(item => item !== class_name)
    user.classes = newClassList
    console.log("oppdatert bruker:")
    console.log(user)

    const { resource: updatedItem } = await container
        .item(user.id)
        .replace(user);
    return
}

module.exports = {
    getUserByEmail,
    getUserById,
    createUser,
    addClassToUser,
    removeClassFromUser,
    addAdmin,
    getTeachersBySchool,
    getTeachersByClass
}