Array.prototype.reduce2 = function(callback) {

    let acumlador = this[0] // a partir de 
    for (let i = 1; i < this.length; i++) {
        acumlador = callback(this[i], i, this)
    }
    return acumlador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))