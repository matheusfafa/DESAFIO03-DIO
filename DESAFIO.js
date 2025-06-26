class hero{
    constructor(classe, idade, nome){
        this.classe = classe
        this.idade = idade
        this.nome = nome 
        this.definirataque()
    }

    definirataque(){
        if (this.classe === "guerreiro"){
            this.ataque = ["espada", "escudo"]
            this.ataque = this.ataque.join(" e ")
        }else if(this.classe === "mago"){
            this.ataque = "magia"
        }else if(this.classe === "monge"){
            this.ataque = "artes marciais"
        }else{
            this.ataque = "shuriken"
        }

        return this.ataque
    }


    atacar(){

        console.log( `O ${this.classe} de nome ${this.nome} está andando pela floresta` )
        console.log("-----------------------------")
        console.log("Apareceu um lobo")
        console.log("-----------------------------")
        console.log(`O ${this.classe} atacou usando ${this.ataque}`)
    }


}
    let apresentacaoDoHeroi2 = new hero("guerreiro", "24", "Leo")
    /*let apresentacaoDoHeroi = new hero("mago", "23", "Matheus",)
    let apresentacaoDoHeroi3 = new hero("ninja", "23", "Caio")
    let apresentacaoDoHeroi4 = new hero("monge", "22", "Mary")*/

    /*apresentacaoDoHeroi.atacar()*/
    apresentacaoDoHeroi2.atacar()
   /* apresentacaoDoHeroi3.atacar()
    apresentacaoDoHeroi4.atacar()*/