
const {cursos} = require ("./cursos")

const cursos1 = cursos.map(c => {
    return {
        "curso": c.curso.toLowerCase(),
        "duracao": c.duracao 
    }
})

console.log(cursos1)
