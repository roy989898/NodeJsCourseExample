const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect toMongoDb');
    }
    // query all
    console.log('connect toMongoDb');
    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    //  query only the document contain the completed: false value
    db.collection('Todos').find({ _id: new ObjectID('596c32e2ce9d9d04e8a68244') }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    //   count the doucment number
    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count', count);
    }, (err) => {
        console.log('unable to fetch todos', err);
    });

    db.collection('Users').find({ name: 'Tom' }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    });


    db.close();
});