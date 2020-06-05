const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
//const creatTable = require('./banco/createTables')

//Rotas
const normasRouter = require('./rotas/normas/normasRouter');
const conteudoNormasRouter = require('./rotas/normas/conteudoNormasRouter');

const leisRouter = require('./rotas/leis/leisRouter');


const noticiaHomeRouter = require('./rotas/home/noticiasRouter')
const artigosHomeRouter = require('./rotas/home/artigoRouter')

const demonstracoesRouter = require('./rotas/demonstracoes/demonstracoesRouter');

const regimeRouter = require('./rotas/regime/regimeRouter');

const impostosRouter = require('./rotas/impostos/impostosRouter');

const resenhasRouter = require('./rotas/resenha/resenha');


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
app.use('/conteudonormas', conteudoNormasRouter);

app.use('/leis', leisRouter);

app.use('/demonstracoes', demonstracoesRouter);

app.use('/noticias', noticiaHomeRouter);
app.use('/artigos', artigosHomeRouter);

app.use('/regimes', regimeRouter);

app.use('/impostos', impostosRouter);

app.use('/resenhas', resenhasRouter);

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
        mensagem: "Rotas da API Guia Bolso",
        GETnoticias: "/noticias",
        GETselecionarNoticia: "/noticias/id",    
        GETartigos: "/artigos",
        GETselecionarArtigo: "/artigos/id",
        GETnormas: "/normas",
        GETselecionarNorma: "/normas/id",
        DELETEdeletarNorma: "/normas/id",
        GETconteudoNormas: "/conteudonormas",
        GETselecionarConteudoNorma: "/conteudonormas/norma/id",
        GETleis: "/leis",
        GETselecionarLei: "/leis/id",
        GETregimes: "/regimes",
        GETselecionarRegimes: "/regimes/id",
        GETimpostos: "/impostos",
        GETselecionarImposto: "/impostos/id",
        GETresenha: "/resenhas",
        GETselecionarResenha: "/resenhas/id",
        GETselecionarResenhaConteudoPrincipal: "/resenhas/:codigo/idcodigo/:idCodigo",
       
    });
});

module.exports = app;