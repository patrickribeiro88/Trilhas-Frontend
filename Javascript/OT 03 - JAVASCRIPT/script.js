// 1. Criando um loop: Crie um loop for que imprima números de 0 a 10.
for (let i = 0; i < 10; i++){
    console.log(i);
}

/* 2. Loop com condição: Crie um loop for que imprima somente números
ímpares de 0 a 20.*/
for (let i = 0; i < 20; i++){
    if(i % 2 ===0 ){
        continue;
    }
    console.log(i);
}

// 3. Usando while: Crie um loop while que imprima números de 0 a 10.
let i = 0; while(i < 10){
    console.log(i); i++;
}

/* 4. Interrompendo um loop: Crie um loop for que imprima números de 0 a
100, mas interrompa a execução quando chegar ao número 50.*/
for(let i= 0; i < 100; i++){
    if(i===50){
        break;
    }
    console.log(i);
}

/* 5. Pulando uma iteração: Crie um loop for que imprima números de 0 a
20, mas pule a impressão do número 13.*/
for(let i=0; i<= 20; i++ ){
    if(i===13){
        continue;
    }
    console.log(i);
}

/* 6. Iterando um Array: Crie um array de nomes e use um loop for...of
para imprimir cada nome do array.*/
let nomes = ["Maria","Eloisa","Júlia","Leila","Bruno"];
for (let nome of nomes){
    console.log(nome);
}




