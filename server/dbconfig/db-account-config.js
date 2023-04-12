function db_account_config() {
        return ({
                endpoint: "https://magno-database.documents.azure.com:443/",
                key: "",
                databaseId: "magno-database",
                containerId: "magno-user-container",
                partitionKey: { kind: "Hash", paths: ["/id"] }
        })
}

module.exports = db_account_config
