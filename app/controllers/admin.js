module.exports.formsAdicionaNoticia = function(app, req, res) {
        res.render('admin/addNews', { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function(app, req, res){
        const noticia = req.body;
        // Validator
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo precisa ter entre 10 a 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty();
        req.assert('noticia', 'Noticia é obrigatória').notEmpty();

        const errors = req.validationErrors();
        if(errors) return res.render('admin/addNews', { validacao: errors, noticia: noticia });

        const connection = app.config.dbConnection();
        const noticiasModel =  new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
}

module.exports.noticias_atualizar = function(app, req, res){
        const noticia = req.body;
        const id_noticias = req.body.id_noticias;

        // Validator
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo precisa ter entre 10 a 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty();
        req.assert('noticia', 'Noticia é obrigatória').notEmpty();

        const errors = req.validationErrors();
        if(errors) return res.render('admin/updateNews', { validacao: errors, noticia: noticia });

        const connection = app.config.dbConnection();
        const noticiasModel =  new app.app.models.NoticiasDAO(connection);

        noticiasModel.atualizarNoticia(noticia, 
                noticiasModel.mostrarNoticias(id_noticias, function(error, result){
                        if (error) console.log(error);
                        res.redirect('/noticia?id_noticias=' + id_noticias);
                }));
}