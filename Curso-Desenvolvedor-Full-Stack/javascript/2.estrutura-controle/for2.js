const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i in notas) {

    console.log(i, notas[i]) //imprimindo o indice do array e as notas percorrendon o array
}

const pessoa = {
    nome: 'Alex',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (var atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
console.log(atributo)