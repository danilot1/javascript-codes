const entrada = require ("readline-sync")
for (i = 0 ; i<=9 ; i++){
    let numero = parseInt(entrada.question("Digite seu numero: ")) 
if( numero % 2 == 0){
     console.log("O numero", numero,"é par")
}else{
     console.log ("O numero",numero, "é ímpar")
}
}