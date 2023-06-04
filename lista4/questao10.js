const entrada = require("readline-sync")
let idade = []
let menor = 999999999
let maior = 0
let soma_idade = 0
let media
for (let i = 0; i < 5; i++) {
    let idade = parseInt(entrada.question("Digite sua idade: "))
    soma_idade = soma_idade + idade
    if (idade < menor) {
        menor = idade
    }
    else if (idade > maior) {
        maior = idade
    }
}
media = soma_idade / 5
console.log("Media", media, "Menor idade :", menor, "Maior idade: ",maior)
