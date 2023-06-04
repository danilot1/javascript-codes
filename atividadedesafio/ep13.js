const { alunos } = require("./alunos")
const verificacao = alunos.filter(aluno => {
    return aluno.status === "DESISTENCIA"
})
console.log((verificacao.length / alunos.length) * 100)