const entrada = require("readline-sync")
let idadeirmao1 = parseInt(entrada.question("Digite a idade do primeiro irmao "))
let idadeirmao2 = parseInt(entrada.question("Digite a idade do segundo irmao "))
let idadeirmao3 = parseInt(entrada.question("Digite a idade do terceiro irmao "))
var soma = idadeirmao2 + idadeirmao3
if (idadeirmao1 < soma) {
    console.log("verdadeiro")
} else if (idadeirmao1 > soma) {
    console.log("Falso")
}
