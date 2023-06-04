const entrada = require("readline-sync")
let resposta = ""
let turno = entrada.question("Em qual turno voce estuda ? ")
if (turno === "M" || turno === "matutino") {
    resposta = "Bom Dia!"
} else if (turno === "V" || turno === "vespertino") {
    resposta = "Boa Tarde!"
} else if (turno === "N" || turno === "noturno") {
    resposta = "Boa Noite!"
} else {
    resposta = "Valor inválido"
}
console.log(resposta)