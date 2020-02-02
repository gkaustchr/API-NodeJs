const express = require('express');
const app = express();
const rotaProdutos = require('./rotas/produtos');
const rotaPedidos = require('./rotas/pedidos');

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

module.exports = app;