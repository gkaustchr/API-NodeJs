const express = require('express');
const router = express.Router();
const sql = require("../db.js");
const {Pool} =  require('pg');
//const db = require('../../banco/db');

const pool = new Pool({
    host: 'ec2-34-225-162-157.compute-1.amazonaws.com', 
    user: 'hzzzmldlaiilod', 
    password: 'df13f79ffcb41b78ab699e0c83ed0b2242a46998452f695801960aadfa537ecb', 
    database: 'd9pkdpcs2h6s3m', 
    port: '5432',
    ssl:{
        rejectUnauthorized: false
    }
});


// Retorna todos as normas
router.get('/', async(req, res, next) =>{
    await pool.query('SELECT * FROM resenhas;', function (error, results, fields){
        if(error) throw error;
        if(results.rows != ""){
            res.end(JSON.stringify(results.rows))
        }else{
            res.status(404).send({
                mensagem: "Nenhuma resenha cadastrada",
                status: 404
            });
        }
    });
});


//Lista Todos Texto da Norma x
router.get('/:id', async(req, res, next) => {
    await pool.query('select * from resenhas where id = $1', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        if(results.rows != ""){
            res.end(JSON.stringify(results.rows))
        }else{
            res.status(404).send({
                mensagem: "Resenha não encontrado",
                id: req.params.id,
                status: 404
            });
        }
    });
});

//SELECT ConteudoNormas por IdNormas
router.get('/:codigo/idcodigo/:idCodigo', async(req, res, next) => {
    await pool.query('select * from resenhas where codigo= $1 AND idCodigo= $2', [req.params.codigo, req.params.idCodigo] , function (error, results, fields) {
        if (error) throw error;
        if(results.rows != ""){
            res.end(JSON.stringify(results.rows))
        }else{
            res.status(404).send({
                mensagem: "Resenha selecionada não encontrado",
                codigo: req.params.codigo,
                idCodigo: req.params.idCodigo,
                status: 404
            });
        }
    });
});

//INSERE um Pedido
router.post('/', async (req, res) =>{
    var params  = req.body;
    console.log(params);
    await pool.query('INSERT INTO resenhas (idCodigo, codigo, tema, titulo, descricao, texto, pdf, autor, data, referencia, img, imgMobile, propaganda, linkVideo, linkDownload) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', 
    [params.idCodigo, params.codigo, params.tema, params.titulo, params.descricao, params.texto, params.pdf, params.autor, params.data, params.referencia, params.img, 
        params.imgMobile, params.propaganda, params.linkVideo, params.linkDownload], function (error, results, fields) {
      if (error) throw error;
      res.status(201).send({
        mensagem: "Resenha cadastrada com sucesso",
        codigo: req.params.codigo,
        idCodigo: req.params.idCodigo,
        status: 201
        });
    });
});
/*
//UPDATE de um Atributo ConteudoNormas
router.patch('/:id', (req, res, next) => {
    sql.query('UPDATE `conteudonormas` SET `idNorma`=?,`titulo`=?,`descricao`=?, `pdf`=?,`img`=? ,`imgMobile`=? where `id`=?', [req.body.idNorma, req.body.titulo, req.body.descricao, req.body.pdf, req.body.img, req.body.imgMobile, req.body.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});


//DELETE de um Conteudo Normas
router.delete('/:id', (req, res, next) => {
    console.log(req.body);
    sql.query('DELETE FROM `conteudonormas` WHERE `id`=?', [req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end('Conteudo das Norma has been deleted!');
     });
});
*/
module.exports = router;