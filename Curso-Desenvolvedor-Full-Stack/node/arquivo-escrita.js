// traformando um json em texto

const fs = require('fs')

const produto = {

    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { //convertendo objeto para json
    console.log(err || 'Arquivo salvo !')
})