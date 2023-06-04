 const entrada = require("readline-sync")
let diametro = parseFloat(entrada.question("Digite seu diametro: "))
const calculo = (diametro) => {
    let raio = diametro / 2
    let pi = 3.14
    let area = raio * pi * pi
    return area
}
console.log(calculo(diametro))