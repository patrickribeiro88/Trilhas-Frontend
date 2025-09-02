const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [
    { id: 1, nome: 'João', email: 'joao@example.com'},
    { id: 2, nome: 'Maria', email: 'maria@example.com'}
];

//Rota GET para retornar todos os usuários
app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

//Rota GET para adicionar um novo usuário
app.post('/api/usuarios', (req, res) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome,
        email: req.body.email
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

//Rota DELETE para remover um usuário
app.delete('/api/usuarios/:id', (req, res) => {
    const usuarioIndex = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (usuarioIndex === -1) return res.status(404).send('Usuário não encontrado');
    const usuarioRemovido = usuarios.splice(usuarioIndex, 1);
    res.json(usuarioRemovido);    
});

//Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

export default {
    data() {
        return {
            usuarios: [],
            novoUsuario: { nome: '', email: '' }

        };
    },
    methods: {
        async carregarUsuaruios() {
            const resposta = await axios('http://localhost:3000/api/usuarios');
            this.usuarios = resposta.data;
        },
        async adicionarUsuario() {
            await axios.post('http://localhost:3000/api/usuarios', this.novoUsuario);
            this.carregarUsuaruios();
        }
    },
    mounted() {
        this.carregarUsuaruios();
    }

};

