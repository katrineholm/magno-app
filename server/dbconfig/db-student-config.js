function db_student_config() {
    return ({
        endpoint: "",
        key: "",
        databaseId: "magno-database",
        containerId: "magno-student-container",
        partitionKey: { kind: "Hash", paths: ["/id"] }
    })
}

module.exports = db_student_config
