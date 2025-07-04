/*1. Criar e Adicionar Pares Chave-Valor no Map: Crie um Map chamado
livros e adicione nele três pares de chave-valor, onde a chave é o
título do livro e o valor é o autor.*/

let livros = new Map();

livros.set('Cem Anos de Solidão',' Gabriel García Márquez');
livros.set('Dom Casmurro',' Machado de Assis');
livros.set('1984',' George Orwell');

/*2. Acessar Valor no Map: Acesse o valor associado a uma das chaves no
Map livros que você criou e imprima o nome do autor.*/

console.log(livros.get('Dom Casmurro'));

/*3. Iterar Sobre um Map: Use um loop for...of para iterar sobre o Map
livros e imprimir todos os pares chave-valor.*/

for (let[chave,valor] of livros){
    console.log(`${chave}:${valor}`);
}

/*4. Usando Métodos do Map: size, delete, has: No seu Map livros, use o
método size para imprimir o número de livros, delete para remover um
livro pelo título e has para verificar se um livro ainda está no Map.*/

console.log(livros.size);
livros.delete('1984');
console.log(livros.has('1984'));


