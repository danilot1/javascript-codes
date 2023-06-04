const entrada = require("readline-sync")
let salario = parseFloat(entrada.question("Digite seu salario: "))
var aumento_de_20 = salario + (0.20 * salario)
var aumento_de_15 = salario + (0.15 * salario)
var aumento_de_10 = salario + (0.10 * salario)
var aumento_de_5 = salario + (0.05 * salario)
if (salario <= 280.00) {
    console.log("Salario antes do reajuste:", salario, "\n", "Percentual do aumento: 20%", "\n", "O valor do aumento ", 0.20 * salario, "\n", "O novo salário é: ", aumento_de_20)
}
else if (salario >= 281.00 & salario <= 700) {
    console.log("Salario antes do reajuste:", salario, "\n", "Percentual do aumento: 15%", "\n", "O valor do aumento ", 0.15 * salario, "\n", "O novo salário é: ", aumento_de_15)
}
else if (salario >= 701.00 & salario <= 1500) {
    console.log("Salario antes do reajuste:", salario, "\n", "Percentual do aumento: 10%", "\n", "O valor do aumento ", 0.10 * salario, "\n", "O novo salário é: ", aumento_de_10)
}
else if (salario >= 1501.00) {
    console.log("Salario antes do reajuste:", salario, "\n", "Percentual do aumento: 5%", "\n", "O valor do aumento ", 0.05 * salario, "\n", "O novo salário é: ", aumento_de_5)
} 