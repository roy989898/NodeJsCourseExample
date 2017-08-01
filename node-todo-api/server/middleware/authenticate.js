let User = require('../models/user').User;

let authenticate = (req, res, next) => {
    let token = req.header('x-auth');
    User.findByToken(token).then((user) => {
        if (!user) {
            return new Promise((resolve, reject) => {
                reject('Can not find user');
            });
        }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send({});
    });
};


module.exports = { authenticate };