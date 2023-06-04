const entrada = require ("readline-sync")
let a = parseFloat(entrada.question("Digite seu numero: "))
let b = parseFloat(entrada.question("Digite seu numero: "))
let c = parseFloat(entrada.question("Digite seu numero: "))
if (a < b & b < c) {
    console.log("A ordem crescente é:", a, b, c)
} else if (a < c & c < b) {
    console.log("A ordem crescente é:", a, c, b)
} else if (b < a & a < c) {
    console.log("A ordem crescente é:", b, a, c)
} else if (b < c & c < a) {
    console.log("A ordem crescente é:", b, c, a)
} else if (c < b & b < a) {
    console.log("A ordem crescente é:", c, b, a)
} else if (c < a & a < b) {
    console.log("A ordem crescente é:", c, a, b)
}