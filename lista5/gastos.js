const entrada = require("readline-sync")
    let soldo = parseFloat(entrada.question("Digite o soldo atual: "))
    let soldoreajuste = parseFloat(entrada.question("Digite o soldo com reajuste: "))
    let efetivo = perseFloat(entrada.question("Digite o efetivo de militares: "))
    let soldoano = soldo*12
    let soldoreajustano = soldoreajuste*12
    let diferenca = soldoreajustano - soldoano
     