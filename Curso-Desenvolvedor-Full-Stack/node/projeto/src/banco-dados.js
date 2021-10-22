const sequece = {

    _i: 1,
    get id() { return this._id++ }
}

const produto = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequece.id
    produto[produto.id] = produto
    return produto
}

function getProduto(id) {

    return produto[id] || {}
}

function getProduto() {
    return Object.values(produto)
}