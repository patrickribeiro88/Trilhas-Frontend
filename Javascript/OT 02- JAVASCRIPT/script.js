let animais = [];

animais.push("coelho");
animais.push("cachorro");
animais.push("gato");
console.log(animais);

animais.shift();
console.log(animais);

animais.unshift("galinha","cavalo");
console.log(animais)

animais[1] = "girafa";
console.log(animais)

let frutas =["maçã","banana","tangerina","ameixa","abacaxi"];
let totalFrutas = frutas.length;
console.log(totalFrutas)

for (let i =0; i< frutas.length; i++){
    console.log(frutas[i]);
}