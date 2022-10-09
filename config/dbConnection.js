var mysql = require('mysql');

var connMySQL = function(){
    
        console.log('A conexão com banco de dados foi estabelecida');
        return mysql.createConnection({
            host: 'localhost',
            user:'root',
            password:'password',
            database: 'portal_noticias'
        });

}

module.exports = function(){
    console.log('Autoload carregou o modulo de conexão');
    return connMySQL;
}