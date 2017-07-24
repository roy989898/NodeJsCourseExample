const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let newTodo = new Todo({
    text: false
});


/* 
newTodo.save().then((doc) => {
    console.log('Save to do', doc);
}, (e) => {
    console.log('Unable to Save to do', e);
}); */

/* User  model
email-require trim type min_length_1*/
let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1


    }
});

let newUser = new User({
    email: 'sdfsd@asdsa.com'
});

newUser.save().then((doc) => {
    console.log('Save to user', doc);
}, (e) => {
    console.log('Save user err', e);
});
