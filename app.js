const app = require('./config/server')();

const port = 8080;

app.listen(port, () =>{
    console.log(`Servidor Rodando na porta: ${port}`);
});