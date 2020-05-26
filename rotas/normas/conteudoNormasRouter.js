const express = require('express');
const router = express.Router();
const sql = require("../db.js");


// Retorna todos as normas
router.get('/', async(req, res, next) =>{
    await sql.query('SELECT * FROM conteudonormas;', function (error, results, fields){
        if(error) throw error;
        res.end(JSON.stringify(results))
    });
});


//Lista Todos Texto da Norma x
router.get('/:id', (req, res, next) => {
    sql.query('select * from conteudonormas where idNorma=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//SELECT ConteudoNormas por IdNormas
router.get('/:idNorma/conteudo/:idConteudo', (req, res, next) => {
    sql.query('select * from conteudonormas where idNorma=? AND id=?', [req.params.idNorma, req.params.idConteudo] , function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});
/*
//INSERE um Pedido
router.post('/', (req, res) =>{
    var params  = req.body;
    console.log(params);
    sql.query('INSERT INTO conteudonormas SET ?', params, function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
});

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