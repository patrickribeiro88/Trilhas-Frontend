// Desafio 02

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(a,b){
    return a + b;
}

/* Declare uma variável que receba a invocação da função criada acima,
passando dois números quaisquer por argumento, e somando `5` ao resultado
retornado da função.*/

resultadoSoma = soma(7,5);

// Qual o valor atualizado dessa variável? 
console.log(resultadoSoma+5);

// Declare uma nova variável, sem valor.
semValor = null

/* Crie uma função que adicione um valor à variável criada acima, e retorne a string: O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.*/

let valor = 0;

function adicionarValor(adicional) {
    valor += adicional;
    return `O valor da variável agora é ${valor}.`;
}
// Invoque a função criada acima.
// Qual o retorno da função? (5).

console.log(adicionarValor(5));

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função
deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando
`2` ao resultado da multiplicação.
*/

function verificarArgumentos(a,b,c){
    if (a == null || b == null || c == null){
        return "Preencha todos os valores corretamente!"
    }
    else{
        let resultadoMultiplicacao = a * b * c
        return resultadoMultiplicacao + 2
    }
}
// Invoque a função criada acima, passando só dois números como argumento.
console.log(verificarArgumentos(2,3));

// Qual o resultado da invocação acima? ('Preencha todos os valores corretamente!').

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(verificarArgumentos(2,3,4));

// Qual o resultado da invocação acima? (26).

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function verificarArg(a,b,c){
    
    if(a !==undefined && b === undefined && c === undefined){
        return a;
    }
    if(a !== undefined && b !== undefined && c === undefined){
        return a + b;
    }
    if(a !== undefined && b !== undefined && c !== undefined){
        return (a + b) / c
    }
    if(a === undefined && b === undefined && c === undefined){
        return false;
    }
    return null
}
/* Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.*/

console.log(verificarArg()); // false
console.log(verificarArg(1)); // 1
console.log(verificarArg(2,3)); // 5
console.log(verificarArg(1,2,3)); //1
