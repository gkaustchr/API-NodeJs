CREATE DATABASE produto;
CREATE TABLE produto(
    id SERIAL PRIMARY KEY,
    nome VARCHAR (40),
    preco FLOAT
);

INSERT INTO produto (nome, preco) VALUES 
('Caneta', 2.00),
('Lápis', 1.50);

SELECT * FROM produto;