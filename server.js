var express = require('express');
var app = express();
var port = 8888;

app.set('view engine','ejs');

app.get('/', function(req, res) {
    res.render('page/index');
    });



app.listen(8888);

console.log("le serveur ecoute le port "+port);