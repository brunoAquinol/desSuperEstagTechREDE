const {check} = require('express-validator');

module.exports = app =>{
    
    app.get('/', function(req, res){
        app.controller.challenge.indexBuild(req, res);
    });

    
    //função post do form. 
    /*A função check() verifica se há apenas 
    letras no campo input 'nome'. É tratado 
    no arquivo /controller/challenge.js
    */
    app.post('/handleData', [check('nome').trim().isAlpha().withMessage('O nome só pode conter letras')], function(req, res){
        app.controller.challenge.handleData(req, res);
    });

}