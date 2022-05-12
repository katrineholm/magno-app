/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const CryptoJS = require('crypto-js')
const CosmosClient = require("@azure/cosmos").CosmosClient
const db_student_config = require("../database/db-student-config");
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
    const motion_test = [{}];
    const fixed_form_test = [{}];
    const random_form_test = [{}];

    const risk = req.body.risk;
    const container = await CosmosConnector();
    const newItem = {
        id: id,
        name: name,
        school: school,
        grade: grade,
        testdate: testdate,
        tests: {motion_test, fixed_form_test, random_form_test},
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

  postScore: async function(req, res){
    const id = req.body.id;
    const test_type = req.body.test_type;
    const test_score = req.body.test_score;
    const container = await CosmosConnector();
    const querySpec = {
      query: "SELECT * from c where c.id = @id",
      "parameters": [
          {"name": "@id", "value": String(id)}
      ]
    };
    var exists = false;
    // Query the student object
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      var db_item;
      items.forEach(item => {
        // If student exists, set db_item and exists
        if (item.id === id){
          db_item = item;
          exists = true;  
        }
      }
    )
    if (exists){
      // Get thresholds for different tests
      const setting = settings();
      // Set risk based on testscore
      if (!db_item.risk.includes("Høy")){
        if (test_score > setting[test_type].threshold_high){
          db_item.risk = "Høy";
        }
        else if (test_score > setting[test_type].threshold_medium){
          db_item.risk = "Middels";
        }
        else{
          if (!db_item.risk.includes("Middels") ){
            db_item.risk = "Lav"
          }
        }
      }
      // Get current date in iso format
      const date = new Date().toISOString()
      db_item.tests[test_type].push({score: test_score, date: date});
      db_item.testdate = date;

      const { resource: updatedItem } = await container
      .item(db_item.id)
      .replace(db_item);
      response = {
        'result': 'Authenticated',
        'student' : db_item.name,
        'tests': db_item.tests,
      }
      handleSuccessOrErrorMessage(response, false, res);
    }
    else{
      response = {
        'result' : 'Student does not exist',
      }
      handleSuccessOrErrorMessage(response, false, res);
    }
  },
}