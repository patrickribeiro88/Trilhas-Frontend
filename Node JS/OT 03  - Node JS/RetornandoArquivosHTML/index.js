var http = require('http');
var fs = require('fs');
const path = require('path'); // 1. Importe o módulo 'path'

const server = http.createServer(function(request, response) {

    // 2. Crie o caminho absoluto para o seu arquivo HTML
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, function(erro, conteudo) {
        if (erro) {
            // Se houver erro (como o ENOENT), ele será capturado aqui
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.end('Erro ao ler o arquivo HTML.');
            console.log(erro); // Mostra o erro no console do servidor
            return;
        }
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(conteudo);
        return response.end();
    });
});

server.listen(8081, () => {
    console.log("Servidor Rodando em http://localhost:8081");
});