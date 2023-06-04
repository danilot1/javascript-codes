const { cursos } = require("./cursos")
const dur = cursos.map(c => c.duracao)
const soma = dur.reduce((a, b) => a + b)
console.log(soma)