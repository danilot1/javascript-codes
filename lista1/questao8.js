const entrada = require("readline-sync")
let lado = parseFloat(entrada.question("Qual o valor do lado do quadrado ? "))
var area = lado * lado
console.log("A área do quadrado é", area)
