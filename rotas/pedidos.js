const express = require('express');
const router = express.Router();

//GET de Todos os Pedidos
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Pedidos Encontrado'
    });
});

//INSERE um Pedido
router.post('/', (req, res, next) =>{
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };
    res.status(201).send({
        mensagem: 'INSERIDO com Sucesso',
        insert: pedido
    });
});

//SELECT Pedido por ID
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o id Especial',
            id: id
        });    
    }else{
        res.status(200).send({
            mensagem: 'Usando o GET de um Pedido Exclusivo',
            id: id
        });
    }
});

//UPDATE de um Atributo Pedido
router.patch('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    res.status(201).send({
        mensagem: 'UPDATE realizado com Sucesso',
        id: id
    });
});


//DELETE de um Produto
router.delete('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;
    res.status(201).send({
        mensagem: 'Pedido DELETADO com Sucesso',
        id: id
    });
});

module.exports = router;