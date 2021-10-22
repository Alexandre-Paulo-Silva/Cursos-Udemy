//Object.preventExtensions = restringe o numero de atributos

const produto = Object.preventExtensions({ //nao vou poder adicionar atibutos mas poderei excluir
    mome: 'qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensivel', Object.isExtensible(produto)) // vaz o teste se ela e extensiva ou nao

produto.mome = 'Borracha'

produto.descricao = 'Borracha  escolar branca'
delete produto.tag // pode deletar o atibuto

console.log(produto)

// objeto.seal nao consegue adicionar novos atibutos nao consegue excluir, mas consegue modifica os atibutos

const pessoa = { nome: 'juliana', idade: 35 }
Object.seal(pessoa)
console.log('selando', Object.isSealed(pessoa)) //esta seleado

pessoa.sobrenome = 'silva'
delete pessoa.nome //nao da para excluir o atributo com o objeto selado
pessoa.idade = 29
console.log(pessoa)


// Objeto.Freeze = selando + valores constante nao podem ser modificado