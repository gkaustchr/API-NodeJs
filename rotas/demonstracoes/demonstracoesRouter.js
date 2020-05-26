const express = require('express');
const router = express.Router();
const sql = require("../db");


// Retorna todos as Leis
router.get('/', async(req, res, next) =>{
    await sql.query('SELECT * FROM demonstracoes;', function (error, results, fields){
        if(error) throw error;
        res.end(JSON.stringify(results))
    });
});

//SELECT Leis por ID
router.get('/:id', (req, res, next) => {
    sql.query('SELECT * FROM demonstracoes where id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});
/*
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