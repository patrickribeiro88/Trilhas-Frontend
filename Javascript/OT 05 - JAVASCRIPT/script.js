/* 1. Função que Calcula a Área de um Retângulo: Crie uma função que
calcula a área de um retângulo dado largura e altura.8 */

let largura = 10
let altura = 5

function calcularArea(largura, altura){
    let area = largura * altura;
    return area;
}
let areaCalculada = calcularArea(largura,altura);

console.log(areaCalculada);