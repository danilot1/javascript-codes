const entrada = require("readline-sync")
let nota = parseFloat(entrada.question("Digite sua nota "))
function mediafinal() {
    if (nota >= 0.0 && nota <= 4.9) {
        console.log("conceito D")
    } else if (nota >= 5.0 && nota <= 6.9) {
        console.log("conceito c")
    } else if (nota >= 7.0 && nota <= 8.9) {
        console.log("conceito b")
    } else if (nota >= 9.0 && nota <= 10.0) {
        console.log("conceito a")
    }    //return nota
}
console.log(mediafinal())
