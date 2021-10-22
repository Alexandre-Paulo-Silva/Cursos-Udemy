class Avo {

    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //herdando dos atributos da classe Avo

    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome) // chamando o constructor de sobrenome de Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {

    constructor() {
        super('Silva')
    }
}

const filho = new Filho //instanciando filho
console.log(filho)