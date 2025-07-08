/*1. Criar uma Classe Animal: Crie uma classe Animal com um construtor
que recebe o nome e o som que o animal faz. Adicione um método
falar que imprime o som do animal.*/

class Animal{
    constructor(nome,som){
        this.nome = nome;
        this.som = som;    
    }
    falar(){
        console.log(`${this.nome} faz: ${this.som}`)

    }
}
