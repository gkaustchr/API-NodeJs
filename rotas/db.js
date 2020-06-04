/*const mysql = require("mysql");
const dbConfig = require("./../banco/database");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;*/
const pg  = require('pg');
const cliente = new pg.Client({
    user: 'urraxlvlfdnhbs',
    host: 'ec2-3-231-16-122.compute-1.amazonaws.com',
    database: 'd2104pj32c4hmd',
    password: '1cef42cfa48b2faeffa2b2f08fdaff16fdc452b7a4cbaa6ebbeab9feac18ef01',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
    
})
module.exports = cliente;