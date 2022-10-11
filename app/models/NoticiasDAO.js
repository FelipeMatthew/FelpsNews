class NoticiasDAO{
    constructor(connection){
        this._connection = connection;
    }

    getNoticias = function(callback){
        this._connection.query('select * from noticias ORDER BY data_criacao DESC', callback);
    }

    getNoticia = function(id_noticias ,callback){
        this._connection.query('select * from noticias where id_noticias ='+ id_noticias.id_noticias, callback);
    }

    salvarNoticia = function(noticia, callback){
        this._connection.query('insert into noticias set ?', noticia, callback);
    }

    getSeisUltimasNoticias = function(callback){
        this._connection.query('select * from noticias order by data_criacao desc limit 6', callback);
    }

    buscaNoticias = function(pesquisa, callback) {
        this._connection.query('select * from noticias where titulo like ?', '%' + pesquisa +'%', callback);
    }

    excluirNoticia = function(id_noticias, callback){
        this._connection.query('delete from noticias where id_noticias = ' + id_noticias.id_noticias, callback);
    }

    atualizarNoticia = function (noticia, callback) {
        this._connection.query("update noticias set titulo = '" + noticia.titulo +"', resumo = '" + noticia.resumo +"', autor = '"+ noticia.autor +"', noticia = '"+ noticia.noticia +"' where id_noticia = " + noticia.id_noticias, callback);
    }

    mostrarNoticias = function(id_noticias, callback) {
        this._connection.query('select * from noticias where id_noticias =' + id_noticias, callback);
    }
}

module.exports = function(){
    return NoticiasDAO;
}

