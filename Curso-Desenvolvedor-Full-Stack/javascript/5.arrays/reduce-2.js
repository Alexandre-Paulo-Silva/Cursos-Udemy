const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// todos os alunos sao bolsistas ?
const result = alunos.map(a => a.bolsista).reduce(function(bolsa) {
    if (bolsa === true) {
        return true
    } else {
        return false
    }
})
console.log(result)

// Algum aluno e bolsista ?