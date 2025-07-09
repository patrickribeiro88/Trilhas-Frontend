/*2. Classe Veículo com Método de Velocidade: Desenvolva uma classe Veiculo com propriedades como marca, modelo e velocidadeMaxima. Adicione um método descrever que imprime uma descrição do veículo.*/


class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    descrever() {
        console.log("Descrição do Veículo:");
        console.log(`  Marca: ${this.marca}`);
        console.log(`  Modelo: ${this.modelo}`);
        console.log(`  Velocidade Máxima: ${this.velocidadeMaxima}km/h`);
    } 
}
const meuCarro = new Veiculo("Ford","Mustang",250);
meuCarro.descrever();