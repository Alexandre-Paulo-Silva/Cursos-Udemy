const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'Ipad pro', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de platico', preco: 18.99, fragil: false }

]

console.log(produtos.filter(function(p) { //filtrando elementos 
    //return true
    //return p.preco > 2000
    return false

}))

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil

console.log(produtos.fragil(caro).filter(fragil))