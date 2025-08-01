import Express from 'express';

const app = Express();

app.get('/', (req, res) => 
    res.send("<h3>Rotas no Express</h3><p>Rota '/'</p>")
);
app.get('/sobre', (req, res) => 
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express</p>")
);
app.get('/users/:nome', (req, res) => //recebe o parâmetro nome
    res.send('Usuário: ' + req.paramsnome) //exibe o parâmetro nome
);
var carros = [
    {modelo:'Fiesta', marca:'Ford',preco: 30000},
    {modelo:'Saveiro', marca:'Volkswagen', preco: 40000},
    {modelo:'Onix', marca:'Chevrolet', preco: 50000},
    {modelo:'Civic', marca:'Honda', preco: 100000},
    {modelo:'Corolla', marca:'Toyota', preco: 120000},
    {modelo:'A3', marca:'Audi', preco: 150000},
    ];
app.use(Express.urlencoded({ extended: true }));

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    carros[(carros.length)] = name;
    return res.json([carros[(carros.length - 1)]]);
});
app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id]);
});
app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null; // deletar item
    return res.json(carros[id]);
});
    
app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
);




