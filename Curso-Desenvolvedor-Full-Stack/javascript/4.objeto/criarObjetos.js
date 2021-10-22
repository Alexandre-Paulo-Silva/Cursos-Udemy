//usando a notacao literal 

const obj = {}

console.log(obj)

//Object em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcoes construtora

function Produto(nome, preco, desc) {

    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }

}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Lapis', 1.2, 0.5)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//funcao factory

function criarFuc(nome, sal, faltas) {

    return {
        nome,
        sal,
        faltas,
        calcSal() {
            return (sal / 30) * (30 - faltas)
        }
    }

}

const f1 = criarFuc('joao', 7980, 4)
const f2 = criarFuc('Maria', 7980, 1)

console.log(f1.calcSal(), f2.calcSal())


// objetc.create 

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma fucacao que retorna objeto

const froJSON = JSON.parse('{"info": "Sou um JSON"}')

console.log(froJSON.info)