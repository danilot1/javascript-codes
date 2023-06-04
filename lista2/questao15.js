const entrada = require("readlinde-sync")
var FGTS, INSS, imposto_de_renda, salario_liquido
let salario_bruto = parseFloat(entrada.question("Digite seu salario bruto: "))
console.log("a. Salário bruto: ", salario_bruto, "\n")
FGTS = (0.08 * salario_bruto)
console.log("b. FGTS: ", FGTS, "\n")
INSS = (0.12 * salario_bruto)
console.log("c. Desconto do INSS ", INSS, "\n")
if (salario_bruto < 1500) {
     console.log("d. Desconto do imposto_de renda ", imposto_de_renda = 0.075 * salario_bruto, "\n")
}
else if (salario_bruto >= 1500 & salario_bruto <= 2000) {
     console.log("d. Desconto do imposto de renda ", imposto_de_renda = 0.1 * salario_bruto, "\n")
}
else if (salario_bruto > 2000) {
     console.log("d. Desconto do imposto de renda ", imposto_de_renda = 0.15 * salario_bruto, "\n")
}
salario_liquido = (salario_bruto - INSS) // imposto de renda
console.log("e. Salário liquido: ", salario_liquido)