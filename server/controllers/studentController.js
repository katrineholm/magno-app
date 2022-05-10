/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const CryptoJS = require('crypto-js')
const CosmosClient = require("@azure/cosmos").CosmosClient
const db_student_config = require("../database/db-student-config");


function handleSuccessOrErrorMessage(response, err, res) {
  if (!err){
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(response));
  } else {
      res.status(400).send(result);
  }
}

async function CosmosConnector(){
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

module.exports = {

  addStudent: async function(req, res){
    const id = req.body.uuid;
    const name = req.body.name;
    const school = req.body.school;
    const grade = req.body.grade;
    const testdate = req.body.testdate;
    var motion_test = req.body.motion_test;
    var fixed_form_test = req.body.fixed_form_test;
    var random_form_test = req.body.random_form_test;

    const risk = req.body.risk;
    if (motion_test === undefined){
        motion_test = [{}]
    }
    if (fixed_form_test === undefined){
        fixed_form_test = [{}]
    }
    if (random_form_test === undefined){
        random_form_test = [{}]
    }
    const container = await CosmosConnector();
    const newItem = {
        id: id,
        name: name,
        school: school,
        grade: grade,
        testdate: testdate,
        tests: [motion_test, fixed_form_test, random_form_test],
        risk: risk
      };
    await container.items.create(newItem);
    response = {'result' : 'Success adding student'}
    handleSuccessOrErrorMessage(response, false, res);
  },

  getStudents: async function (req, res){
    const school = req.body.school

    const container = await CosmosConnector();
    const querySpec = {
      query: "SELECT * from c where c.school = @school",
      "parameters": [
          {"name": "@school", "value": school}
      ]
    };
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      handleSuccessOrErrorMessage(items, false, res);
  },

  updateStudent: async function(old_email, email, confirm_password, password, change_password){
    const { endpoint, key, databaseId, containerId, partitionKey } = db_account_config;
    const client = new CosmosClient({ endpoint, key });

    const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists(
      { id: containerId, partitionKey },
      { offerThroughput: 400 }
    );
    const querySpec = {
      query: "SELECT * from c where c.email = @email",
      "parameters": [
          {"name": "@email", "value": old_email}
      ]
    };
    var newItem;
    var correct = false;
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      items.forEach(item => {
        if (item.email === old_email){
          const salt = item.password.substring(item.password.indexOf(":") + 1, item.password.length)
          confirm_password = CryptoJS.PBKDF2(confirm_password, salt, { keySize: 256 / 32 }).toString()  + ":" + salt;
          if (item.password === confirm_password){
            var new_password = item.password
            if (change_password){
              new_password = CryptoJS.PBKDF2(password, salt, { keySize: 256 / 32 }).toString()  + ":" + salt;
            }
            correct = true;
            newItem = {
              id: item.id,
              email: email,
              password: new_password,
              rememberme: item.rememberme,
            };
          }           
        }
      }
    )
    if (correct){
      const { resource: updatedItem } = await container
      .item(newItem.id, newItem.email)
      .replace(newItem);
      password = "*******************";
      email = updatedItem.email;
      return {password: password, email: email};
    }
    return false;
  },
}