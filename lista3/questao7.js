const entrada = require("readline-sync")
let ci = 0, cp = 0
for(let i = 0; i<= 9; i++){
    let numeros = parseInt(entrada.question("Digite seu numero "))
    if(numeros % 2== 0){
        cp++
    }else{
        ci++
    }  
}
console.log("Quantidade de numeros impares é",ci, "e de pares é", cp)