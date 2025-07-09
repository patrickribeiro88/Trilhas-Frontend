/*3. Classe Estudante com Notas: Amplie a classe Estudante para incluir um array de notas. Adicione um método calcularMedia que retorna a média das notas.*/

class Estudante {
    constructor(notas) {
        this.notas = notas;
    }

    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma = soma + this.notas[i];
        }

        let media = soma / this.notas.length;

        return media;
    }
}
let estudante = new Estudante([10,7,8,9]);  // Instância da classe, passando as notas no construtor.
let mediaCalculada = estudante.calcularMedia(); //Chame o método a partir do objeto criado.
console.log(`A média do estudante é de ${mediaCalculada}`);