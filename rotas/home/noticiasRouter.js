const express = require('express');
const router = express.Router();
//const sql = require("../../banco/db");
const {Pool} =  require('pg');

const pool = new Pool({
    host: 'localhost', user: 'postgres', password: '1234', database: 'guiabolso', port: '5432'
});

// Retorna todos as Leis
router.get('/', async(req, res, next) =>{
    await pool.query('SELECT * FROM noticiahome ORDER BY id DESC;', function (error, results, fields){
        if(error) throw error;
        res.end(JSON.stringify(results.rows))
    });
});

//SELECT Leis por ID
router.get('/:id', (req, res, next) => {
    pool.query('SELECT * FROM noticiahome WHERE id='+[req.params.id]+'', function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results.rows));
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