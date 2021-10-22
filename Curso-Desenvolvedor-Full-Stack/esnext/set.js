//nao aceita repeticao e nao e idexada

const times = new Set()

times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
times.add('Vasco') //nao se repete entao ele nao adicionar de novo

console.log(times)
console.log(times.size) //numero de elementos
console.log(times.has('vasco')) // se esta contido no set
console.log(times.has('Vasco'))
times.delete('Flamengo') //deletar um elemento
console.log(times.has('Flamengo'))