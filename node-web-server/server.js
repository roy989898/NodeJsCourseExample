const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
let app = express();
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

// MiddleWARE
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

/*app.use((req, res, next) => {
    res.render('maintenance.hbs');
});*/

app.use(express.static(__dirname + '/public'));

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
app.listen(port, () => {
    console.log('Server on port ' + port);
});