// Desafio 05

/*
Crie uma variável qualquer, que receba um array com alguns valores
aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let times = ["Flamengo","Vasco","Fluminense","Botafogo","Palmeiras"];

//Crie uma função que receba um array como parâmetro, e retorne esse array.
function exibirTimes(lista){
    return lista;
}
console.log(exibirTimes(times));

//Imprima o segundo índice do array retornado pela função criada acima.
console.log(times[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o segundo, um número. A função deve retornar o valor de um índice do array que foi passado no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no segundo parâmetro.
*/
function buscarValor(valores,indice){
    return valores[indice];
}
let numeros = [10,20,30,40];

let valorEncontrado = buscarValor(numeros,2);
console.log(`O número no índice 2 é: ${valorEncontrado}`);

//Declare uma variável que recebe um array com 5 valores, de tipos diferentes.

let arrayTipos = ["Nome", 35, true, {cidade:"Joinville"}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último array criado.
*/
for(let i = 0; i < arrayTipos.length; i++){
    console.log(buscarValor(arrayTipos, i));
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
do livro. Dentro dessa função, declare uma variável que recebe um objeto com as seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos os livros.
*/
function book(nomeLivro){
    let todosLivros = {
    "O Hobbit": {
      quantidadePaginas: 310,
      autor: "J.R.R. Tolkien",
      editora: "HarperCollins",
    },
    "Duna": {
      quantidadePaginas: 688,
      autor: "Frank Herbert",
      editora: "Aleph",
    },
    "1984": {
      quantidadePaginas: 328,
      autor: "George Orwell",
      editora: "Companhia das Letras",
    },
  };
  if (nomeLivro === undefined){
    return todosLivros;
  }
  else{
    return todosLivros[nomeLivro];
  }
}
// Usando a função criada acima, imprima o objeto com todos os livros.
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro
qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let mostraPaginas = book("Duna").quantidadePaginas;
let nomeDolivro = "Duna";

console.log(`O livro ${nomeDolivro} tem ${mostraPaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
let mostrarAutor = book("1984").autor;
let nomeDoLivro1 = "1984";

console.log(`O autor do livro ${nomeDoLivro1} é ${mostrarAutor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
let mostrarEditora = book("O Hobbit").editora;
let nomeDoLivro2 = "O Hobbit";

console.log(`O livro ${nomeDoLivro2} foi publicado pela editora ${mostrarEditora}.`);


