const pessoa = {
        nome: 'rebeca',
        idade: 18,
        peso: 13

    }
    //Objeto e uma colecao de chaves e valore dinamicos
console.log(Object.keys(pessoa)) //pegando as chaves
console.log(Object.values(pessoa)) //pegando valores
console.log(Object.entries(pessoa)) //pegando valores e chaves

Object.entries(pessoa).forEach(e => { //percorrendo os arrays com forEach
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa, 'dataNascimento'), { //definido propriedades
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)