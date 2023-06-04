let altura = [1.90, 1.86, 1.69, 1.75, 1.56]
let peso = [98.9, 84.3, 74.8, 69.9, 62.5]
for (let i = 0; i < 5; i++) {
    let IMC = peso[i] / (altura[i] * altura[i])
    console.log("Para altura", altura[i], "e peso", peso[i], "o IMC é", IMC)
}