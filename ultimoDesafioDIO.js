class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque 
        switch (this.tipo){
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;
            default:
                ataque = "ataque desconhecido"

        
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago = new heroi("Gandalf o Cinzento", 60, "mago")
mago.atacar()

let guerreiro = new heroi("Conan", 30, "guerreiro")
guerreiro.atacar()

let monge = new heroi("lee sin", 20, "monge")
monge.atacar()

let ninja = new heroi("Zed", 23, "ninja")
ninja.atacar()
