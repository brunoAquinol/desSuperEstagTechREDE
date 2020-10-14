const {validationResult} = require('express-validator');

//FUNÇÃO PARA
module.exports.indexBuild = function(req, res){
    res.render("index",{resultName: {}, validation:{}});
}


/*---------------------------------------------------
----- FUNÇÃO QUE TRATA E RESOLVE O DESAFIO ----------
---------------------------------------------------*/
module.exports.handleData = function(req, res){
    var data = req.body; //pega o valor do form e coloca em data
    const erros = validationResult(req); //valida se há erros pela função check(), do express-validator, que foi rodado em /routes/routes.js
    var err = erros.errors;
    
    if(!data.nome.length || !data.nome.trim()){//verifica se o campo está vazio ou se contém apenas espaços
        nome = "Mundo";
        res.render("index", {resultName: nome, validation:{}});
        return;
    }else if(!erros.isEmpty()){//verifica se há erros declarados pela validationResult e irá imprimir a msg se ouver
        res.render("index", {resultName: {}, validation: err});
    }else {//essa condição assume que o form tem valor alfabético e trata corrigindo erro de digitação e colocando o primeiro caracter do nome em maiúsculo
        change = data.nome.toLowerCase();
        nome = change.charAt(0).toUpperCase() + change.slice(1);
        res.render("index", {resultName: nome , validation:{}});
    }

   //console.log('Olá, '+ nome + '!');
}

