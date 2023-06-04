const entrada = require("readline-sync")
let numero1 = parseInt(entrada.question("digite seu numero "))
let numero2 = parseInt(entrada.question("digite seu numero "))
if (numero1 != numero2) {
    console.log("verdadeiro")
} else if (numero1 == numero2) {
    console.log("Falso")
}