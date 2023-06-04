const entrada = require("readline-sync")
let aux = 0
var peso = [5]
for (let i = 0; i < 5; i++) {
    aux = parseFloat(entrada.question("digite seu peso"))
    if (aux >= 43 && aux <= 55) {
        peso[i] = aux
    }
}
