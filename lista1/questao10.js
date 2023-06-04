const entrada = require("readline-sync")
var area, pi = 3.14
let raio = parseFloat(entrada.question("Digite o raio da circunferencia: "))
area = pi * raio * raio
console.log("A área vale", area)