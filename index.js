class nossoHeroi{
    constructor(nomeHeroi, idadeHeroi, classeHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.classeHeroi = classeHeroi
    }

    ataqueHeroi(){
        let tipoAtaque = ""
        switch (this.classeHeroi){
            case "mago":
            tipoAtaque = "usou magia"
            break

            case "guerreiro":
            tipoAtaque = "usou espada"
            break

            case "monge":
            tipoAtaque = "usou artes marciais"
            break

            case "ninja":
            tipoAtaque = "usou shuriken"
            break
        }

        console.log(`O ${this.classeHeroi} atacou usando ${tipoAtaque}`)
    }
}

let heroi = new nossoHeroi("Zidug","28", "mago")

heroi.ataqueHeroi()