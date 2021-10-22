const nums = [1, 2, 3, 4, 5]

//for com proposito

let result = nums.map(function(e) {
    return e * 2
})

console.log(result)

const soma10 = e => e + 10

const triplo = e => e * 3

const paraDinheiro = e => `R$: ${parseFloat(e).toFixed(2).replace('.', ',')}` // subistituido ponto por virgula

result = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(result)