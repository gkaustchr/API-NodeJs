const {Pool} =  require('pg');

const pool = new Pool({
    host: 'localhost', user: 'postgres', password: '1234', database: 'guiabolso', port: '5432'
});
module.exports = { pool }