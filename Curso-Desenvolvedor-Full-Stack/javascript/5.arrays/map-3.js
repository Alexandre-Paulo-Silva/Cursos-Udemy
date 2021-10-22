Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray

}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 12.90}',
    '{"nome": "kit de lapis", "preco":  41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const paraobjeto = json => JSON.parse(json)
const apenaspreco = produto => produto.preco

const result = carrinho.map2(paraobjeto).map2(apenaspreco)
console.log(result)