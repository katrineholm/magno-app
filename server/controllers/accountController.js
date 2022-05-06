/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const CryptoJS = require('crypto-js')
const CosmosClient = require("@azure/cosmos").CosmosClient
const db_account_config = require("../database/db-account-config");
const oneDay = 1000*60*60*24;

function compareDate(token, storedToken){
  const tokenDate = token.split(":")[2]
  const storedTokenDate = storedToken.split(":")[2]
  if (new Date(tokenDate) < Date.now()){
    return false;
  }
  else if (new Date(storedTokenDate) < Date.now()){
    return false;
  }
  return true;
}

function handleSuccessOrErrorMessage(response, err, res) {
  if (!err){
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(response));
  } else {
      res.status(400).send(result);
  }
}

async function CosmosConnector(){
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

module.exports = {

  createAccount: async function(req, res){
    const id = req.body.uuid;
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    const school = req.body.school;
    const container = await CosmosConnector();
    const querySpec = {
        query: "SELECT * from c where c.email = @email",
        "parameters": [
            {"name": "@email", "value": email}
        ]
      };
    var exists = false;
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      items.forEach(item => {
        if (item.email === email){
          exists = true
        }
      })
      if (!exists){
        const salt = CryptoJS.lib.WordArray.random(128 / 8).toString();
        const key256Bits = CryptoJS.PBKDF2(password, salt, {
            keySize: 256 / 32
        }).toString();
        const newItem = {
          id: id,
          email: email,
          password: key256Bits + ":" + salt,
          school: school,
          token: '',
        };
        await container.items.create(newItem);
        response = {'result' : 'Success creating account'}
        handleSuccessOrErrorMessage(response, false, res);
      }
      else{
        response = {'result' : 'Account already exists'}
        handleSuccessOrErrorMessage(response, false, res);
      }
  },

  loginAccount: async function (req, res){
    const email = req.body.email.toLowerCase();
    const password = req.body.password
    const container = await CosmosConnector();
    var db_item;
    var accExists = false;
    const querySpec = {
        query: "SELECT * from c where c.email = @email",
        "parameters": [
            {"name": "@email", "value": email}
        ]
    };
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      items.forEach(item => {
        if (item.email === email){
          const salt = item.password.substring(item.password.indexOf(":") + 1, item.password.length)
          const clientkey256Bits = CryptoJS.PBKDF2(password, salt, {keySize: 256 / 32}).toString();
          if (item.password === clientkey256Bits + ":" + salt){
            accExists = true;
            db_item = item;
          }
        }
      })
      if (accExists){
        const token = CryptoJS.lib.WordArray.random(128 / 8).toString();
        const timestamp = new Date(Date.now() + oneDay);
        const client_token = Buffer.from(
                            email + ':' +  
                            token + ':' + 
                            timestamp).toString('base64');
        const server_token = (email + ':' +  
                            token + ':' + 
                            timestamp).toString()
        db_item.token = server_token;
        await container
            .item(db_item.id)
            .replace(db_item);
            response = {
              'result' : 'Login success',
              'school' : db_item.school,
              'token' : client_token
            }
            handleSuccessOrErrorMessage(response, false, res);
      }
      else{
        response = {
          'result' : 'Wrong user information',
        }
        handleSuccessOrErrorMessage(response, false, res);
      }
  },

  updateAccount: async function(old_email, email, confirm_password, password, change_password){
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

  logoutAccount: async function (req, res){
    const email = req.body.email.toLowerCase();
    try{
      const container = await CosmosConnector();
      const querySpec = {
          query: "SELECT * from c where c.email = @email",
          "parameters": [
              {"name": "@email", "value": email}
          ]
        };
      
      const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
        items.forEach(item => {
          if (item.email === email){
            newItem = {
                id: item.id,
                email: item.email,
                password: item.password,
                school: item.school,
                token: "",
              };
            
          }
        })
      const { resource: updatedItem } = await container
          .item(newItem.id)
          .replace(newItem);
          response = {
            'result' : 'Logout success',
          }
          handleSuccessOrErrorMessage(response, false, res);
    }
    catch (error){
      response = {
        'result' : 'Logout failed',
      }
      handleSuccessOrErrorMessage(response, false, res);
    }
      
  },
  authenticate: async function (req, res){
    try{
      const token = Buffer.from(req.body.token, 'base64').toString('utf-8');
      const email = token.split(":")[0];
      const container = await CosmosConnector();
      const querySpec = {
        query: "SELECT * from c where c.email = @email",
        "parameters": [
            {"name": "@email", "value": email}
        ]
      };
      
      const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
        var authenticated = false;
        var exists = false;
        var db_item;
        items.forEach(item => {
          exists = true;
          db_item = item;
          if (item.token === token && compareDate(token, item.token)){
            authenticated = true;
            
          }
        })
        if (exists){
          if (authenticated){
          
            const new_token = CryptoJS.lib.WordArray.random(128 / 8).toString();
            const timestamp = new Date(Date.now() + oneDay);
            const client_token = Buffer.from(
                                db_item.email + ':' +  
                                new_token + ':' + 
                                timestamp).toString('base64');
            const server_token = (db_item.email + ':' +  
                                new_token + ':' + 
                                timestamp).toString()
            db_item.token = server_token;
            await container
            .item(db_item.id)
            .replace(db_item);
            response = {
              'result': 'Authenticated',
              'email' : email,
              'school': db_item.school,
              'token' : client_token
            }
            handleSuccessOrErrorMessage(response, false, res);
          }
          else{
            db_item.token = ""
            await container
              .item(db_item.id)
              .replace(db_item);
            response = {
              'result' : 'Client token not valid',
            }
            handleSuccessOrErrorMessage(response, false, res);
          }
        }
        else{
          response = {
            'result' : 'Client token not valid',
          }
          handleSuccessOrErrorMessage(response, false, res);
        }
    }
    catch(error){
      console.log(error);
    }
  }
}