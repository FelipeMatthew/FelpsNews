module.exports.index = (app, req, res) =>{

    const connection = app.config.dbConnection();
    const noticiasModel = new  app.app.models.NoticiasDAO(connection);

    noticiasModel.getSeisUltimasNoticias( (error, result) => {
        res.render('home/index', { noticias: result });
    })

} 
