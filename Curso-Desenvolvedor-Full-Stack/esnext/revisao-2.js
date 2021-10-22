// Arrow Function

const soma = (a, b) => a + b

console.log(soma(2,3))

//Arrow function (this)

const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({})

lexico1()
lexico2()

//function default

function log (texto = 'Node'){
    console.log(texto)
}

log(undefined)

// operador rest 

function total(...numeros){
    let total = 0
    return total
}

console.log(total(2,3,4,5))

