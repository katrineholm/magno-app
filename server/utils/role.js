
const userIsAdmin = (user) => {
    return user.role === "ADMIN";
}

const userIsBasic = (user) => {
    return user.role === "BASIC";
}

module.exports = {
    userIsAdmin,
    userIsBasic
}
