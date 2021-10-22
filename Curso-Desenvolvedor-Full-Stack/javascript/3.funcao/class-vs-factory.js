class Pessoa {

    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome eh: ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao') //instanciando a classe ao objeto p1
p1.falar()

const pessoa = nome => {

    return {
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = criarPessoa('Joao')
p2.falar()