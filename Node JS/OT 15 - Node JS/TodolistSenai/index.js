const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const { Script } = require('vm');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar pão'];

app.get('/', (req, res) => {
    res.render('index', { tasksList: tasks });
});

app.post('/', (req, res) => {
    const task = req.body.task;

    // verifica se a tarefa recebida não é nula e se não contém apenas espaços em branco
    if (task && task.trim() !== '') {
        tasks.push(task.trim()); //Usar trim() aqui também garante que não haja espaços em branco desnecessários.
    }
    res.redirect('/');
    // Redirecionar de volta para a rota principal '/
});
app.get('/deletar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < tasks.length) {
        tasks.splice(id, 1);
        // Remover o item do array na posição id
    }
    res.redirect('/');
    // Redirecionar de volta para a rota principal '/'
});

app.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000 ');
});
