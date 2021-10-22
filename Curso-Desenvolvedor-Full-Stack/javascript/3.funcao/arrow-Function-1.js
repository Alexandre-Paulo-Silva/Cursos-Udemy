let dobro = function(a) {
    return 2 * a
}

dobro = (a) => { //funcao arrow sempre e uma funcao anonima

    return 2 * a
}

dobro = a => 2 * a //funcao arrow de forma reduzida
console.log(dobro(Math.PI))

let ola = function() {

    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' //possui paramentro
console.log(ola())