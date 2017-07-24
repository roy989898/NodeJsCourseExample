
let Todo = require('./models/todo').Todo;
let User = require('./models/user').User;
const express = require('express');
const bodyParser = require('body-parser');
let newTodo = new Todo({
    text: false
});


let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });


});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

