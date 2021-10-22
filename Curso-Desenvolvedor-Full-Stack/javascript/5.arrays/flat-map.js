const escola = [{
    nome: 'turma m1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'ana',
        nota: 9.3

    }, {
        nome: 'turma m2',
        alunos: [{
            nome: 'rebeca',
            nota: 8.9
        }, {
            nome: 'Roberto',
            nota: 7.3
        }]
    }]
}]

const getnotaaluno = aluno => aluno.nota
const getnotadaturma = turma => turma.alunos.map(getnotaaluno)

const notas1 = escola.map(getnotadaturma)
console.log(notas1)

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getnotadaturma)
console.log(nota2)