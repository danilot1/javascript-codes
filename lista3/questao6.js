const entrada = require("readline-sync")
console.log("Jogo de adivinha")
let numero_secreto = 48
let numero_escolhido = -1
while (numero_escolhido != numero_secreto) {
    numero_escolhido = parseInt(entrada.question("Digite seu numero "))
    if (numero_escolhido == numero_secreto) {
        console.log("Voce acertou o numero secreto é,", numero_secreto)
    } else if (numero_escolhido != numero_secreto) {
        console.log("Voce errou, tente novamente")
    }
}