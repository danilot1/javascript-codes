let numero = [ 12, 356, 98, 89, 45, 12, 90, 34, 123, 834, 979 ]
for (let i =0 ; i<11; i++){
    console.log(numero_par_impar,numero[i])
} function numero_par_impar(numero){
    if (numero % 2 ==0){
        return `${numero} , é par`
    }else{
        return `${numero}, é ímpar`
    }
}