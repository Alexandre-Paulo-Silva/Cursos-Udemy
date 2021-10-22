class Lancamento { //declarando class

    constructor(nome = 'generico', valor = 0) { //funcao construtora
        this.nome = nome
        this.valor = valor
    }
}

class ciclofinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancamentos(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario() {
        let valoConsolidado = 0
        this.lancamento.forEach(l => {
            valoConsolidado += l.valor
        })
        return valoConsolidado
    }

}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -220)
const contas = new ciclofinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())