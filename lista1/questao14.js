const entrada = require("readline-sync")
var FGTS, INSS, salario_liquido
let salario_bruto = parseFloat(entrada.question("Digite seu salario bruto: "))

console.log("O salario bruto é", salario_bruto)

FGTS = 0.08 * salario_bruto
console.log("O recolhimento do FGTS será: ", FGTS)

INSS = 0.12 * salario_bruto
console.log("O recolhimento de INSS será: ", INSS)

salario_liquido = salario_bruto - INSS
console.log("O salário líquido este mês será:", salario_liquido)
