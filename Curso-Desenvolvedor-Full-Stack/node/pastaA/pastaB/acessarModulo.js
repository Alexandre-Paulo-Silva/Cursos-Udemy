const moduloA = require('../../moduloA') // se for com letra minuscula nao vai funcionar no linux
    //const moduloA = require('C:\Projetos\Web\estudos\node-JS\moduloA.js') //outra forma de fazer 
console.log(moduloA.ola)


const saudacao = require('saudacao') // so com nome do modulo
console.log(saudacao.ola)

const http = require('http') // por http  requisicao e resposta
http.createServer((req, res) => {
    res.writable('Bom dia')
    res.end()

}), listen(8080)