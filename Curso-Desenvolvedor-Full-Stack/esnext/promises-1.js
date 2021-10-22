/*let a = 1

console.log(a)

let  p = new Promise(function(cumprirPromessa){
 
 cumprirPromessa(3)


})

p.then(function(valor){
console.log(valor)
})*/

/*let p = new Promise(function(cumprirPromessa){
	cumprirPromessa(['Ana', 'Bia','Carlos','Daniel'])
})

p.then(function(valor){
	console.log(valor)
})*/

/*let p = new Promise(function(cumprirPromessa){
	cumprirPromessa(['Ana', 'Bia','Carlos','Daniel'])
})
p.then(valor => console.log(valor))
*/

let p = new Promise(function(cumprirPromessa){
	cumprirPromessa(['Ana', 'Bia','Carlos','Daniel'])
})

function primeiroElemento(array){
	valor => valor[0]
}


function primeiraLetra(string){
	return string [0]
}

.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log) 


