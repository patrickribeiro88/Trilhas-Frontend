// Desafio 01
// Declarar uma variável chamada `myvar`, sem valor.

// Após declarada, atribua o valor 10 à variável `myvar`.
let myvar  = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
soma = 15 + 8;
console.log(soma);

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma++;
console.log(soma);

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma = soma * 3;
console.log(soma);

// Qual é o valor da variável `soma` até aqui?
// R=  72

// Declare uma variável chamada `unisenai`, atribuindo à ela o valor booleano que representa `verdadeiro`.
let unisenai = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
let comida = ['arroz','feijão','ovo'];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
if (soma === myvar) {
  console.log("As variáveis são iguais em valor e tipo.");
} else {
  console.log("As variáveis NÃO são iguais em valor e/ou tipo.");
} 

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
if (myvar <= soma){
    console.log("A variável 'myvar' é IGUAL OU MENOR que a variável 'soma'")
}else{
    console.log("A variável 'myvar' é MAIOR que a variável 'soma'")
}

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

// Invoque a função criada acima, passando os parâmetros 10 e 2.

function divisao(num1,num2){
    let resultado = num1/num2;
    return resultado   
}
let resultadoDivisao = divisao(10,2)
console.log(resultadoDivisao);



