const contadorA = require('./instancia-unica')
const contadorB = require('./instancia-unica')

const contadorC = require('./instancia-nova')() //chamando a funcao
const contadorD = require('./instancia-nova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)