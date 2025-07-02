/* 1) Classificação por Idade: Escreva um programa que classifica uma pessoa
em categorias de idade: 'criança' (menos de 13 anos), 'adolescente' (entre 13 e
17 anos), 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a
estrutura if/else/else if.*/

let idade = 16;

if(idade < 0){
    console.log("Essa pessoa ainda não nasceu");
}
else if(idade <= 13){
    console.log("Você é uma criança.");
}
else if(idade > 13 && idade <= 17){
    console.log("Você é um adolescente.");
}
else if(idade > 18 && idade <= 64){
    console.log("Você é um adulto.");  
}
else{
    console.log("Você é um idoso.");
}

/* 2) Jogo de Adivinhação com Switch: Desenvolva um jogo simples de
adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. Use
switch para verificar a escolha e imprimir se acertou ou não.*/

let = nroSorteado = 1;

switch (nroSorteado){
    case 1:
        console.log("Você acertou o número");
        break;
    
    case 2:
        console.log("Você errou o número");
        break;

    case 3:
        console.log("Você errou o número");
        break;
    
    case 4:
        console.log("Você errou o número");
        break;

    case 5:
        console.log("Você errou o número");
        break;
    
    default:
        console.log("Você errou o número");
}

/* 3) Avaliação de Notas: Crie um programa que, dada uma nota de um aluno,
classifica a nota como 'Reprovado' (menos de 6), 'Recuperação' (entre 6 e 7),
ou 'Aprovado' (mais de 7). Use switch.*/

let nota = 5;

switch (true) {

    case (nota < 0 || nota > 10):
        console.log("Nota inválida.");
        break;

    case (nota >= 7):
        console.log("Aprovado.");
        break;

    case (nota >= 6 ):
        console.log("recuperação");
        break;

    default:
        console.log("Reprovado.");

}