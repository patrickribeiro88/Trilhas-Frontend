const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Esta linha é a única coisa que precisamos para servir nosso site.
// Ela aponta para a pasta 'express' e serve o 'index.html' automaticamente.
app.use(express.static(path.join(__dirname, 'express')));

// Inicia o servidor e exibe uma mensagem no console.
app.listen(port, () => {
    console.log(`Servidor funcionando! Acesse http://localhost:${port}`);
});