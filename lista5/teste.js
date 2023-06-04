function vetor (num){
    let soma = 0
    for(let i= 0; i<11;i++){
        soma += num[i]
    }
    let media = soma/11
    return media
}
let num  = [12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979]

console.log(vetor(num))
