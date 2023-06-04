const entrada = require("readline-sync")
var usuario, senha
usuario = entrada.question("Digite seu nome de usuario: ")
senha = entrada.question("Digite sua senha: ")
if (usuario != senha) {
    console.log("Cadastro realizado")
} while (usuario == senha) {
    console.log("Erro")
    usuario = entrada.question("Digite seu nome de usuario ")
    senha = entrada.question("Digite sua senha: ")
}