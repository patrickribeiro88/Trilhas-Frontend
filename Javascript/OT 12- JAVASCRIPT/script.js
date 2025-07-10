/*1. Criando uma Lista de Compras: Use o operador spread para combinar dois arrays de itens de supermercado em uma lista de compras.*/

let compras = ["arroz","feijão","macarão"];
let maisCompras = [...compras,"celola","tomate","alho"];
console.log(maisCompras);

/*2. Atualizando um Perfil de Usuário: Crie um objeto usuario com propriedades como nome e email. Use o operador spread para criar um novo objeto com os dados do usuário e uma propriedade adicional status.*/

let usuario = {nome: 'Patrick', email: 'patricktjf@gmail.com'};
let usuarioAtualizado = {...usuario, status: "ativo"};
console.log(usuarioAtualizado);

/*3. Festa de Aniversário: Crie uma função que aceita um número variável de nomes e os imprime como lista de convidados para uma festa de aniversário, usando o operador spread para coletar os nomes.*/

function criarLista(...convidados){
    for (let i = 0; i<convidados.length; i++){
        let nome = convidados[i];
        console.log(`${i+1}. ${nome}`);
    }
}
console.log("Convidados confirmados para a festa:");
criarLista("Leila","Bruno","Maria","Júlia","Eloisa");

/*4. Clonando um Array de Músicas: Dado um array de músicas, crie uma cópia do array usando o operador spread. Altere um elemento no array copiado e verifique se o array original permanece inalterado.*/

let musicas = ["Numb","Rubão","Só hoje"];
let copia = [...musicas];
copia[0] = "Amanhã";
console.log(musicas)
console.log(copia);

/*5. Mesclando Objetos com Informações Complementares: Crie dois objetos, um com informações básicas de um filme (título e diretor) e outro com informações complementares (ano e gênero). Use o operador spread para mesclar esses objetos em um único objeto filme.*/

let filme1 = {"Filme":"Parasita", "Diretor":"Bong Joon-ho"};
let filme2 = {"Ano":2019, "Gênero": "Suspense / Drama" };
let filmeCombinado = {...filme1, ...filme2 };
console.log(filmeCombinado);

/*6. Criando um Menu de Restaurante Variável: Faça uma função criarMenu que aceita vários itens (entradas, pratos principais, sobremesas) como arrays e usa o operador spread para criar um único array de menu.*/

function criarMenu(entradas, pratosPrincipais, sobremesas){
    let menuCompleto = [...entradas,...pratosPrincipais,...sobremesas];
    return menuCompleto;
}
let minhasEntradas = ["Bruschetta", "Salada", "Carpaccio"];
let meusPratosPrincipais = ["Risoto", "Salmão", "Bife à Parmegiana"];
let minhasSobremesas = ["Pudim", "Sorvete", "Mousse de Chocolate"];

let menuDoRestaurante = criarMenu(minhasEntradas, meusPratosPrincipais, minhasSobremesas);

console.log("Menu Completo");
console.log(menuDoRestaurante);


