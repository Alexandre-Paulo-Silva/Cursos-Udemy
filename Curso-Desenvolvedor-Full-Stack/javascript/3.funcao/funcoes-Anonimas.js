//funcao anonima 
const soma = function(x, y) {
    return x + y
}
const imprimirResuldo = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirResuldo(3, 4)
imprimirResuldo(3, 4, soma)
imprimirResuldo(3, 4, function(x, y) { // funcao anonima diretamente em outra funcao
    return x - y
})

imprimirResuldo(3, 4, (x, y) => x * y) // forma de arrow function

const pessoa = { // atraves de funcao 
    falar: function() {
        console.log('Menssage')
    }
}