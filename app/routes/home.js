module.exports = function(app){
    app.get('/', (req, res) => {
        app.app.controllers.home.index(app, req, res);
    });
}