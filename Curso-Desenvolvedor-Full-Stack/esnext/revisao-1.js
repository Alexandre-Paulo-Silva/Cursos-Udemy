//let e const

{
    var a = 2 //uma variavel declarada com var nao tem escopo de bloco logo ela pode ser acessado fora do bloco
    let b = 3
    console.log(b) // so pode ser acessada de dotro do bloco let 
}
console.log(a)

//template String
const produto = 'ipad'
console.log(`${produto} e caro  `)

//destutruring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
const [x, y] = [1, 2, 3]
console.log(x, y)

//tirar atributos dentro de um objeto
const { idade, nome } = { nome: 'Ana' }