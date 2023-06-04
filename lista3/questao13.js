const entrada = require("readline-sync")
console.log("Jogo de adivinha")
let numero_secreto = 168
let numero_escolhido = -1
while(numero_escolhido != numero_secreto){
    numero_escolhido = parseInt(entrada.question("Digite seu numero "))
if(numero_escolhido == numero_secreto){
    console.log("Parabéns! você acertou")
}else if(numero_escolhido < numero_secreto){
    console.log("Ainda não. Escolha um número maior")
}else if(numero_escolhido > numero_secreto){
    console.log("Ainda não. Escolha um número menor")
}
}