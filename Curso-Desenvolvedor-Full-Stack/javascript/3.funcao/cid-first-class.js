//funcao em js e First class 

//criar um funcao literal
function fun1() {

}

//armazenar em uma variavel

const fun2 = function() {}

//Armazenar em um array

const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenando em um atributo de objeto
const obj = {}
obj.falar = function() { return 'OPA' }
console.log(obj.falar())

// Passar Funcao como Param 

function run(fun) {
    fun()
}

run(function() { console.log('Executando....') })


//Uma funcao pode retorna /conter uma funcao

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cinco = soma(2, 3)
cinco(4)