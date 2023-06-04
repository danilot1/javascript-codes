const vetor = () => {
    let num = [12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979]
    let valor = 10000
    for (i = 0; i < 11; i++) {
        if (num[i] < valor) {
            valor = num[i]
            return valor
        }
    }
}
console.log(vetor())