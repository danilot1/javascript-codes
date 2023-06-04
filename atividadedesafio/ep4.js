const {cursos} = require ("./cursos")

cursos.forEach(c => {
    const {curso, duracao } = c
    console.log("Curso:", curso,"- Duração:",duracao)
})