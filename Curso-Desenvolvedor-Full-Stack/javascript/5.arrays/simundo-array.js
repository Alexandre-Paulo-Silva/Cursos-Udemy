const quasearray = { 0: 'Rafael', 1: 'Ana', 2: 'Nia' }
console.log(quasearray)
Object.defineProperty(quasearray, 'toString', {
    enumerable: false
})

console.log(quasearray[0])

const meuArray = ['rafael', 'ana', 'bia']
console.log(quasearray.toString(), meuArray)