const entrada = require("readline-sync")
let nota1 = parseFloat(entrada.question("Digite suas nota: "))
let nota2 = parseFloat(entrada.question("Digite suas nota: "))
let nota3 = parseFloat(entrada.question("Digite suas nota: "))
var media = nota1 + nota2 + nota3 / 3
if (media >= 7) {
    console.log("voce passou")
} else {
    console.log("Voce não passou")
}
