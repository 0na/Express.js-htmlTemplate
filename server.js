var express = require('express');
var app = express();

//Pierwsza linia mówi o tym, że będziemy używać Puga jako kreatora widoków. Druga linia zaznacza, że widoki (ang. views) będziemy trzymać w katalogu /views.
app.set('view engine', 'pug');
app.set('views', './views');


app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function (req, res) {
    res.render('first-template');
});
app.get('/main', function (req, res) {
    res.render('main');
});

app.get('/auth/google', function (req, res) {
    res.render('login');
});

var server = app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});