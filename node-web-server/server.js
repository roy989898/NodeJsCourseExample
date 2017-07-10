const express = require('express');
const hbs = require('hbs');

let app = express();


app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'ROy',
        old: '4'
    });
});



app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});


app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable HandleMessage'
    });
});
app.listen(3000, () => {
    console.log('Server on port 3000');
});