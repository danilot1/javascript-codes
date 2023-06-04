const entrada = require("readline-sync")
let peso = parseFloat(entrada.question("Digite seu peso: "))
let altura = parseFloat(entrada.question("Digite sua altura: "))

function IMC(peso, altura){
    let imc = peso / (altura * altura)
    return imc
}
console.log(IMC(peso, altura))



