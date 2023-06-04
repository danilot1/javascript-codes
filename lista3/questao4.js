const entrada = require("readline-sync")
let escolha = "sim"
while (escolha === "sim") {
    let escolha = entrada.question("Digite sim ou nao: ")
    if (escolha === "sim") {
        console.log("voce decidiu continuar")
    } else if (escolha === "nao") {
        console.log("voce deicidiu sair")
        break
    }
} 
