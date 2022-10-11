module.exports.noticias = function(app, req, res){
    const connection = app.config.dbConnection(); //Rotas
    const noticiasModel = new app.app.models.NoticiasDAO(connection); //Rotas

    noticiasModel.getNoticias(function(error, result){
        if(error) console.log(error);
        res.render('./noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = function(app, req, res){        
        const connection = app.config.dbConnection();
        const noticiasModel = new app.app.models.NoticiasDAO(connection);

        if(req.query.id_noticias){
            var id_noticias = req.query;
        } else{
            res.redirect('/noticias');
            return;
        }

        noticiasModel.getNoticia(id_noticias, function(error, result){
            if(error) console.log(error);
            res.render('noticias/noticia', { noticia: result });
        });
}

module.exports.busca = function(app, req, res) {
    const pesquisa = req.body.pesquisa;
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.buscaNoticias(pesquisa, function(error, result){
        if(error) console.log(error);
        res.render('noticias/noticias', { noticias: result });
    })
}

module.exports.excluir = function(app, req, res){
    const pesquisa = req.body.pesquisa;
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);

    if(req.query.id_noticias) {
        const id_noticias = req.query;
    }else{
        res.redirect('/noticias');
        return;
    }

    noticiasModel.excluirNoticia(id_noticias, function(error, result){
        if(error) console.log(error);
        res.redirect('/noticias');
    })
}

module.exports.editar = function(app, req, res){
    const pesquisa = req.body.pesquisa;
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);

    if(req.query.id_noticias) {
        const id_noticias = req.query.id_noticias;
    }else{
        res.redirect('/noticias');
        return;
    }

    noticiasModel.getNoticia(id_noticias, function(error, result){
        if(error) console.log(error);
        res.redirect('/admin/updateNews', {valdiacao: {}, noticia : result });
    })
}