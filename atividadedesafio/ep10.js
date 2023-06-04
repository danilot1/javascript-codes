const {alunos} = require ("./alunos")
const verificacaocurso = alunos.filter(aluno =>{
    return aluno.curso === "MEDICINA VETERINÁRIA" && aluno.status ==="MATRICULADO"
})
console.log(verificacaocurso.length)
