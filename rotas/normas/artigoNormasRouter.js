const express = require('express');
const router = express.Router();
const sql = require("../db.js");


// Retorna todos os Artigos Normas
router.get('/', async(req, res, next) =>{
    await sql.query('SELECT * FROM artigonormas;', function (error, results, fields){
        if(error) throw error;
        res.end(JSON.stringify(results))
    });
});
//SELECT Artigo pelo IdArtigo
router.get('/artigo/:id', (req, res, next) => {
    sql.query('select * from artigonormas where id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

//SELECT ConteudoNormas por IdNormas
router.get('/:id', (req, res, next) => {
    sql.query('select * from artigonormas where idConteudo=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});
//SELECT ConteudoNormas por IdNormas
router.get('/norma/:id', (req, res, next) => {
    sql.query('select * from artigonormas where idNorma=? AND idConteudo = -1', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});

/*

//INSERE um Pedido
router.post('/', (req, res) =>{
    var params  = req.body;
    console.log(params);
    sql.query('INSERT INTO artigonormas SET ?', params, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});



//UPDATE de um Atributo ConteudoNormas
router.patch('/:id', (req, res, next) => {
    sql.query('UPDATE `artigonormas` SET `idConteudo`=?,`titulo`=?,`descricao`=?, `text`=?, `autor`=?, `data`=?, `referencia`=?,`img`=? ,`imgMobile`=? ,`idNorma`=? where `id`=?', [req.body.idConteudo, req.body.titulo, req.body.descricao, 
        req.body.texto, req.body.autor, req.body.data, req.body.img, req.body.imgMobile, req.body.idNorma, req.body.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});


//DELETE de um Conteudo Normas
router.delete('/:id', (req, res, next) => {
    console.log(req.body);
    sql.query('DELETE FROM `conteudonormas` WHERE `id`=?', [req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end('Artigo da Norma has been deleted!');
     });
});
*/
module.exports = router;