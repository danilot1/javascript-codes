const entrada = require("readline-sync")
let numero = parseInt(entrada.question("Digite o seu numero "))
if (numero % 2 == 0) {
    console.log("par")
} else {
    console.log("impar")
}