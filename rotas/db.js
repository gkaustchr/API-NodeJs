/*const mysql = require("mysql");
const dbConfig = require("./../banco/database");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;*/
const {Pool} =  require('pg');
const pool = new Pool({
  host: 'ec2-34-225-162-157.compute-1.amazonaws.com', 
  user: 'hzzzmldlaiilod', 
  password: 'df13f79ffcb41b78ab699e0c83ed0b2242a46998452f695801960aadfa537ecb', 
  database: 'd9pkdpcs2h6s3m', 
  port: '5432',
  ssl:{
      rejectUnauthorized: false
  }
});
module.exports = pool;