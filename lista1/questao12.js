
const entrada = require("readline-sync")
var porcentagem = 0.75
let numero = parseFloat(entrada.question("Digite seu numero: "))
porcentagem = porcentagem * numero
console.log("A porcentagem é ", porcentagem)
