

const {cursos} = require ("./cursos")

const cursos1 = cursos.map(c => {
    if ( c.duracao >= 1 || c.duracao == 8){
        return {
            curso: c.curso,
             duracao: 1
            
        }  
    }
    else if(c.duracao > 8) {
        return {
            curso: c.curso,
             duracao: 2
        }
    }else {
        return{
            curso : c.curso,
            duracao: 0
            
        }
    }
})

console.log(cursos1)
