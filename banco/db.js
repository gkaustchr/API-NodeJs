const {Pool} =  require('pg');

const pool = new Pool({
    host: 'ec2-3-231-16-122.compute-1.amazonaws.com', 
    user: 'urraxlvlfdnhbs', 
    password: '1cef42cfa48b2faeffa2b2f08fdaff16fdc452b7a4cbaa6ebbeab9feac18ef01', 
    database: 'd2104pj32c4hmd', 
    port: '5432',
    ssl:{
        rejectUnauthorized: false
    }
});
module.exports = { pool }
