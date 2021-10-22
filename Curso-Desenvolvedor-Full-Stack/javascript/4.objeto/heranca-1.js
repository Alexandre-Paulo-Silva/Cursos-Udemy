const ferrari = {
    modelo: 'F40',
    velmax: 340

}

const volvo = {
    modelo: 'V40',
    velmax: 200
}

console.log(ferrari.__proto__) //prototipo 

console.log(ferrari.__proto__ === Object.prototype)

console.log(volvo.__proto__ === Object.prototype)

console.log(volvo.__proto__.__proto__ === null)

function meuOjeto() {}