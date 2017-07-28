
let env = process.env.NODE_ENV || 'development';
console.log('env  ******', env);


if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

const _ = require('lodash');
let Todo = require('./models/todo').Todo;
let User = require('./models/user').User;
const ObjectID = require('mongodb').ObjectID;
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

let app = express();

app.use(bodyParser.json());
app.set('view engine', 'hbs');

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

app.get('/cap', (req, res) => {
    res.render('cap.hbs');

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
        res.status(404).send({});
    } else {
        Todo.findById(id).then((todo) => {

            if (!todo) {
                return res.status(404).send({});
            }
            res.send({ todo });

        }, (e) => {
            res.status(404).send({});
        });

    }

});


app.delete('/todos/:id', (req, res) => {
    // get the id
    let id = req.params.id;
    // validate the id,not valid?404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send({});
    }

    // rem,ove todo bu id
    Todo.findByIdAndRemove(id).then((todo) => {
        if (todo) {
            return res.status(200).send({ todo });
        } else {
            return res.status(404).send({});
        }
    }, (e) => {
        console.log(e);
        return res.status(404).send({});
    });
    // success// if no doc,send 404// if doc,send doc back with 200
    // error // 404 with empty body

});

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;

    // only take the need information
    let body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send({});
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;

    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then((todo) => {

            if (!todo) {
                res.status(400).send({});
            }
            res.send({ todo });

        }).catch((e) => {
            res.status(400).send({});
        });


});



app.listen(port, () => {
    console.log('Started on port ' + port);
});


module.exports = { app };