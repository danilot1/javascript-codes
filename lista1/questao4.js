const entrada = require("readline-sync")
let disciplina1 = parseFloat(entrada.question("Digite seu nota "))
let disciplina2 = parseFloat(entrada.question("Digite sua nota "))
let disciplina3 = parseFloat(entrada.question("Digite sua nota "))
console.log("A média é " + (disciplina1 + disciplina2 + disciplina3) / 3)
