// importa o módulo de Sistema de Arquivos (File System) do Node.js e o atribui à variável fs.
var fs = require("fs"); 

var novoTexto = 'Olá Node.JS! UNISENAI 2023';

// A função writeFile substitui o conteúdo do arquivo
fs.writeFile('novo.txt', novoTexto, function (err) {
    if (err) throw err;

    console.log('Arquivo atualizado com sucesso!');

    //Função rename para renomear o arquivo
    fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function (err) {
        if (err) throw err;
        console.log('Arquivo renomeado com sucesso!');

        //Função unlink para deletar o arquivo.
        fs.unlink('ArquivoNovoRenomeado.txt', function (err) {
            if (err) throw err;
            console.log('Arquivo deletado com sucesso!');

            fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err) {
                if (err) throw err;
                console.log('Arquivo "novo.txt" criado novamente com sucesso!');
            });
        })
    })
})




