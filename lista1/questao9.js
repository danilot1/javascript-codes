const entrada = require("readline-sync")
//var largura_terreno, comprimento_terreno, largura_casa, comprimento_casa, area_terreno, area_casa, area_restante
let largura_terreno = parseFloat(entrada.question("qual a largura do terreno retangular em metros ? "))
let comprimento_terreno = parseFloat(entrada.question("qual o comprimento do terreno retangular em metros ? "))
let largura_casa = parseFloat(entrada.question("Qual a largura da casa em metros ? "))
let comprimento_casa = parseFloat(entrada.question("Qual o comprimento da casa em metros ? "))
area_terreno = comprimento_terreno * largura_terreno
area_casa = comprimento_casa * largura_casa
area_restante = area_terreno - area_casa
console.log("A área não construída é:", area_restante)