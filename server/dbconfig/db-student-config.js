function db_student_config() {
    return ({
        endpoint: "https://magno-database.documents.azure.com:443/",
        key: "QNZK6vrmYjvIMmXaYw9VsSaQC4zpMbXP87nL5OIXo3oDpCa7RGNDvPYA0LhUFdXkruwn0CWf1mtUACDbVYVAgQ==",
        databaseId: "magno-database",
        containerId: "magno-student-container",
        partitionKey: { kind: "Hash", paths: ["/id"] }
    })
}

module.exports = db_student_config
