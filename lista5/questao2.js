const entrada = require("readline-sync")
function soma() {
    let valor = 0
    for (let i = 0; i < 2; i++) {
        valor += parseInt(entrada.question("digite seus numeros "))
    }
    return `A soma é ${valor}`
}
const msg = soma()
console.log(msg)

