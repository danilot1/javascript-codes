const entrada = require("readline-sync")
let tl, as, ef = parseFloat(entrada.question("Digite suas notas "))
var media = tl + as + ef / 3
if (media < 4) {
    console.log("reprovado")
} else if (media <= 4 & media < 7) {
    console.log("recuperação")
} else if (media >= 7) {
    console.log("Aprovado")
}
