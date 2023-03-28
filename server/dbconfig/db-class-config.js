function db_class_config() {
    return ({
        endpoint: "https://magno-database.documents.azure.com:443/",
        key: "gun3nnXNSMwdQXga9LnYjUwdV1SEtWRYIE5U3QVeO2HyBV2OvPAwqLhAm1zFOPrrbJ0F8vwQAIGEACDb6dawsg==",
        databaseId: "magno-database",
        containerId: "magno-class-container",
        partitionKey: { kind: "Hash", paths: ["/id"] }
    })
}

module.exports = db_class_config