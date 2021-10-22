console.log(typeof String) // e uma funcao
console.log(typeof Array) // e uma funcao
console.log(typeof Object) // e uma funcao 

String.prototype.reverse = function() { //revertendo uma string
    return this.split('').reverse().join('') // reertendo e depois juntando uma string de trans para frente
}

console.log('Escola Alex'.reverse()) // imprimido e chamando a funcao

Array.prototype.first = function() {
    return this[0] //retornando o primeiro valor da matriz
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function() {
    return 'lascou'
}
console.log('Escola'.reverse())