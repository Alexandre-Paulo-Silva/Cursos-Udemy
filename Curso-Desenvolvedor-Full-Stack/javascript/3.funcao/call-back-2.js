const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]) // o comando push adiciona um elemento no array
    }
    console.log(notas[i])
}

console.log(notasBaixas)

notasBaixas = notas.filter(function(nota) {
    return nota <= 7
})

console.log(no)