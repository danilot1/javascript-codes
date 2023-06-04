const {alunos} = require ("./alunos")
const verificacao = alunos.filter(aluno =>{
    return aluno.entrada === "2018.1" && aluno.status === "MATRICULADO"
})
    console.log(verificacao.length)