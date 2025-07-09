/*5. Jogo Simples com Classe: Crie uma classe Jogo com um método estático que gera um número aleatório e permite ao usuário adivinhar. O método retorna se o usuário acertou ou não.*/

class Jogo{
    static adivinhar(palpite){
        const nroSecreto = Math.floor(Math.random()*10) +1;

        console.log(`Seu palpite: ${palpite},número sorteado: ${nroSecreto}`);

        if (palpite === nroSecreto){
            return "Parabéns, você acertou!";
        }else {
            return "Que pena, você errou!";
        }  
    }
}
// Chama o método diretamente, passando seu palpite.
let resultado = Jogo.adivinhar(7);
console.log(resultado);