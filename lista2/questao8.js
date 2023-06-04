const entrada = require("readline-sync")
let cidade = entrada.question("Qual a sua cidade ? ")
let alcool = parseFloat(entrada.question("Qual o valor do alcool ? "))
let gasolina = parseFloat(entrada.question("Qual o valor da gasolica ?"))
if (alcool < 70 % gasolina) {
    console.log("Em ", cidade, " compensa abastecer com álcool")
} else {
    console.log("Em ", cidade, " não compensa abastecer com álcool")
}
