const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

let newTodo = new Todo({
    text: 'Cook dinner',
    completed: false,
    completedAt: 123
});

newTodo.save().then((doc) => {
    console.log('Save to do', doc);
}, (e) => {
    console.log('Unable to Save to do', e);
});