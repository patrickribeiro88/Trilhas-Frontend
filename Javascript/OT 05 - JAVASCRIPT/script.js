/* 1. Função que Calcula a Área de um Retângulo: Crie uma função que
calcula a área de um retângulo dado largura e altura.8 */

let largura = 10;
let alturas = 5;

function calcularArea(largura, altura) {
    let area = largura * altura;
    return area;
}
let areaCalculada = calcularArea(largura, alturas);

console.log("A área do retângulo é de ",areaCalculada,"cm.");

/* 2. Função para Verificar Número Par: Faça uma função que recebe um
número e retorna true se for par e false se for ímpar.*/

let numero1 = 4;

function verificarNro(numero) {

    if (numero % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
let resultado = verificarNro(numero1);

if (resultado === true) {
    console.log("O número",numero1, "é par");
}
else {
    console.log("O número",numero1, "é ímpar");
}

/*  3. Converter Polegadas em Centímetros: Escreva uma função que
converte polegadas em centímetros.*/

let polegadas = 10;
const fatorConversao = 2.54;

function converterPolegadas(valorPolegadas,fator){
    let conversao = valorPolegadas * fator;
    return conversao;

}
let resultadoconversao = converterPolegadas(polegadas,fatorConversao);

console.log(polegadas,"polegadas, são", resultadoconversao.toFixed(2),"cm.");

// 4. IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).

let peso = 100;
let altura = 1.78;

function calcularICM(peso,altura){
    const imc = peso / (altura*altura);
    return imc;
}
let resultadoIMC = calcularICM(peso,altura);

console.log("O seu IMC é de",resultadoIMC.toFixed(2),"kg/m²");

/* 5. Maiúsculas para Minúsculas: Crie uma função que recebe uma string e
retorna a mesma string em letras minúsculas.*/

let texto = "PATRICK";
function converterMinuscula(txt){
    
    return txt.toLowerCase();
}
let textoMinusculo = converterMinuscula(texto);

console.log("O texto,",texto, "maiúsculo convertido para minúsculo ficou",textoMinusculo);

/* 6. Crie uma arrow function chamada multiplicaPorDez que recebe um
número como parâmetro e retorna o valor multiplicado por 10.*/

const multiplicaPorDez = (numero) => numero * 10;

let resultado1 = multiplicaPorDez(30);

console.log("O resultado de 30x10 =",resultado1);

let resultado2 = multiplicaPorDez(15);

console.log("O resultado de 15x10 =",resultado2);