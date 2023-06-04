function nomes (nomes){
    return `Olá ${nomes} Bem vindo a ETE Cicero Dias`       
}
let nome = [ "alexandre" , "Mario" , "Robson" , "João" , "Marcos", "Gabriel" ,"Jorge" , "Luis", "Lucas", "David"]
    for(let i = 0 ;i <11; i++ ){
        const msg = (nomes(nome[i]))
        console.log(msg)
    }
