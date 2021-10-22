function esperarPor(tempo = 2000){

	return new  Promise (function(resolve){

		setTimeout(function(){

			console.log('Executando Promise .....')
			resolve()
		}, tempo)

	})
}
esperarPor(2000)
.then(esperarPor)
.then(esperarPor)