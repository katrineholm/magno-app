function db_account_config() {
    return ({
        endpoint: "",
        key: "",
        databaseId: "magno-database",
        containerId: "magno-container",
        partitionKey: { kind: "Hash", paths: ["/id"] }
    })
}

module.exports = db_account_config
