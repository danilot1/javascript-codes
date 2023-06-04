const entrada = require("readline-sync")
let numero1 = parseInt(entrada.question("digite o primeiro numero: "))
let numero2 = parseInt(entrada.question("digite o segundo numero: "))
let numero3 = parseInt(entrada.question("digite o terceiro numero: "))
if (numero1 > numero2 & numero1 > numero3) {
    console.log("O número maior é: ", numero1, "\n")
}
else if (numero2 > numero1 & numero2 > numero3) {
    console.log("O número maior é: ", numero2, "\n")
}
else if (numero3 > numero1 & numero3 > numero2) {
    console.log("O número maior é: ", numero3, "\n")
}
if (numero1 < numero2 & numero1 < numero3) {
    console.log("O número menor é: ", numero1, "\n")
}
if (numero2 < numero1 & numero2 < numero3) {
    console.log("O número menor é: ", numero2, "\n")
}
if (numero3 < numero1 & numero3 < numero2) {
    console.log("O número menor é: ", numero3, "\n")
}
