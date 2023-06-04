const entrada = require("readline-sync")
let numero1 = parseFloat(entrada.question("Digite seu numero: "))
let numero2 = parseFloat(entrada.question("Digite seu numero: "))
const maiornumero = (numero1, numero2) => {
    if (numero1 >= numero2 ){
        return numero1
    }else{
        return numero2
    }     
}
console.log(maiornumero(numero1, numero2))
