
let Todo = require('./models/todo').Todo;
let User = require('./models/user').User;
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


let newUser = new User({
    email: 'sdfsd@asdsa.com'
});

newUser.save().then((doc) => {
    console.log('Save to user', doc);
}, (e) => {
    console.log('Save user err', e);
});
