function db_account_config() {
    return ({
        endpoint: "https://magno-database.documents.azure.com:443/",
        key: "QNZK6vrmYjvIMmXaYw9VsSaQC4zpMbXP87nL5OIXo3oDpCa7RGNDvPYA0LhUFdXkruwn0CWf1mtUACDbVYVAgQ==",
        databaseId: "magno-database",
        containerId: "magno-user-container",
        partitionKey: { kind: "Hash", paths: ["/id"] }
    })
}

module.exports = db_account_config
