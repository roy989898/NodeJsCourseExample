const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect toMongoDb');
    }

    // deleteMany

    db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });

    // deleteOne
    db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
        console.log(result);
    });

    // findOneAndDelete, returning the deleted document
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    });


    // db.close();

});