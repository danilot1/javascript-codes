function calculoq(quadrado){
    let quadrado = quadrado , lado_quadrado = 2
        quadrado = lado_quadrado * lado_quadrado
        return quadrado
    }
function calculot(triangulo){
    let triangulo = triangulo ,  base_triangulo = 4, altura_triangulo = 6 
        triangulo = base_triangulo* altura_triangulo/2
        return triangulo
    }
function calculot(trapezio){
    let trapezio = trapezio , base_trapeziomenor = 4 , base_trapeziomaior = 8 , altura_trapezio = 10
    trapezio = (base_trapeziomaior+base_trapeziomenor) * altura_trapezio /2
}
console.log(calculoq(quadrado))
console.log(calculot(triangulo))
console.log(calculot(trapezio))