/*3. Criar um Método em um Objeto: Crie um objeto chamado calculadora
com um método soma que aceite dois números e retorne a soma deles.*/

let calculadora = {

    soma: function (num1, num2) {
        return num1 + num2;
    }
};
let resultadoSoma = calculadora.soma(10, 15);
console.log(`O resultado da soma é ${resultadoSoma}`);
