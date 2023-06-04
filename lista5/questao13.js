const entrada = require("readline-sync")
let distancia = parseFloat(entrada.question("Digite a distancia da sua viagem"))

function corrida(distancia) {
    let valor = 5.75
    let a = distancia/1000
    
    if (a > 1) {
        valor = valor*a
    } 
    return ` Olá o valor da sua corrida é ${valor}`
} 
console.log(corrida(distancia))