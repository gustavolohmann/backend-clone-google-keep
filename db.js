const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '',
    user: '',
    port: '',
    password: '',
    database: '',
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco:', err);
    } else {
        console.log('Conectado no banco de dados MySQL');
    }
});

module.exports = db;
