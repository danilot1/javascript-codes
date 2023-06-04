const {alunos} = require ("./alunos")
const verificacao = alunos.filter(aluno =>{
    return aluno.status == "MATRICULADO"
})
console.log((verificacao.length/alunos.length)*100)