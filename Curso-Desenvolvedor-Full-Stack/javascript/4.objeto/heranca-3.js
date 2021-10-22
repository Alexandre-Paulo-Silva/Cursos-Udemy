const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) //prototipo do pai
filha1.nome = 'Ana'

console.log(filha1.corCabelo)
console.log(filha1)


const filha2 = Object.create(pai)
filha2.nome = 'Maria'
console.log(filha2.corCabelo)
console.log(filha2)

const filha3 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha3.nome)
filha3.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha3.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha3) { // saber se o atributo veio por herança
    filha3.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key} `)
}