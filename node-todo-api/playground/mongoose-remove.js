const momgoose = require('../server/db/mongoose').mongoose;
const ObjectID = require('mongodb').ObjectID;
const Todo = require('../server/models/todo').Todo;
const User = require('../server/models/user').User;

Todo.remove({}).then((result) => {
    console.log(result);
});

