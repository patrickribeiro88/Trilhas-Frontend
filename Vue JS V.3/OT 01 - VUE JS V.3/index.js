const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [{ id: 1, nome: "João" }, { id: 2, nome: "Maria" }];

//Rota GET
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

//Rota POST
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.listen(3000, () => {
    console.log('API rodando na porta 3000');

});

export default {
    data() {
        return {
            usuarios: [],
            novoUsuario: { id: '', nome: '' },
        };

    },
    methods: {
        async carregarUsuarios() {
            const resposta = await axios.get('http://localhost:3000/usuarios');
            this.usuarios = resposta.data;
        },
        async adicionarUsuario() {
            await axios.post('http://localhost:3000/usuarios', this.novoUsuario);
            this.carregarUsuarios(); //Atualiza a lista 
        }
    },
    mounted() {
        this.carregarUsuarios();
    }
};