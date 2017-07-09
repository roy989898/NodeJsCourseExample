const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'ROy',
        old: '4'
    });
});



app.get('/about', (req, res) => {
    res.send('About page');
});


app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable HandleMessage'
    });
});
app.listen(3000, () => {
    console.log('Server on port 3000');
});