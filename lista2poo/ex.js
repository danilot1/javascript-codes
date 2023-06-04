class lista {
    constructor(value) {
        this.inicio = value
        this.fim = null
    }
    verificar(value) {
        if (value = value) {
            console.log("pertence")
        }
    }
    inserir(value) {
        const node = new no(value)
        if (this.inicio == null) {
            this.inicio = node
            this.fim = node
        } else {
            this.fim.proximo = node
            this.fim = node
        }
    }
    remover(value){
        this.inicio = this.inicio.proximo
    }

}
    class no {
    constructor (objeto){
        this.objeto = objeto
        this.proximo=null
    }

removerpar(objeto){
    if ( objeto % 2 == 0){
        this.objeto = null
    }

    }

}

   
let listanumerica = new lista()
listanumerica.verificar()
console.log(lista)
listanumerica.inserir(1)
listanumerica.inserir(2)
listanumerica.inserir(3)
listanumerica.inserir(4)
console.log(listanumerica)
listanumerica.removerpar
console.log(listanumerica)