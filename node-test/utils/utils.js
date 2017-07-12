module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.square = (x) => {
    return x * x;
};

module.exports.squareAsync = (x, callback) => {
    setTimeout(() => {
        let result = x * x;
        callback(result);
    }, 1000);

};

module.exports.setName = (user, fullName) => {
    let names = fullName.split(" ");
    user.firstName = names[0];
    user.lastName = names[1];

    return user;
};