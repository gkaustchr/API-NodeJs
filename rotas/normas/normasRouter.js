const express = require('express');
const router = express.Router();
const sql = require("../db");
const {Pool} =  require('pg');
//const db = require('../../banco/db');

const pool = new Pool({
    host: 'ec2-3-231-16-122.compute-1.amazonaws.com', 
    user: 'urraxlvlfdnhbs', 
    password: '1cef42cfa48b2faeffa2b2f08fdaff16fdc452b7a4cbaa6ebbeab9feac18ef01', 
    database: 'd2104pj32c4hmd', 
    port: '5432',
    ssl:{
        rejectUnauthorized: false
    }
});

// Retorna todos as normas
router.get('/', async(req, res, next) =>{
    await pool.query('SELECT * FROM normas;', function (error, results, fields){
        if(error) throw error;
        if(results.rows != ""){
            res.end(JSON.stringify(results.rows))
        }else{
            res.status(404).send({
                mensagem: "Nenhuma norma cadastrada",
                status: 404
            });
        }
    });
});
//SELECT Normas por ID
router.get('/:id', async(req, res, next) => {
    await pool.query('SELECT * FROM normas WHERE id= $1', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        if(results.rows != ""){
            res.end(JSON.stringify(results.rows))
        }else{
            res.status(404).send({
                mensagem: "Norma não encontrada",
                status: 404
            });
        }
    });
});

//INSERE um Pedido
router.post('/', async(req, res) =>{
    var params  = req.body;
    console.log(params);
    await pool.query('INSERT INTO normas (titulo, abreviacao, descricao, img, imgMobile, propaganda, linkVideo, linkDownload) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', 
    [params.titulo, params.abreviacao, params.descricao, params.img, 
        params.imgMobile, params.propaganda, params.linkVideo, params.linkDownload], function (error, results, fields) {
	  if (error) throw error;
	  res.status(201).send({
        mensagem: "Norma cadastrada com sucesso",
        status: 201
    });
	});
});



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

module.exports = router;