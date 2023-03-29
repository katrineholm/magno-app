function db_student_config() {
        return ({
                endpoint: "https://magno-database.documents.azure.com:443/",
                key: "",
                databaseId: "magno-database",
                containerId: "magno-student-container",
                partitionKey: { kind: "Hash", paths: ["/id"] }
        })
}

module.exports = db_student_config
