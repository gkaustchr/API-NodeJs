const express = require('express');
const router = express.Router();
const {Pool} =  require('pg');

const pool = new Pool({
    host: 'localhost', user: 'postgres', password: '1234', database: 'produtos', port: '5432'
});

// Retorna todos os produtos
router.get('/', async(req, res, next) =>{
    const sql =  await pool.query('SELECT * FROM produto;');
    res.status(200).json(sql.rows);
    res.status(200).send({
        mensagem: 'SELECT realizado com Sucesso'
    });
});

//INSERE um Produto
router.post('/', async(req, res, next) =>{
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    const sql = await pool.query('INSERT INTO produto ( nome, preco) VALUES( $1, $2)' ,  [ produto.nome, produto.preco]);
    res.status(201).send({
        mensagem: 'INSERIR realizado com Sucesso',
        insert: produto
    });
});

//Retorna um produto pelo ID
router.get('/:id_produto', async(req, res, next) => {
    const id = req.params.id_produto;
    const sql = await pool.query('SELECT * FROM produto WHERE id = $1', [id]);
    if(sql.rows != ""){
        res.status(201).json({
            Produto: sql.rows

        });
        console.log(sql.rows);
    }else{
        res.status(404).send({
            Mensagem: 'Produto não encontrado'
        })
    }
});

//UPDATE de um Atributo Produto
router.patch('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(201).send({
        mensagem: 'UPDATE realizado com Sucesso',
        id: id
    });
});


//DELETE de um produto
router.delete('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    res.status(201).send({
        mensagem: 'Produto DELETADO com Sucesso',
        id: id
    });
});
module.exports = router;