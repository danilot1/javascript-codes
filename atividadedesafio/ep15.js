const { alunos } = require("./alunos")
const { cursos } = require("./cursos")


const alunos1 = alunos.map(s => {

    let { id, curso, entrada, status, semestre } = s
    return {
        "id": id,
        "curso": curso,
        "entrada": Number(entrada),
        "status": status,
        "semestre": semestre = Math.ceil(((2019.2 - entrada) * 2) + 1)


    }

})
console.log(alunos1)

const verificacao = alunos1.filter(a => {
    if (a.status === "MATRICULADO" || a.status === "TRANCAMENTO") {
        for (let i of cursos) {
            let { curso, duracao } = i
            if (a.curso === i.curso && a.semestre > i.duracao) {
                return {
                    "entrada" : a.entrada
                }
            }


        }
    }

})
console.log(verificacao) 


for (let i of verificacao){
    let { id , curso , entrada , status , semestre} = i
    console.log(`O estudante de id ${id} , matriculado no curso ${curso}, ingressou na universidade em ${entrada} e em relação ao semestre letivo de 2019.2 encontra-se na situação de retenção`)
}