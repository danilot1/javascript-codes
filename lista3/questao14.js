const entrada = require("readline-sync")
let cn = 10000
for (i = 0; i <= 9; i++) {
    let numeros = parseInt(entrada.question("Digite seus numeros "))
    if (numeros < cn) {
        cn = numeros;
    }
}
console.log(cn)
