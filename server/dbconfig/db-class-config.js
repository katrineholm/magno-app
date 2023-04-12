function db_class_config() {
    return ({
        endpoint: "https://magno-database.documents.azure.com:443/",
        key: "",
        databaseId: "magno-database",
        containerId: "magno-class-container",
        partitionKey: { kind: "Hash", paths: ["/id"] }
    })
}

module.exports = db_class_config