// array e de tipo dinamico, e e uma estrutura heterogenia 
console.log(typeof Array, typeof new Array, typeof []) //tipos

let aprovado = new Array('Bia', 'Carlos', 'Alex')

console.log(aprovado)

aprovado = ['bia', 'carlos', 'alex'] //notacao literal e a mais recomendada

console.log(aprovado[0]) // acessando o primeiro elemento

console.log(aprovado[1])

console.log(aprovado[2])

console.log(aprovado[3]) // javascript nao da erro

aprovado[3] = 'Paulo' // adicionado elementos
aprovado.push('abia')
console.log(aprovado.length) // numero de elementos do array

aprovado[9] = 'rafael'
console.log(aprovado.length)
console.log(aprovado[9])
console.log(aprovado[8] === undefined) //nao contem nada na posicao 8 do array
console.log(aprovado[8] === null) //nao contem valores mas ele nao e nulo

console.log(aprovado)

aprovado.sort() // vai ordenar o array com os elementos vazios no final do array
console.log(aprovado)

delete aprovado[1] //excluido um valor de acordo com sua posicao
console.log(aprovado)

aprovado = ['Bia', 'Carlos', 'Alexandre']
aprovado.splice(1, 1) //remove e adicionar elementos do array
console.log(aprovado)

aprovado = ['Bia', 'Carlos', 'Alexandre']
aprovado.splice(1, 2) //remove e adicionar elementos do array primeto paramento e o indice o segundo numero ex
console.log(aprovado)

aprovado = ['Bia', 'Carlos', 'Alexandre']
aprovado.splice(1, 2, 'Elemento2', 'Elemento2') //adicionado elemento
console.log(aprovado)