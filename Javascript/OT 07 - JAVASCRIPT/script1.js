/*5. Map com Tipos de Chaves Diferentes: Crie um Map chamado colecao
que contém diferentes tipos de chaves (como string, number, object)
e seus respectivos valores.*/

let colecao = new Map();
colecao.set('Dom Casmurro', 'Machado de Assis');
colecao.set('30','1988');
let pessoaObj = {nome: 'Patrick'}
colecao.set(pessoaObj, 'Desenvolvedor');

console.log(colecao);
