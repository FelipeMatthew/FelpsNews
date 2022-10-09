const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
// vai pegar os componentes do formulário e irá retornar em um arquivo json
// Retorna json com 3 funçoes - noticia, conexação e o callback

app.use(expressValidator());
// Onde o validador vai rodar

consign()
.include('app/routes') // Faz um scan das pastas do routes pega os modulos e inclue  no sevidor "APP" direto
.then('config/dbConnection.js') //Incluindo com o banco de dados no consign
.then('app/models') // Incluiu os models - Entidades do banco de dados
.then('app/controllers')
.into(app); // faz um scan no INCLUDE, pega esses modulos e coloca dentro do servidor  - App


module.exports = app;