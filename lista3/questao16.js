const entrada = require("readline-sync")
let salto
let media = salto / 5
let cn = 10000
for (i = 0; i < 5; i++) {
    salto = parseFloat(entrada.question("Digite a distancia dos saltos "))
} console.log("Media", media)
if (salto > cn) {
    cn = salto;
    console.log("Maiores ", cn)
}
else if (salto < cn) {
    cn = salto;
    console.log("Menor salto", cn)
}


