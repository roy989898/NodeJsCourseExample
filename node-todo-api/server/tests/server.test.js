const expect = require('expect');
const request = require('supertest');
const ObjectID = require('mongodb').ObjectID;

const app = require('../server').app;
const Todo = require('../models/todo').Todo;
const User = require('../models/user').Todo;

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 334
}];
// delete all the Todo
beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => { done(); });

});


describe('POST /todos', () => {
    it('should be create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            }).end((err, res) => {

                // check no error retyrn
                if (err) {
                    return done(err);
                }

                // check the database is correct
                Todo.find({ text }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create todo with invalid body data', (done) => {

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {

                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();

                }).catch((e) => { done(e); });
            });
    });

});


describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .send()
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);

    });
});

describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
            .get('/todos/' + todos[0]._id.toHexString())
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            }).end(done);

    });

    it('should return 404 if todo not found', (done) => {
        // make sure you get 404back
        request(app).get('/todos/' + new ObjectID().toHexString())
            .expect(404).end(done);

    });

    it('should return 404 for non-object ids', (done) => {
        // todo /todos/123
        request(app).get('/todos/' + 12345)
            .expect(404).end(done);
    });
});

describe('Delete /todos/:id', () => {
    it('should remove a todo', (done) => {
        let idString = todos[1]._id.toHexString();
        request(app)
            .delete('/todos/' + idString)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo._id).toBe(idString);

            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                // query database using findById 
                Todo.findById(idString)
                    .then((todo) => {
                        expect(todo).toNotExist();
                        done();
                    })
                    .catch((e) => { done(e); });
            });

    });

    it('should return 404 if todo not found', (done) => {
        let idString = new ObjectID().toHexString();

        request(app)
            .delete('/todos/' + idString)
            .expect(404)
            .expect((res) => {
                expect(res.body).toEqual({});
            })
            .end(done);



    });

    it('should return 404 if id not valid', (done) => {

        let idString = 'asdasdasd';

        request(app)
            .delete('/todos/' + idString)
            .expect(404)
            .expect((res) => {
                expect(res.body).toEqual({});
            })
            .end(done);

    });



});

describe('PATCH /todos/:id', () => {

    it('should update the tdo', (done) => {
        // grab id of first item
        let idString = todos[0]._id.toHexString();

        // 'text', 'completed'
        let text = 'updated';
        let completed = true;

        request(app).patch('/todos/' + idString)
            .send({
                completed,
                text
            })
            .expect(200)
            .expect((res) => {

                expect(res.body.todo.completed).toBe(true);
                expect(res.body.todo.text).toBe(text);
                expect(res.body.todo.completedAt).toBeA('number');

            })
            .end(done);


        // update text,set completed true
        // 200
        // text is change ,completed is true,completed is a number  .toBeA
    });

    it('should clear completedAt when todo is not completed', (done) => {
        // grab id of second todo item
        let idString = todos[1]._id.toHexString();
        let text = 'changed';
        let completed = false;
        // update text ,set completed to false
        request(app)
            .patch('/todos/' + idString)
            .send({
                text,
                completed
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.completed).toBe(completed);
                expect(res.body.todo.text).toBe(text);
                expect(res.body.todo.completedAt).toNotExist();
            })
            .end(done);

        // 200
        // text is changed,completed false,completed is nukk  .NoExist

    });

});
