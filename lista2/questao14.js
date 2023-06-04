const entrada = require("readline-sync")
let nome = entrada.question("digite seu nome: ")
let altura = parseFloat(entrada.question("digita sua altura: "))
let peso = parseFloat(entrada.question("Digite seu peso: "))
var IMC = peso / (altura * altura)
if (IMC < 18.5) {
    console.log("Caro paciente,", nome, "seu IMC é ", IMC, " e você se encontra no nível abaixo do peso")
}
else if (IMC >= 18.6 & IMC <= 24.9) {
    console.log("Caro paciente,", nome, "seu IMC é ", IMC, " e você se encontra no nível peso ideal")
}
else if (IMC >= 25.0 & IMC <= 29.9) {
    console.log("Caro paciente,", nome, "seu IMC é ", IMC, " e você se encontra no nível levemente acima do peso")
}
else if (IMC >= 30.0 & IMC <= 34.9) {
    console.log("Caro paciente,", nome, "seu IMC é ", IMC, " e você se encontra no nível obesidade grau I")
}
else if (IMC >= 35.0 & IMC <= 39.9) {
    console.log("Caro paciente,", nome, "seu IMC é ", IMC, " e você se encontra no nível obesidade grau II(severa)")
}
else if (IMC >= 40.0) {
    console.log("Caro paciente,", nome, "seu IMC é ", IMC, " e você se encontra no nível obesidade grau III(Mórbida)")
}
