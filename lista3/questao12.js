const entrada = require("readline-sync")
var valor_do_pao
let quantidade_de_paes = parseInt(entrada.question("Digite o numero de paes: "))
if (quantidade_de_paes === 1 || quantidade_de_paes <= 10) {
    valor_do_pao = 0.18
} else if (quantidade_de_paes === 11 || quantidade_de_paes <= 20) {
    valor_do_pao = 0.16
} else if (quantidade_de_paes === 21 || quantidade_de_paes <= 30) {
    valor_do_pao = 0.13
} else if (quantidade_de_paes >= 31) {
    valor_do_pao = 0.09
} console.log(quantidade_de_paes, "unidade(s) :R$", valor_do_pao)
