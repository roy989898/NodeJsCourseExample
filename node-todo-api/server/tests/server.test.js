const expect = require('expect');
const request = require('supertest');


const app = require('../server').app;
const Todo = require('../models/todo').Todo;
const User = require('../models/user').Todo;

beforeEach((done) => {
    Todo.remove({}).then(() => done());
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
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    console.log('finsih length');
                    expect(todos[0].text).toBe(text);
                    console.log('finsih text');
                    done();
                }).catch((e) => done(e));
            });
    });

});
