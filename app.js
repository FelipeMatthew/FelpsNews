const app = require('./config/sever');

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('SEVER ON');
    console.log('Porta 3000');
    console.log('URL: http://localhost:3000/');
})

