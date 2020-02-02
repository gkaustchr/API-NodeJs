const express = require('express');
const router = express.Router();

// Retorna todos os produtos
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'SELECT realizado com Sucesso'
    });
});

//INSERE um Produto
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'INSERIR realizado com Sucesso'
    });
});

//Retorna um produto pelo ID
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o id Especial',
            id: id
        });    
    }else{
        res.status(200).send({
            mensagem: 'Usando o GET de um produto Exclusivo',
            id: id
        });
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