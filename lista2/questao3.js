const entrada = require("readline-sync")
let numero = parseInt(entrada.question("Digite seu numero: "))
if (numero >= 0) {
	console.log("É Positivo")
} else {
	console.log("É Negativo")
}