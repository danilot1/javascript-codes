const entrada = require("readline-sync")
let numero1 = parseFloat(entrada.question("Digite seu numero "))
let numero2 = parseFloat(entrada.question("Digite seu numero "))
if(numero1 > numero2){
    console.log("Esse é o maior numero: ", numero1)
}else if(numero2 > numero1){
    console.log("Esse é o maior numero: ", numero2)
}