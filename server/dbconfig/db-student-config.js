function db_student_config() {
<<<<<<< Updated upstream
    return ({
        endpoint: "https://magno-database.documents.azure.com:443/",
        key: "",
        databaseId: "magno-database",
        containerId: "magno-student-container",
        partitionKey: { kind: "Hash", paths: ["/id"] }
    })
=======
        return ({
                endpoint: "https://magno-database.documents.azure.com:443/",
                key: "gun3nnXNSMwdQXga9LnYjUwdV1SEtWRYIE5U3QVeO2HyBV2OvPAwqLhAm1zFOPrrbJ0F8vwQAIGEACDb6dawsg==",
                databaseId: "magno-database",
                containerId: "magno-student-container",
                partitionKey: { kind: "Hash", paths: ["/id"] }
        })
>>>>>>> Stashed changes
}

module.exports = db_student_config
