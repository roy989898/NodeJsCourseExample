const ObjectID = require('mongodb').ObjectID;
const Todo = require('./../../models/todo').Todo;
const User = require('./../../models/user').User;
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'asdas@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
    }]

}, {
    _id: userTwoId,
    email: 'asdadddds@example.com',
    password: 'userTwoPass'

}];

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: userOneId
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 334,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => { done(); });

};

const ppopulateUsers = (done) => {
    // we remoce all the user in the db first
    User.remove({}).then(() => {
        // because we want all the password in DB is hashed,so we need to use the model save method, not use insertMany
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();
        //  all the above save return promise,we use Promise.all,when all the save finish,will call done with in the then
        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};




module.exports = {
    todos,
    users,
    populateTodos,
    ppopulateUsers

};