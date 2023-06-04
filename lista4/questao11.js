const entrada = require("readline-sync")
let percentual
let caro = 0
let barato = 9999
for (let i = 0; i < 5; i++) {
    produto = parseFloat(entrada.question("Digite o valor dos produtos "))
    if (produto > caro) {
        caro = produto
    } else if (produto < barato) {
        barato = produto
    }
}
percentual = barato / 100 - caro / 100
console.log(percentual)