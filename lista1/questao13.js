const entrada = require("readline-sync")
var idade
let ano_atual = parseInt(entrada.question("Qual é o ano atual ? "))
let ano_de_nascimento = parseInt(entrada.question("Em qual ano voce nasceu ? "))
idade = ano_atual - ano_de_nascimento
console.log("Voce tem ", idade, " anos ")
