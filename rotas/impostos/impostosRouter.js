const express = require('express');
const router = express.Router();
const sql = require("../db");
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

// Retorna todos os Impostos
router.get('/', async(req, res, next) =>{
    await pool.query('SELECT * FROM impostos;', function (error, results, fields){
        if(error) throw error;
        if(results.rows != ""){
            res.end(JSON.stringify(results.rows))
        }else{
            res.status(404).send({
                mensagem: "Nenhum imposto cadastrado",
                status: 404
            });
        }
    });
});

//SELECT Regime por ID
router.get('/:id', async(req, res, next) => {
    await pool.query('select * from impostos where id= $1', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        if(results.rows != ""){
            res.end(JSON.stringify(results.rows))
        }else{
            res.status(404).send({
                mensagem: "Imposto não encontrado",
                id: req.params.id,
                status: 404
            });
        }
    });
});

//INSERE um Pedido
router.post('/', async(req, res) =>{
    var params  = req.body;
    console.log(params);
    await pool.query('INSERT INTO impostos (titulo, abreviacao, descricao, texto, pdf, referencia, img, imgMobile, propaganda, linkVideo, linkDownload) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', 
    [params.titulo, params.abreviacao, params.descricao, params.texto, params.pdf, params.referencia, params.img, 
        params.imgMobile, params.propaganda, params.linkVideo, params.linkDownload], function (error, results, fields) {
	  if (error) throw error;
	  res.status(201).send({
        mensagem: "Imposto cadastrado com sucesso",
        id: req.params.id,
        status: 201
        });
	});
});


/*
//UPDATE de um Atributo Normas
router.patch('/:id', (req, res, next) => {
    sql.query('UPDATE `customer` SET `nome`=?,`abreviacao`=?,`descricao`=?,`img`=? ,`imgMobile`=? where `Id`=?', [req.body.nome, req.body.abreviacao, req.body.descricao, req.body.img, req.body.imgMobile, req.body.Id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});


//DELETE de um Produto
router.delete('/:id', (req, res, next) => {
    console.log(req.body);
    sql.query('DELETE FROM `normas` WHERE `Id`=?', [req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end('Norma has been deleted!');
     });
});
*/
module.exports = router;