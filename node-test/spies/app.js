let db = require("./db");

module.exports.handleSigup = (email, password) => {
    // check email exist
    // save the user to databae
    db.saveUser({
        email,
        password
    });
    // send the welcome email

};