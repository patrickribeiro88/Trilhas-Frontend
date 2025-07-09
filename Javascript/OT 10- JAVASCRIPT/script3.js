/*4. Método Estático para Conversão de Temperatura: Na classe Utilitario, adicione um método estático que converte temperatura de
Celsius para Fahrenheit.*/

class Utilitario{

    static converterTemperatura(Celsius){
        const fahrenheit = (Celsius * 9/5) + 32;
        return fahrenheit;
    }
}
// Chama o método diretamente na classe, sem precisar criar um objeto.
let temperatura = Utilitario.converterTemperatura(0);
console.log(`0°C é igual a ${temperatura}°F.`);
