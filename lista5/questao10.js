const vetorP = () => {
    let numeros = [12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979]
    let numerospares = []
    let cont = 0
    for (i = 0; i < 11; i++) {
        if (numeros[i] % 2 == 0) {
            numerospares[cont] = numeros[i]
            cont++

        }

    } 
    
    return numerospares
}
let vetor = vetorP()
console.log(vetor)   




