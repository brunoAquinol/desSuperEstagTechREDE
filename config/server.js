const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
module.exports = () =>{
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './views');

    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({extended: true}));

    consign().include('routes')
    .then('controller')
    .into(app);


    return app;
}