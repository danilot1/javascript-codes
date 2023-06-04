const entrada = require("readline-sync")
let tamanho = entrada.question("Digite o tamanho desejado: ")
if (tamanho == "P") {
    console.log("Sua escolha foi tamanho P")
} else if (tamanho == "M") {
    console.log("Sua escolha foi tamanho M")
} else if (tamanho == "G") {
    console.log("Sua escolha foi tamanho G")
} else if (tamanho == "X") {
    console.log("Sua escolha foi tamanho X")
} else {
    console.log("A opção digitada é inválida")
}