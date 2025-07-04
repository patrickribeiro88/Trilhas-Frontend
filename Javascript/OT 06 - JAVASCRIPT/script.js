/*1. Criar e Acessar um Objeto: Crie um objeto chamado carro com
propriedades como marca, modelo e ano. Em seguida, acesse e
imprima a propriedade modelo do objeto.*/

let carro = {
    marca:'Fiat',
    modelo:'Argo',
    ano: 2021,
};
console.log(carro.modelo);

/*2. Adicionar e Modificar Propriedades de um Objeto: A partir do objeto
carro criado, adicione uma propriedade cor e modifique o ano do
carro. Imprima o objeto modificado.*/

carro.ano = 2022;
carro.cor = 'Prata';

console.log(carro)

/*4. Iterar Sobre as Propriedades de um Objeto: Dado um objeto, use um
loop for...in para iterar sobre todas as suas propriedades e imprimir
cada uma delas.*/

for (let chave in carro){
    console.log(`${chave}: ${carro[chave]}`);
}

