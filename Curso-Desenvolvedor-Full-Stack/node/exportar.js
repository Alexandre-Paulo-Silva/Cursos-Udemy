console.log(module.exports)

console.log(module.exports === this)
console.log(module.exports === exports)


this.a = 1 // exportando uma variavel
exports.b = 2

module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)


module.exports = { // modo corrento de fazer 

    public: true


}