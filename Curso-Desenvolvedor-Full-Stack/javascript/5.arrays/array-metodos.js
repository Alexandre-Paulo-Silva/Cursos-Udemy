const pilotos = ['vettel', 'alonso', 'raikkonen', 'Massa']
pilotos.pop() // pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen') // adiciona um elemento no vetor na ultima posicao 
console.log(pilotos)

pilotos.shift() // remove o primero elemento da lista
console.log(pilotos)


pilotos.unshift('hamilton') //adicona nomes no incio do array
console.log(pilotos)

//splice pode adicionar e remover elementos 

//adicionar


pilotos.splice(2, 0, 'bottas', 'massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1) // removendo
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // novo array apartido do indice 2 pegando uma parte do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai pegar os elemetos entro o indice 1 e 4
console.log(algunsPilotos2)