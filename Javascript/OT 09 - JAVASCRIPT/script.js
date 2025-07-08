/*1. Criar e Adicionar Valores ao Set: Crie um Set chamado frutas e
adicione nele três frutas diferentes. Depois, tente adicionar uma fruta
que já está no Set.*/

let frutas = new Set();
frutas.add('Maçã');
frutas.add('Banana');
frutas.add('Laranja');
frutas.add('Banana');

console.log(frutas);

// 2. Verificar Valores no Set: Use o método has para verificar se uma fruta específica está no seu Set frutas.

console.log(frutas.has('Banana'));

// 3. Remover Valores do Set: Use o método delete para remover uma fruta do seu Set frutas.

frutas.delete('Laranja');
console.log(frutas);

// 4. Limpar o Set: Use o método clear para limpar todo o seu Set frutas.

frutas.clear()
console.log(frutas)

// 5. Tamanho do Set: Crie um Set com vários valores e use a propriedade size para imprimir o número de elementos no Set.

meuSet = new Set([0,1,2,3,4,5,6,7,8,9,10]);
console.log(meuSet.size);

// 6. Iterar Sobre um Set: Use um loop for...of para iterar sobre o seu Set e imprimir cada valor.
 for(let valor of meuSet){
    console.log(valor);
 }

/* 7. Criar um Set a Partir de um Array: Crie um array com alguns valores duplicados. Em seguida, crie um Set a partir desse array para remover
as duplicatas.*/

let cestoFrutas = ['banana','manga','laranja','maçã','goiaba','banana','laranja'];
let frutasUnicas = new Set(cestoFrutas);
console.log([frutasUnicas]);


