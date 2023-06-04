class Agenda{
    constructor(nome , telefone , celular , email, dataaniversario){
            this.nome = nome
            this.telefone = telefone
            this.celular = celular
            this.email = email
            this.dataaniversario = dataaniversario
           }
    
    }  
class No{
    constructor(elemento){
            this.elemento = elemento
            this.proximo = null
            this.anterior = null
        }
        
    }

class Lista{
    constructor(){
        this.inicio = null
        this.fim = null
        this.size++
    }
    inserircontato(elemento){
        let no = new No(elemento)
        let current = this.inicio
        if( current == null ){
            this.inicio = no
            this.fim = no
        }else{
        while (current!= null && current.elemento.nome < no.elemento.nome){
            current = current.proximo
        }
        if( current === null){
            this.fim.proximo = no
            no.anterior = this.fim
            this.fim = no
            this.size++
        }
        else if (current === this.inicio){
           this.inicio.anterior = no
           no.proximo = this.inicio
           this.inicio = no
           this.size++
        }else{
            current.anterior.proximo = no
            no.anterior = current.anterior
            no.proximo = current
            current.anterior = no
            this.size++
        }
    }
}
        listacontatos(){
            let current = this.inicio
            while (current!=null){
                console.log(current.elemento)
                current = current.proximo
            }
        }
        buscar(elemento){ 
            let current = this.inicio
            while (current != null && current.elemento != elemento){
                current = current.proximo
            }
            return current
        }
        remove_contato(elemento){
            let aux = this.inicio
        while (aux!=null){
            if(aux.elemento == elemento){
                if(aux == this.inicio){
                    this.inicio = this.inicio.proximo
                    this.inicio.anterior = null
                }
                else if(aux == this.fim){
                    this.fim = this.fim.anterior
                    this.fim.proximo = null
                }
                else{
                    aux.anterior.proximo = aux.proximo
                    aux.proximo.anterior = aux.anterior
                }
            }
            aux = aux.proximo
        }
    }      
        atualiza_contato(nome, nomeNovo, novotelefone, novocelular , novoemail, novodataaniversario){
           let aux = this.buscar(nome)
           if(aux!= null){
               aux.nome = nomeNovo
               aux.telefone = novotelefone
               aux.celular = novocelular
               aux.email = novoemail
               aux.dataaniversario = novodataaniversario
            }else{
               console.log("Não encontrado")
           }

        }
        remove_duplicados(elemento){
            let aux = this.inicio
            let aux2 = aux.proximo
            while(aux!=null){
                if(this.elemento == this.elemento){
                    this.proximo = null
                    this.fim = null 
                }
                else if( this.elemento == ){ 

                }

                
            }
            
        }

}    
let lista1 = new Lista()
let Abel = new Agenda("Abel", 8188992255, 983274875, "abel@hotmail.com", "22/09/2002")
let Jamal = new Agenda("Jamal", 8188992255, 983274875, "jamal@hotmail.com", "27/07/2002")
let Carol = new Agenda("Carol", 8188992255, 983274875, "carol@hotmail.com", "27/07/2002")
lista1.inserircontato(Abel)
lista1.inserircontato(Jamal)
lista1.inserircontato(Carol)
if(lista1.buscar(Jamal)){
console.log("Usuario existente"+ Jamal)
}else{
console.log("Não existe")
}
lista1.remove_contato(Jamal)
lista1.atualiza_contato(Abel)

