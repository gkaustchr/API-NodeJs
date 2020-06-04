const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
//const creatTable = require('./banco/createTables')

//Rotas
const normasRouter = require('./rotas/normas/normasRouter');
const conteudoNormasRouter = require('./rotas/normas/conteudoNormasRouter');
const artigosNormasRouter = require('./rotas/normas/artigoNormasRouter');

const leisRouter = require('./rotas/leis/leisRouter');
const artigosLeisRouter = require('./rotas/leis/artigoLeisRouter');


const noticiaHomeRouter = require('./rotas/home/noticiasRouter')
const artigosHomeRouter = require('./rotas/home/artigoRouter')

const demonstracoesRouter = require('./rotas/demonstracoes/demonstracoesRouter');
const artigosDemonstracoesRouter = require('./rotas/demonstracoes/artigoDemonstracoesRouter');

const regimeRouter = require('./rotas/regime/regimeRouter');
const artigosRegimeRouter = require('./rotas/regime/artigoRegimeRouter');

const impostosRouter = require('./rotas/impostos/impostosRouter');
const artigosImpostosRouter = require('./rotas/impostos/artigoImpostosRouter');


//Boddy Parse Tratando Dados
app.use(bodyParser.urlencoded({ extended: false}));// pegar apenas dados simples
app.use(bodyParser.json());

//CORS para acesso externo da API 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin); // aceita todos os acessos
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', 'true');

    if(req.method === 'OPTION'){
        res.header("Access-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET");
        return res.status(200).send({});
    }
    next();
});

//Chamando Rotas
app.use('/normas', normasRouter);
app.use('/conteudoNormas', conteudoNormasRouter);
app.use('/artigosNormas', artigosNormasRouter);

app.use('/leis', leisRouter);
app.use('/artigosLeis', artigosLeisRouter);

app.use('/demonstracoes', demonstracoesRouter);
app.use('/artigosdemonstracoes', artigosDemonstracoesRouter);

app.use('/noticias', noticiaHomeRouter);
app.use('/artigos', artigosHomeRouter);

app.use('/regimes', regimeRouter);
app.use('/artigosregime', artigosRegimeRouter);

app.use('/impostos', impostosRouter);
app.use('/artigoimpostos', artigosImpostosRouter);
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