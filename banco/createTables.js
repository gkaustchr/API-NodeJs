const db = require('../rotas/db');

async function createTables(){
    await db.connect();
    /*await db.query(`CREATE TABLE IF NOT EXISTS noticias  
        (id SERIAL PRIMARY KEY,
        tema VARCHAR(100) NOT NULL,   
        titulo VARCHAR(150) NOT NULL,
        descricao TEXT NOT NULL,
        texto TEXT NOT NULL,
        autor VARCHAR(150) NOT NULL,
        data DATE NOT NULL,
        referencia TEXT NOT NULL,
        img TEXT NOT NULL,
        imgMobile TEXT NOT NULL, 
        propaganda TEXT NOT NULL,
        linkVideo TEXT NOT NULL,
        linkDownload TEXT NOT NULL)`);
        
    await db.query(`CREATE TABLE IF NOT EXISTS artigos  
        (id SERIAL PRIMARY KEY,
        tema VARCHAR(100) NOT NULL,   
        titulo VARCHAR(150) NOT NULL,
        descricao TEXT NOT NULL,
        texto TEXT NOT NULL,
        autor VARCHAR(150) NOT NULL,
        data DATE NOT NULL,
        referencia TEXT NOT NULL,
        img TEXT NOT NULL,
        imgMobile TEXT NOT NULL, 
        propaganda TEXT NOT NULL,
        linkVideo TEXT NOT NULL,
        linkDownload TEXT NOT NULL)`);
    
    await db.query(`CREATE TABLE IF NOT EXISTS leis  
        (id SERIAL PRIMARY KEY,   
        titulo VARCHAR(150) NOT NULL,
        numero VARCHAR(150) NOT NULL,
        descricao TEXT NOT NULL,
        texto TEXT NOT NULL,
        pdf TEXT NOT NULL,
        referencia TEXT NOT NULL,
        img TEXT NOT NULL,
        imgMobile TEXT NOT NULL, 
        propaganda TEXT NOT NULL,
        linkVideo TEXT NOT NULL,
        linkDownload TEXT NOT NULL)`);

    await db.query(`CREATE TABLE IF NOT EXISTS demonstracoes  
        (id SERIAL PRIMARY KEY,   
        titulo VARCHAR(150) NOT NULL,
        abreviacao VARCHAR(150) NOT NULL,
        descricao TEXT NOT NULL,
        texto TEXT NOT NULL,
        pdf TEXT NOT NULL,
        referencia TEXT NOT NULL,
        img TEXT NOT NULL,
        imgMobile TEXT NOT NULL, 
        propaganda TEXT NOT NULL,
        linkVideo TEXT NOT NULL,
        linkDownload TEXT NOT NULL)`);

    await db.query(`CREATE TABLE IF NOT EXISTS impostos  
        (id SERIAL PRIMARY KEY,   
        titulo VARCHAR(150) NOT NULL,
        abreviacao VARCHAR(150) NOT NULL,
        descricao TEXT NOT NULL,
        texto TEXT NOT NULL,
        pdf TEXT NOT NULL,
        referencia TEXT NOT NULL,
        img TEXT NOT NULL,
        imgMobile TEXT NOT NULL, 
        propaganda TEXT NOT NULL,
        linkVideo TEXT NOT NULL,
        linkDownload TEXT NOT NULL)`);

    await db.query(`CREATE TABLE IF NOT EXISTS regimes  
        (id SERIAL PRIMARY KEY,   
        titulo VARCHAR(150) NOT NULL,
        abreviacao VARCHAR(150) NOT NULL,
        descricao TEXT NOT NULL,
        texto TEXT NOT NULL,
        pdf TEXT NOT NULL,
        referencia TEXT NOT NULL,
        img TEXT NOT NULL,
        imgMobile TEXT NOT NULL, 
        propaganda TEXT NOT NULL,
        linkVideo TEXT NOT NULL,
        linkDownload TEXT NOT NULL)`);*/

    await db.query(`CREATE TABLE IF NOT EXISTS normas  
        (id SERIAL PRIMARY KEY,   
        titulo VARCHAR(150) NOT NULL,
        abreviacao VARCHAR(150) NOT NULL,
        descricao TEXT NOT NULL,
        img TEXT NOT NULL,
        imgMobile TEXT NOT NULL, 
        propaganda TEXT NOT NULL,
        linkVideo TEXT NOT NULL,
        linkDownload TEXT NOT NULL)`);
    //await db.query(`DROP TABLE noticias`);
    await db.end();
    console.log('Tabela Criada');
}
	

createTables();
//module.exports = createTables;