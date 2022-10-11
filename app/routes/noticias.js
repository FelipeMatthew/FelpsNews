module.exports = function(app){
    app.get('/noticias', function(req, res){
        app.app.controllers.noticias.noticias(app, req, res);
    });

    app.get('/noticia', function(req, res){
        app.app.controllers.noticias.noticia(app, req, res);
    });

    app.get('/excluir', function(req, res){
        app.app.controllers.noticias.excluir(app, req, res);
    })

    app.get('/editar'), function(req, res){
        app.app.controller.noticias.editar(app, req, res);
    }

    app.post('/busca', function(req, res) {
        app.app.controllers.noticias.busca(app, req, res);
    })
}