var numero = [5, 30, 44, 27, 32, 50, 21, 20, 36, 74, 80, 88, 45, 31, 20, 12, 66, 73, 64, 9, 90, 5]
var quantidadeMultiplos5 = 0
for (let i = 0; i < 21; i++) {
    if (numero[i] % 5 == 0) {
        quantidadeMultiplos5++
    }
} console.log(quantidadeMultiplos5)