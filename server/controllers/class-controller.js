/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const CryptoJS = require('crypto-js')
const CosmosClient = require("@azure/cosmos").CosmosClient
const db_class_config = require("../dbconfig/db-class-config");
const settings = require("../settings");

function handleSuccessOrErrorMessage(response, err, res) {
  if (!err){
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(response));
  } else {
      res.status(400).send(result);
  }
}

async function CosmosConnector(){
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

module.exports = {

  getClasses: async function (req, res){
    const school = req.body.school;

    const container = await CosmosConnector();
    const querySpec = {
      query: "SELECT * from c where c.school = @school",
      "parameters": [
          {"name": "@school", "value": school},
      ]
    };
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      handleSuccessOrErrorMessage(items, false, res);
  },

  addClass: async function (req, res) {
    console.log("Kommer seg til add class i class-controller")
    const id = req.body.uuid;
    const name = req.body.name;
    const school = req.body.school;
    const teacher = req.body.teacher;

    const container = await CosmosConnector();
    console.log("items", container.items)
    const newItem = {
        id: id,
        name: name,
        school: school,
        teacher: teacher,
      };
    await container.items.create(newItem);
    response = {'result' : 'Success adding class'}
    handleSuccessOrErrorMessage(response, false, res);
  }
}