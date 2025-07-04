/*5. Entendendo Referências de Objetos: Crie um objeto livro com
propriedades como titulo e autor. Em seguida, crie outra variável
que referencie o objeto livro e modifique a propriedade titulo.
Verifique se o objeto original foi alterado.*/

let livro = {
    titulo: 'Essencialismo',
    autor: 'Greg McKeown',
}
let outroLivro = livro;
outroLivro.titulo = 'Harry Potter';
console.log(livro.titulo)

/*6. Usando Métodos Avançados de Objeto: Dado um objeto, use o método
Object.keys() para listar todas as chaves do objeto. Repita o
processo com Object.values() para listar todos os valores.*/

console.log(Object.keys(livro));
console.log(Object.values(livro));


