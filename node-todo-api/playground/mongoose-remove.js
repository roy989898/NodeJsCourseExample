const momgoose = require('../server/db/mongoose').mongoose;
const ObjectID = require('mongodb').ObjectID;
const Todo = require('../server/models/todo').Todo;


let id = '5975e1bb8fddddc90720c814d0d7';


if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos: ', todos);
}, (e) => { console.log(e); });

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo: ', todo);
}, (e) => { console.log(e); });


Todo.findById(id).then((todo) => {
    console.log('Todo by id: ', todo);
}, (e) => { console.log(e); });