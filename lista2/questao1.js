const entrada = require ("readline-sync")
let numero = parseInt(entrada.question("digite seu numero: "))
if (numero >= 20 && numero <= 90){
    console.log("Está no intervalo")
}else {
    console.log("Não está no intervalo")
}