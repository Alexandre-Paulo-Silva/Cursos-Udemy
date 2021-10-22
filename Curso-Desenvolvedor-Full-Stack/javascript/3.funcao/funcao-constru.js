function Carro(velmax = 200, delta = 5) {
    //atributo privado 
    let velatual = 0
        //metodo publico
    this.acelerar = function() { // o uso do this permite a visualizacao fora da funcao Carro
            if (velatual + delta <= velmax) {
                velatual += delta
            } else {
                velatual = velmax
            }
        }
        //metodo publico 
    this.getVelatual = function() {
        return velatual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelatual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelatual())

console.log(typeof Carro)
console.log(typeof ferrari)