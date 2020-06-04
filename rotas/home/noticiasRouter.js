const express = require('express');
const router = express.Router();
//const sql = require("../../banco/db");
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

// Retorna todos as Leis
router.get('/', async(req, res, next) =>{
    await pool.query('SELECT * FROM noticias ORDER BY id DESC;', function (error, results, fields){
        if(error) throw error;
        res.end(JSON.stringify(results.rows))
    });
});

//SELECT Leis por ID
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('ID : ' + id);
    pool.query('SELECT * FROM noticias WHERE id='+[id]+'', function (error, results, fields) {
        if (error) throw error;
        if(results.rows != ""){
            res.end(JSON.stringify(results.rows));
        }else{
            res.status(404).send({
                mensagem: "Nenhuma notícia encontrada",
                codigo: id
            })
        }
        
    });
});

// Pesquisa Por Comparação SELECT * FROM `noticiahome` WHERE descricao LIKE '%mais%' OR titulo LIKE '%que%'
/*
//
//

//INSERE um Pedido
router.post('/', (req, res) =>{
    var params  = req.body;
    console.log(params);
    sql.query('INSERT INTO normas SET ?', params, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

/

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
});*/

module.exports = router;