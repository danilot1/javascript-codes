
const {alunos} = require ("./alunos")
const verificacao = alunos.filter(aluno => {
    return aluno.curso === "LICENCIATURA EM CIÊNCIAS BIOLÓGICAS"
})
console.log(verificacao.length)