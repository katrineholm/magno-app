const db_account_config = {
    endpoint: "https://axie-college-account-db.documents.azure.com:443/",
    key: "lWgWIjeqAhBqb1oPfiNW1BLbghIxCpSYX8t6Ta7loR2QuLFs9HuMpIY3ws6prdhnCZSf6IgciMzGcht8LWS9Sg==",
    databaseId: "AccountDatabase",
    containerId: "AccountContainer",
    partitionKey: { kind: "Hash", paths: ["/email"] }
}

export default db_account_config;