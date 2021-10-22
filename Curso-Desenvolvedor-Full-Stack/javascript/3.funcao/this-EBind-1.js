const pessoa = {
    saudacao: 'Bom dia',

    falar() {
        console.log(this, this.saudacao)
    }


}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito de paradigmas: funcional em OO

const falarDePessoa = pessoa.falar.bind()
falarDePessoa()

const falar2 = pessoa.falar.bind(pessoa)
falarDePessoa()