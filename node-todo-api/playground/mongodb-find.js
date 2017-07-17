const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect toMongoDb');
    }
    console.log('connect toMongoDb');
  
    db.close();
});