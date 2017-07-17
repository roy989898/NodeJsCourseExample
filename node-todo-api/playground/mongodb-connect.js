const MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect toMongoDb');
    }
    console.log('connect toMongoDb');
    /*  db.collection('Todos').insertOne({
         text: 'Something to do',
         completed: false
     }, (err, result) => {
 
         if (err) {
             return console.log('unable to insert');
         }
         console.log(JSON.stringify(result.ops, undefined, 2));
     }); */

    /*  db.collection('Users').insertOne({
         name: 'Andrew',
         age: 25,
         location: 'HK'
     }, (err, result) => {
         if (err) {
             return console.log('Unable to insert user');
         }
         console.log(JSON.stringify(result.ops, undefined, 2));
     });
  */
    db.close();
});