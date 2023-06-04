const entrada = require("readline-sync")
function ola(nome){
    return `Olá, ${nome} seja bem vindo`
}
let nome = entrada.question("Digite seu nome: " )
const msg = ola(nome)
console.log(ola(nome)) 