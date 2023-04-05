
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

const createUser = async (newUser) => {

    const container = await CosmosConnector()
    return container.items.create(newUser);
}

const addClassToUser = async (user, class_id) => {
    const container = await CosmosConnector();
    console.log("er inne på add class to user")
    console.log(user)
    user.classes.push(class_id)
    console.log("oppdatert bruker:")
    console.log(user)

    const { resource: updatedItem } = await container
        .item(user.id)
        .replace(user);

    return user

    // return container.items.create(newUser);
}

const removeClassFromUser = async (user, class_id) => {
    const container = await CosmosConnector();
    console.log("er inne på add class to user")
    console.log(user)
    // const index = user.classes.idexOf(class_id)
    // user.classes.splice(index,1)
    const newClassList = user.classes.filter(item => item !== class_id)
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
    createUser,
    addClassToUser,
    removeClassFromUser
}