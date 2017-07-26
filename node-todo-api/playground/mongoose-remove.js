const momgoose = require('../server/db/mongoose').mongoose;
const ObjectID = require('mongodb').ObjectID;
const Todo = require('../server/models/todo').Todo;
const User = require('../server/models/user').User;

/* Todo.remove({}).then((result) => {
    console.log(result);
}); */



Todo.findByIdAndRemove('59781fedf8a658b6279a22d0').then(todo => {
    console.log(todo);
});