const entrada = require("readline-sync")
let numero = parseInt(entrada.question("Digite o seu numero: "))
if (numero % 2 == 0) {
    console.log("O numero é par")
} else {
    console.log("O numero é ímpar")
}