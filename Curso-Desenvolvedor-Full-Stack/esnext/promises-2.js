//time de tempo pra executar uma funcao
setTimeout(function(){

	console.log('Executando callback....')

	setTimeout(function(){

		console.log('Executando callback.....')

		setTimeout(function(){

			console.log('Executando callback....')

		}, 2000)

	}, 2000)

}, 2000)