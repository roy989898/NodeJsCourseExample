const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect toMongoDb');
    }

    /*    db.collection('Todos').findOneAndUpdate({
           _id: new ObjectID('596dc92e737c92cda983742c')
       }, {
           $set: {
               completed: true
           }
       }, {
           returnOriginal: false
       }).then((result) => {
           console.log(JSON.stringify(result, undefined, 2));
       }); */

    // change the name

    /*   db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('596c3acf96841620a4b90e7c')
    }, {
        $set: {
            name: 'Roy'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }); */
    // increase age by 1

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('596c3acf96841620a4b90e7c')
    }, {
        $inc: {
            age: 20
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });





    // db.close();

});