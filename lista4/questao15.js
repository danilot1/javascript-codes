let disco = [123, 21, 3, 78, 94]
for (let i = 0; i < 5; i++) {
    let percentual = disco[i] * 100 / 512
    let percentualrestante = percentual - 512 / 100
    let espaço_ocupado = disco[0] + disco[1] + disco[2] + disco[3] + disco[4]
    let espaço_restante = 512 - espaço_ocupado
    console.log("Disco: ", disco[i], "Percentual", percentual, "Percentual restante", percentualrestante, "Espaço ocupado", espaço_ocupado, "Espaço restante", espaço_restante)
}