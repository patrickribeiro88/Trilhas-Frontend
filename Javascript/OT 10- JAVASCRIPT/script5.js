/*6. Classe ContaBancaria com Método de Saque: Na classe
ContaBancaria, adicione um método sacar que permite sacar um valor do saldo, garantindo que o saldo não fique negativo.*/

class ContaBancaria {
    #saldo
    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }
    getSaldo() {
        return this.#saldo;
    }
    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.#saldo}`);
        }
        else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }
}
let minhaConta = new ContaBancaria(200);
console.log(`Saldo inicial: R$${minhaConta.getSaldo()}`);

minhaConta.sacar(50);
minhaConta.sacar(160);
console.log(`Saldo final: R$${minhaConta.getSaldo()}`);


