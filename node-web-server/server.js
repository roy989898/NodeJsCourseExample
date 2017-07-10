const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

// MiddleWARE
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = now + ": " + req.method + ' ' + req.url;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append the log');
        }
    });
    next();//tell when the middware function done

});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    /* res.send({
         name: 'ROy',
         old: '4'
     });*/

    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Hello ~~'
    });
});



app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
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