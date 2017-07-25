
let Todo = require('./models/todo').Todo;
let User = require('./models/user').User;
const ObjectID = require('mongodb').ObjectID;
const express = require('express');
const bodyParser = require('body-parser');



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

app.get('/todos', (req, res) => {
    Todo.find({}).then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(404).send(e);
    });
});



app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    // valid id use is Vaild
    if (!ObjectID.isValid(id)) {
        res.status(400).send({});
    } else {
        Todo.findById(id).then((todo) => {

            if (!todo) {
                return res.status(404).send({text:'cant find'});
            }
            res.send({todo});

        }, (e) => {
            res.status(404).send({text:'error'});
        });

    }

});



app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = { app };