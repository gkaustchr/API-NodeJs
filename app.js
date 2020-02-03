const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const rotaProdutos = require('./rotas/produtos');
const rotaPedidos = require('./rotas/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));// pegar apenas dados simples
app.use(bodyParser.json());

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//CORS para acesso externo da API 
app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*'); // aceita todos os acessos
    res.header('Acces-Control-Allow-Header', 'Origin, X-Requrested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTION'){
        res.header('Acces-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});
// Quando não encontrar a Rota entra aqui
app.use((req, res, next) => {
    const erro = new Error('Caminho não encontrado');
    erro.status = 404;
    next(erro);
});

//Tratando erro
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;