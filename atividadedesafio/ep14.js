const {alunos} = require ("./alunos")
const verificacao = alunos.filter(aluno =>{
    return aluno.entrada === "2019.1" && aluno.status === "TRANCAMENTO"
})
console.log(verificacao.length)