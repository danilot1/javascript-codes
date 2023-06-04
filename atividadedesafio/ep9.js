const {alunos} = require ("./alunos")
const verificacao = alunos.filter (aluno => {
    return aluno.status === "TRANCAMENTO"
})
console.log(verificacao.length)