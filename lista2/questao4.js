const entrada = require("readline-sync")
let letra = entrada.question("digite sua letra: ")
if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    console.log("É vogal")
} else {
    console.log("É consoante")
}
