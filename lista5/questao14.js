const entrada = require ("readline-sync")

let numero1 = parseFloat (entrada.question("Digite o seu primeiro numero "))
let numero2 = parseFloat(entrada.question("Digite o segundo numero "))
let sinal_aritmético = (entrada.question("Digite o sinal aritimetico"))
let operação 
const operação_aritmetica = (numero1, numero2 , sinal_aritmético) =>{

    if (sinal_aritmético === "+"){
        operação = numero1 + numero2
        return operação
    }else if(sinal_aritmético === "-"){
       operação  = numero1 - numero2
       return operação
    }else if (sinal_aritmético === "*"){
       operação = numero1 * numero2
       return operação
    }

}
console.log(operação_aritmetica(numero1, numero2 , sinal_aritmético))
