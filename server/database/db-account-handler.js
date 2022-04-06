/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import CryptoJS from 'crypto-js'
import {CosmosClient} from "@azure/cosmos"
const db_account_config = require("./db-account-config");

function handleSuccessOrErrorMessage(result, err, res) {
  if (!err){
        var response = {'result' : result};
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(response));
  } else {
      res.status(400).send(result);
  }
}

async function createAccount (req, res){
    const id = req.body.id;
    const email = req.body.email;
    const hashed_password = req.body.hashed_password
    const { endpoint, key, databaseId, containerId, partitionKey } = db_account_config.default;
    const client = new CosmosClient({ endpoint, key });
  
    const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists(
      { id: containerId, partitionKey },
      { offerThroughput: 400 }
    );
    //console.log(`Querying container: Items`);
    // query to return all items
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
        const newItem = {
          id: id,
          email: email,
          password: hashed_password,
          rememberme: '',
        };
        await container.items.create(newItem);
        response = {
          'result' : 'Success creating account'
        }
        handleSuccessOrErrorMessage(response, false, res);
        
        return "Success creating account"
      }
      else{
        response = {
          'result' : 'Account already exists'
        }
        handleSuccessOrErrorMessage(response, false, res);
      }
  }
  
  async function loginAccount (email, rememberMe){
    const { endpoint, key, databaseId, containerId, partitionKey } = db_account_config.default;
    const client = new CosmosClient({ endpoint, key });

    const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists(
      { id: containerId, partitionKey },
      { offerThroughput: 400 }
    );
    //console.log(`Querying container: Items`);
  
    // query to return all items
    const querySpec = {
      query: "SELECT * from c where c.email = @email",
      "parameters": [
          {"name": "@email", "value": email}
      ]
    };
    var password = "Wrong user information entered";
    var newItem;
    var client_token = "";
    var acc_exist = false;
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      items.forEach(item => {
        if (item.email === email){
            
            password = item.password;
            email = item.email;

            if (rememberMe){
              acc_exist = true;
              const token = CryptoJS.lib.WordArray.random(128 / 8).toString();
              client_token = Buffer.from(
                                  email + ':' +  
                                  token + ':' + 
                                  new Date(Date.now() + 12096e5)).toString('base64');
              let server_token = (email + ':' +  
                                  token + ':' + 
                                  new Date(Date.now() + 12096e5)).toString()
              newItem = {
                  id: item.id,
                  email: item.email,
                  password: item.password,
                  rememberme: server_token,
                };
              
            }
        }

      })
      if (acc_exist){
        const { resource: updatedItem } = await container
        .item(newItem.id, newItem.email)
        .replace(newItem);
      }
      if (!password.includes("Wrong user")){
          return {password: password, email: email, rememberme_token: client_token};
      }
      else{
          return {password: password};
      }
  }

  async function updateAccount (old_email, email, confirm_password, password, change_password){
    const { endpoint, key, databaseId, containerId, partitionKey } = db_account_config.default;
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
  }

  async function checkPersistToken (email, client_token, client_date, model){
    const { endpoint, key, databaseId, containerId, partitionKey } = db_account_config.default;
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
          {"name": "@email", "value": email}
      ]
    };
    
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
      var result = false;
      items.forEach(item => {
        if (item.email === email){
            let server_token = item.rememberme;
            if (server_token === client_token){
              let server_items = server_token.split(":");
              let server_date = new Date(Date.parse(server_items[2]))
              if ( server_date.getTime() === client_date.getTime()){
                model.setEmail(item.email);
                model.setRonin(item.ronin);
                model.setMetamask(item.metamask);
                model.setRole(item.role);
                result = true;
              }
            }
        }
      })
      return result
      
  }




  export { loginAccount, createAccount, checkPersistToken, updateAccount }