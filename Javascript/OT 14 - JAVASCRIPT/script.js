// Desafio 03

// Declarar uma variável qualquer, que receba um objeto vazio.

let minhaVariavel = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem
ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let pessoa = {
    nome: "João",
    sobrenome: "Silva",
    sexo: "Masculino",
    idade: 30,
    altura: 1.75,
    peso: 70,
    andando: false,
    caminhouQuantosMetros: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que for chamado.
*/
pessoa.fazerAniversario = function(){
    this.idade++;
}
pessoa.fazerAniversario();
console.log(pessoa.idade);

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes características:
- Esse método deve receber por parâmetro um valor que representará a quantidade de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor booleano que representa "verdadeiro";
*/

pessoa.andar = function(metros){
    this.caminhouQuantosMetros += metros;
    this.andando = true;
}
pessoa.andar(10);
console.log(pessoa.caminhouQuantosMetros);
console.log(pessoa.andando);

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function(){
    pessoa.andando = false;
}
pessoa.parar();
console.log(pessoa.andando);

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function(){
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
}
console.log(pessoa.nomeCompleto()); //Olá! Meu nome é João Silva!

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function(){
    return `Olá, eu tenho ${this.idade} anos!`;
}
console.log(pessoa.mostrarIdade()); //Olá, eu tenho 31 anos!

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function(){
    return `Eu tenho ${this.peso}Kg.`;
}
console.log(pessoa.mostrarPeso()); //Eu tenho 70Kg.

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function(){
    return `Minha altura é ${this.altura}m`
}
console.log(pessoa.mostrarAltura()); //Minha altura é 1.75m

//Faça a `pessoa` fazer 3 aniversários.

for (let i=0; i<3; i++){
    pessoa.fazerAniversario();
}
console.log(pessoa.idade); // 34

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x, com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(5);
pessoa.andar(20);
pessoa.andar(15);
console.log(pessoa.caminhouQuantosMetros); // 50
console.log(pessoa.andando); // true

// Se a pessoa ainda está andando, faça-a parar.
pessoa.parar();
console.log(pessoa.andando); // false

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método
deve retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu
peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = function(){
    let textoSexo = this.sexo === "Feminino" ? "a" : "o";
    let textoIdade  = this.idade === 1 ? "ano" : "anos"
    let textoMetro = this.caminhouQuantosMetros === 1 ? "metro" : "metros"

    return `Olá, eu sou ${textoSexo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${textoIdade}, tenho ${this.altura}m de altura, meu peso é de ${this.peso}Kg e só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${textoMetro}!`;
}
// Agora, apresente-se ;)

console.log(pessoa.apresentacao());