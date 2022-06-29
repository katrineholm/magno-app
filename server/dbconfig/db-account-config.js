function db_account_config() {
    return ({
        endpoint: "https://magno-platform-db.documents.azure.com:443/",
        key: "YOWkipBzndjmzlZXT0Tlzuf83pEHd4kXYdmEznRlbIqxzr4Y9vqsaHZGv0k8DZWuQwYGAjh0OtRdEv2QRHJkRg==",
        databaseId: "magno-database",
        containerId: "magno-container",
        partitionKey: { kind: "Hash", paths: ["/id"] }
    })
}

module.exports = db_account_config