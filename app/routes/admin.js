module.exports = function(app){
    app.get('/adicionarNoticias', function(req, res){
        app.app.controllers.admin.formsAdicionaNoticia(app, req, res); // Chamando o controller
    });

    app.post('/noticias/salvar', function(req, res){
        app.app.controllers.admin.noticias_salvar(app, req, res); // Chamando o controler
    });

    app.post('/atualizar', function(req, res) {
        app.app.controllers.admin.noticias_atualizar(app, req, res);
    })
}

